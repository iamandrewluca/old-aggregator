/** @jsx React.DOM */
var React = require('react');
var Dropdown = require('../dropdown').Component;
var CustomizableElementsSwitcher = require('../customizable-elements-switcher').Component;
var __ = require('../../translate');
var DropdownButton = require('../dropdown-button').Component;
var Fluxxor = require('fluxxor');
var CustomizationDropdown = {
    mixins:[Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("Resource")],
    getInitialState: function(){ return {currentCustomizationLevel: 'global'}},
    getStateFromFlux: function() {
        var resource = this.getFlux().store("Resource").getResource();
        var frontPageSingleOrArchiveSlug = 'front-page-single-or-archive';
        var customizationLevels = {
            global: {
                label: this.getFlux().store("Resource").getSettingsLevelName('global'),
                value: 'global'
            }
        };
        customizationLevels[frontPageSingleOrArchiveSlug] = {
            label: this.getFlux().store("Resource").getSettingsLevelName(frontPageSingleOrArchiveSlug),
            value: frontPageSingleOrArchiveSlug
        };
        return {customizationLevels: customizationLevels};
    },

    onSubmit: function(event){
        event.preventDefault();
    },

    onCustomizationLevelChanged: function(newCustomizationLevel){
        this.setState({currentCustomizationLevel: newCustomizationLevel});
    },

    getCustomizationLevels: function(){
        var items = Object.keys(this.state.customizationLevels)
            .filter(function(key){return key != this.state.currentCustomizationLevel}.bind(this))
            .map(function(key){return this.state.customizationLevels[key]}.bind(this));
        return (
            React.DOM.span(null, 
                " ", 
                __('for'), 
                " ", 
                DropdownButton({items: items, className: "secondary small", id: "settings-level-navigation", 
                    onSelected: this.onCustomizationLevelChanged}, 
                    this.state.customizationLevels[this.state.currentCustomizationLevel].label
                )
            )
        )
    },

    render: function(){
        var SettingsComponent = this.props.settingsComponent;
        var settings = this.getFlux().store("Resource").getResource().getEntityByClass(['settings', this.state.currentCustomizationLevel]).getProps();
        return (
            Dropdown({position: this.props.position, onClose: this.cancelCustomization, width: "800"}, 
                React.DOM.form({onSubmit: this.onSubmit}, 
                    React.DOM.label(null, 
                        CustomizableElementsSwitcher({thisComponentSlug: this.props.thisComponentSlug}), 
                        this.getCustomizationLevels()
                    ), 
                    React.DOM.hr(null), 
                    React.DOM.div({className: "customization-content"}, 
                        SettingsComponent({settings: settings, customizationLevel: this.state.currentCustomizationLevel, 
                            inheritanceChecker: this.getFlux().store("Resource"), onCustomizationLevelChanged: this.onCustomizationLevelChanged, 
                            target: this.target})
                    ), 
                    React.DOM.hr(null), 
                    React.DOM.label({id: "save-cancel-customization"}, 
                        React.DOM.a({href: "javascript:void(0);", onClick: this.customizationSuccess, className: "button tiny success"}, 
                            __('Save')
                        ), 
                        React.DOM.a({href: "javascript:void(0);", onClick: this.customizationCancel, className: "button tiny secondary"}, 
                            __('Cancel')
                        )
                    )
                )
            )
        )
    }
};

module.exports = {
    Class: CustomizationDropdown,
    Component: React.createClass(CustomizationDropdown)
};