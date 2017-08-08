/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var __ = require('../../translate');
var DropdownButton = require('../dropdown-button').Component;
var CustomizableElementSwitcher = {
    mixins:[Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("Customizables")],
    getStateFromFlux: function(){
        return {
            allCustomizables: this.getFlux().store("Customizables").getCustomizables()
        }
    },

    //onSelected: function(selection){
    //    Customizable.allCustomizables.closeAll();
    //    if('more' == selection){
    //        MonstroTheme.setState({sideCustomizer: true});
    //    } else if(this.state.allCustomizables[selection]){
    //        this.state.allCustomizables[selection].component.customizationStart();
    //    }
    //},
    render: function(){
        var items = [];
        for(slug in this.state.allCustomizables){
            if(slug != this.props.thisComponentSlug){
                items.push({
                    value: slug,
                    label: this.state.allCustomizables[slug].title + ' ' + __("settings")
                });
            }
        }
        items.push({
            value: 'more',
            label: __('More settings')
        });

        var thisComponentTitle = this.state.allCustomizables[this.props.thisComponentSlug].title;

        return (
            DropdownButton({className: "small", onSelected: this.getFlux().actions.customize, items: items, id: "customizable-elements-switcher"}, 
                    thisComponentTitle + ' ' + __("settings")
            )
        );
    }
};

module.exports = {
    Class: CustomizableElementSwitcher,
    Component: React.createClass(CustomizableElementSwitcher)
};