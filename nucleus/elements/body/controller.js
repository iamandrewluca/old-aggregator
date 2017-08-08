module.exports = function(flux){
    var $el = jQuery('body');
    var resourceStore = flux.store('Resource');
    var oldClasses;
    function updateClasses(){
        var resource = resourceStore.getResource();
        var settings = resourceStore.getSettings('post-type-archive');
        if(!(settings && resource)) return;
        if(oldClasses){
            $el.removeClass(oldClasses);
        }
        var newClasses = resource.getClasses();
        newClasses.push('monstro-' + settings.content.width + '-view');
        switch(settings.header.type){
            case 'left': newClasses.push('header-left'); break;
            case 'centered': newClasses.push(settings.header.menu.enableHamburgerMenu ? 'header-hamburger' : 'header-centered');
        }
        newClasses = newClasses.join(' ');
        $el.addClass(newClasses);
        oldClasses = newClasses;

    }
    resourceStore.on("change", updateClasses);
    return {

    }
};