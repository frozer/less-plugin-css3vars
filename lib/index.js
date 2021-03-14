var CSS3VariableManager = require('./plugin');

module.exports = {
  install: function(less, pluginManager) {
    pluginManager.addPreProcessor(new CSS3VariableManager());
  },
  printUsage: function() {
    console.log('');
    console.log('CSS3 Variable converter');
  },
  minVersion: [2, 7, 1]
};
