/** @jsx React.DOM */
var React = require('react');
var Customizable = require('../../mixins/customizable');
var __ = require('../../translate');
var Copyright = {
    mixins: [Customizable('copyright', __("Copyright"))],
    render: function(){
        return (
            React.DOM.div({className: "large-9 columns"}, 
                this.getCustomizationDropdown('top'), 
                React.DOM.p({className: "copyright", dangerouslySetInnerHTML: {__html: this.props.text}})
            )
        )
    }
};

module.exports = {
    Class: Copyright,
    Component: React.createClass(Copyright)
}