/** @jsx React.DOM */
var React = require('react');
var Link = require('link').Component;
var Customizable = require('customizable');
var __ = require('translate');
var MainMenu = {
    mixins: [Customizable('main-menu', __('Main menu'), function(cb){
        require(['main-menu/settings'], cb);
    })],

    mapItems: function(item){
        var children = null;
        if(item.children){
            children = (
                React.DOM.ul({className: "sub-menu"}, 
                    item.children.map(this.mapItems)
                )
            )
        }
        return (
            React.DOM.li({className: "menu-item-has-children"}, 
                Link({href: item.link}, item.text), 
                children
            )
        )
    },

    render: function(){
        var items = this.props.items.map(this.mapItems);
        return (
            React.DOM.nav({className: "main-menu"}, 
                this.getCustomizationDropdown('bottom'), 
                React.DOM.ul(null, 
                    items
                )
            )
        )
    }
};

module.exports = {
    Class: MainMenu,
    Component: React.createClass(MainMenu)
};