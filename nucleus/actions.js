var Debouncer = require('debouncer');
var URIjs = require('URIjs');
var constants = {
    BOOTSTRAP: 'boostrap',
    NAVIGATE: 'navigate',
    CUSTOMIZE: 'customize',
    UPDATE_SETTINGS: 'update-settings',
    UPDATE_SEARCH_QUERY: 'update-search-query'
};

var debounce = require('debouncer');
var doQuery = debounce(500, function(searchQuery){
    var config = this.flux.store("Config").getConfig();
    var uri = new URIjs(config.homeUrl);
    uri.removeSearch('s');//in case we're already on search results page
    uri.addSearch('s', searchQuery);
    this.flux.actions.navigate(uri.toString());
});

var actions = {
    bootstrap: function(){
        this.dispatch(constants.BOOTSTRAP);
    },

    navigate: function(url, dontPush){
        var push = !dontPush;
        this.dispatch(constants.NAVIGATE, url);
        if(push){
            history.pushState(null, null, url);
        }
    },

    customize: function(newCustomizable){
        this.dispatch(constants.CUSTOMIZE, newCustomizable);
    },

    updateSettings: function(level, deltaOrCb){
        var payload = {
            level: level
        };
        if('function' == typeof deltaOrCb){
            payload['cb'] = deltaOrCb
        } else if('object' == typeof deltaOrCb){
            payload['delta'] = deltaOrCb
        }
        this.dispatch(constants.UPDATE_SETTINGS, payload);
    },

    updateSearchQuery: function (query){
        this.dispatch(constants.UPDATE_SEARCH_QUERY, query);
        doQuery.apply(this, [query]);
    }
};

module.exports = {
    constants: constants,
    actions: actions
};