var Fluxxor = require('Fluxxor');
var constants = require('../nucleus/actions').constants;

var ConfigStore = {
    initialize: function(){
        //__webpack_public_path__ = MonstroThemeData.config.assetsUrl + '/concat/';
        this.bindActions(constants.BOOTSTRAP, this.onBootstrap);
    },
    onBootstrap: function(){
        this.config = AggregatorData.config;
        this.emit("change");
    },
    getConfig: function(){
        return this.config
    }
};

module.exports = {
    Class: ConfigStore,
    Store: Fluxxor.createStore(ConfigStore)
};