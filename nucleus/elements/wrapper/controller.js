module.exports = function(flux){
    var $el = jQuery('#monstro-wrapper');
    var resourceStore = flux.store('Resource');
    var oldClasses;
    function updateClasses(){
        var resource = resourceStore.getResource();
        var settings = resourceStore.getSettings('post-type-archive');
        if(!(settings && resource)) return;
        if(oldClasses){
            $el.removeClass(oldClasses);
        }
        var newClasses = [];
        if('left' != settings.header.type){
            newClasses.push('monstro-align-' + settings.content.align);
        }
        newClasses = newClasses.join(' ');
        $el.addClass(newClasses);
        oldClasses = newClasses;
    }
    resourceStore.on("change", updateClasses);
};