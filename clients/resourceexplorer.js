require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['resourceexplorer'] = {};
AWS.ResourceExplorer = Service.defineService('resourceexplorer', ['2018-05-10']);
Object.defineProperty(apiLoader.services['resourceexplorer'], '2018-05-10', {
  get: function get() {
    var model = require('../apis/resource-explorer-2018-05-10.min.json');
    model.paginators = require('../apis/resource-explorer-2018-05-10.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.ResourceExplorer;
