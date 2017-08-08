var Fluxxor = require('Fluxxor');
var constants = require('../actions').constants;
var currentCustomizable = null;
var CustomizablesStore = {
    initialize: function(){
        this.customizables = {};
        this.bindActions(constants.CUSTOMIZE, this.setCustomizable);
    },

    setCustomizable: function(newCustomizable){
        if('more' == newCustomizable){
            currentCustomizable = 'more-settings';
        } else if('string' == typeof newCustomizable){
            var customizablesWithSlug = this.customizables[newCustomizable];
            if(customizablesWithSlug.components.length){
                currentCustomizable = customizablesWithSlug.components[0];
            }
        } else {
            currentCustomizable = newCustomizable;
        }
        this.emit("change");
    },

    isBeingCustomized: function(suspect){
        return currentCustomizable == suspect;
    },

    registerCustomizable: function(slug, title, component){
        if('undefined' == typeof this.customizables[slug]){
            this.customizables[slug] = {
                title: title,
                components: []
            }
        }
        if(-1 == this.customizables[slug].components.indexOf(component)){
            this.customizables[slug].components.push(component);
        }
    },

    getCustomizables: function(){
        return this.customizables;
    }
};

module.exports = {
    Class: CustomizablesStore,
    Store: Fluxxor.createStore(CustomizablesStore)
};