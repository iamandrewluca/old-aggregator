var Fluxxor = require('Fluxxor');
var constants = require('../actions').constants;

var SharedStateStore = {
    initialize: function(){
    }
};

module.exports = {
    Class: SharedStateStore,
    Store: Fluxxor.createStore(SharedStateStore)
};