var cache = {};
module.exports = {
    fetchJson: function(url, forceUpdate, clearHistory){
        if(('undefined' == typeof cache[url]) || (('undefined' != typeof forceUpdate) && forceUpdate)){
            cache[url] = jQuery.get(url, null, null, 'json');
        }
        if(('undefined' != typeof clearHistory) && clearHistory){
            setTimeout(function(){
                delete cache[url];
            });
        }
        return cache[url];
    },

    updateCache: function(url, data){
        cache[url] = data;
    }
};