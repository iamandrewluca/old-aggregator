const Fluxxor = require('fluxxor');
const constants = require('../nucleus/actions').constants;

const ConfigStore = {
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
