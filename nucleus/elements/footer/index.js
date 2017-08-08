/** @jsx React.DOM */
var React = require('react');
var SocialIcons = require('../social-icons').Component;
var Copyright = require('../copyright').Component;
var Footer = {
    componentDidMount: function(){
        var $el = jQuery(this.getDOMNode());
        var footerHeight = $el.outerHeight();
        jQuery("#main").css("padding-bottom", footerHeight);
        $el.css("height", footerHeight);
    },
    render: function(){
        return (
            React.DOM.footer({id: "footer-container", className: "monstro-unboxed"}, 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "columns large-12"}
                        /* future place for footer widgets */
                    ), 
                    Copyright({text: this.props.settings.copyright}), 
                    React.DOM.div({className: "large-3 columns"}, 
                        SocialIcons(null)
                    )
                )
            )
        )
    }
};

module.exports = {
    Class: Footer,
    Component: React.createClass(Footer)
};