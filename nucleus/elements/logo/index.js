/** @jsx React.DOM */
var React = require('react');
var Customizable = require('customizable');
var __ = require('translate');
var Link = require('link').Component;
var Image = require('image').Component;
var Logo = {
    mixins: [Customizable('logo', __('Logo'), function(cb){
        require(['logo/settings'], cb);
    })],
    getSettingsSnapshot: function(){
        return {
            type: this.props.type
        }
    },
    getImageLogo: function(){
        return (
            React.DOM.div({className: "logo-image"}, 
                Image({src: this.props.settings.imageUrl})
            )
        )
    },
    getTextLogo: function(){
        return (
            React.DOM.h1(null, "Aella")
        )
    },
    render: function(){
        var logo = 'image' == this.props.settings.type ? this.getImageLogo() : this.getTextLogo();
        return (
            React.DOM.div({className: "logo", id: "main-logo"}, 
                this.getCustomizationDropdown("bottom"), 
                Link({href: this.props.homeUrl}, 
                    logo
                )
            )
        )
    }
};

module.exports = {
    Class: Logo,
    Component: React.createClass(Logo)
};