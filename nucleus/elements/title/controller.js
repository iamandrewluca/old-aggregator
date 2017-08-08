module.exports = function(resourceStore){
    var $el = jQuery('title');
    resourceStore.on("change", function(){
        var resource = resourceStore.getResource();
        $el.html(resource.getProps().title);
    });
};