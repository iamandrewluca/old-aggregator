/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var Breadcrumbs = {
    render: function(){
        return (
            React.DOM.div({className: "breadcrumbs"}, 
                React.DOM.ul(null, 
                    React.DOM.li(null, Link({href: "#"}, "Home")), 
                    React.DOM.li(null, Link({href: "#"}, "Category"))
                )
            )
        )
    }
};

module.exports = {
    Class: Breadcrumbs,
    Component: React.createClass(Breadcrumbs)
};