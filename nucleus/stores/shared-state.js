var Fluxxor = require('fluxxor');
var constants = require('../actions').constants;

var SharedStateStore = {
    initialize: function(){
    }
};

module.exports = {
    Class: SharedStateStore,
    Store: Fluxxor.createStore(SharedStateStore)
};