module.exports = function(RED) {
  const api = require('growatt')

  async function pullData(node, config, send, done) {
    // Create new API object and login
    const growatt = new api({});
    node.log(node.confignode.username)
    let login = await growatt.login(node.confignode.username,node.confignode.password).catch(e => {
      if (done) {
        done(e);
      }
    });

    if (login === undefined) {
      // login failed
      return;
    }

    // Get data of all plants
    let options = {
      plantData: config.optionplantdata,
      deviceData: config.optiondevicedata,
      weather: config.optionweather,
      totalData: config.optiontotaldata,
      statusData: config.optionstatusdata,
      deviceType: config.optiondevicetyp,
      historyLast: config.optionhistorylast,
      historyAll: config.optionhistoryall
    }
    if (config.optionplantid !== "") {
      options.plantId = config.optionplantid;
    }
    await growatt.getAllPlantData(options)
    .then((getAllPlantData)=> {
      // Send data as message
      const msg = {
          "_msgid": RED.util.generateId(),
          "payload": getAllPlantData
      }
      send(msg);
    })
    .catch(e => {
      done(e);
    })
    .finally(async ()=> {
      // Logout
      let logout = await growatt.logout().catch(e => {
        node.error(e);
      });
    });
  }

  function GrowattNode(config) {
    RED.nodes.createNode(this,config);
    const node = this;

    // Retrieve the config node
    node.confignode = RED.nodes.getNode(config.confignode);
    if (node.confignode == undefined) {
      node.log("No configuration found.");
    }

    // Act on incomming messages
    node.on('input', function(msg, send, done) {
      if (node.confignode != undefined) {
        pullData(node, config, send, done);
      }
    })
  }

  RED.nodes.registerType("growatt",GrowattNode);

}
