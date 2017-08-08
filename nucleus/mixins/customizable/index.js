/** @jsx React.DOM */
var Fluxxor = require('fluxxor');
var React = require('react');
var actions = require('../../actions.js');
var Customizable = function(slug, title, settingsModuleCb){
    return {
        mixins: [Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin('Customizables')],
        CustomizationDropdown: null,
        settingsComponent: null,
        getInitialState: function(){ return { customizationPrerequizitesHaveBeenDownloaded: false } },
        getStateFromFlux: function(){ return { isBeingCustomized: this.getFlux().store("Customizables").isBeingCustomized(this)}},

        componentWillUpdate: function(whatever, nextState){
            if(nextState.isBeingCustomized && !nextState.customizationPrerequizitesHaveBeenDownloaded){
                var that = this;
                require(['../../elements/customization-dropdown'], function(CustomizationDropdown){
                    that.CustomizationDropdown = CustomizationDropdown.Component;
                    if(settingsModuleCb){
                        settingsModuleCb(function(SettingsModule){
                            that.settingsComponent = SettingsModule.Component;
                            that.setState({ customizationPrerequizitesHaveBeenDownloaded: true});
                        });
                    }
                });
            }
        },

        customizationStart: function(event){
            if('undefined' != typeof event){
                event.preventDefault();
                event.stopPropagation();
            }
            this.getFlux().actions.customize(this);
        },

        initCustomizable: function(){
            this.getFlux().store("Customizables").registerCustomizable(slug, title, this);
            jQuery(this.getDOMNode()).dblclick(this.customizationStart);
        },

        unbindCustomizationEvent: function(){
            jQuery(this.getDOMNode).off('dblclick', this.customizationStart);
        },

        componentDidMount: function(){
            if(this.props.allowCustomization){
                this.initCustomizable();
            }
        },

        getCustomizationDropdown: function(position){
            console.warn('.getCustomizationDropdown is deprecated! Please stop! Use tether!');
            if(this.state.isBeingCustomized && this.state.customizationPrerequizitesHaveBeenDownloaded){
                var CustomizationDropdown = this.CustomizationDropdown;
                return (
                    CustomizationDropdown({position: position, thisComponentSlug: slug, settingsComponent: this.settingsComponent, target: this})
                );
            }
        }
    }
};

module.exports = Customizable;