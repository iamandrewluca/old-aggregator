const URIjs = require('URIjs');
const constants = {
    BOOTSTRAP: 'boostrap',
    NAVIGATE: 'navigate',
    CUSTOMIZE: 'customize',
    UPDATE_SETTINGS: 'update-settings',
    UPDATE_SEARCH_QUERY: 'update-search-query'
};

const debounce = require('debouncer');
const doQuery = debounce(500, function(searchQuery){
    const config = this.flux.store("Config").getConfig();
    const uri = new URIjs(config.homeUrl);
    uri.removeSearch('s');//in case we're already on search results page
    uri.addSearch('s', searchQuery);
    this.flux.actions.navigate(uri.toString());
});

const actions = {
    bootstrap: function(){
        this.dispatch(constants.BOOTSTRAP);
    },

    navigate: function(url, dontPush){
        const push = !dontPush;
        this.dispatch(constants.NAVIGATE, url);
        if(push){
            history.pushState(null, null, url);
        }
    },

    customize: function(newCustomizable){
        this.dispatch(constants.CUSTOMIZE, newCustomizable);
    },

    updateSettings: function(level, deltaOrCb){
        const payload = {
            level: level
        };
        if('function' === typeof deltaOrCb){
            payload['cb'] = deltaOrCb
        } else if('object' === typeof deltaOrCb){
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
