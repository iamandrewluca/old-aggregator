module.exports = function(ms, cb){
    var timeout = null;
    return function(){
        var args = arguments;
        var that = this;
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(function(){
            timeout = null;
            cb.apply(that, args);
        }, ms);
    }
};