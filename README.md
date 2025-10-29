# node-red-contrib-growatt

With this node you can download data from the Growatt© Shine Webserver. It is only a wrapper around the existing library of PLCHome. Thanks for that!


## Installation of Node-RED nodes

You can install the growatt node through the Node-RED library. Search for 'node-red-contrib-growatt'.


## Usage

After creating a 'Growatt' node, create at least one config node for the credentials you use to login at your ShinePhone app or on https://server.growatt.com. The config node you can reuse on several 'Growatt' nodes.

As soon as a message arrives at the input of the node, the API call will be performed. The API result will be send as a new message through the output.


## Known issues

This node does not support the parameters historyLastStartDate, historyLastEndDate and historyStart at the moment, which is already available on the underlaying library.


## Contact / Issues

If you have issues with the Node-RED implementation: https://github.com/RichardPointon/node-red-contrib-growatt

If you have issues with the underlaying growatt API library: https://github.com/PLCHome/growatt

## Upgrading

If you are upgrading from version 1.1.2 then you will need to remove the old version node-red-contrib-growatt

    npm remove node-red-contrib-growatt

and restart Node Red.

## Version History
Version 1.1.3:
- Forked and update dependency to 0.7.7. Refactoring for better error handling

Version 1.1.2:
- Update growatt dependency to 0.7.4 (fixes login error)

Version 1.1.0:
- Update growatt dependency to 0.4.1

Version 1.0.0:
- Initial release

## License

This project is licensed under the [MIT License](LICENSE).

**Originally created by:** [Thorsten Heilmann](https://github.com/Looking4Cache)  
**Maintained by:** [Richard Pointon](https://github.com/RichardPointon)


## Maintained Fork Notice

This repository is a maintained fork of [`node-red-contrib-growatt`](https://github.com/Looking4Cache/node-red-contrib-growatt) by Thorsten Heilmann.

The original project is no longer actively maintained.  
This fork continues development with fixes and enhancements to ensure
compatibility with current **Node-RED versions** and **Growatt inverter APIs**.

