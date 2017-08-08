/** @jsx React.DOM */
var React = require('react');
var Search = {
    render: function(){
        return (
            React.DOM.div({id: "searchform", className: "searchform standard"}, 
                React.DOM.form({id: "ui-element", action: "javascript:void(0);", method: "post", className: ""}, 
                    React.DOM.input({className: "searchform-input ng-pristine ng-valid", placeholder: "Search", type: "search", name: "search", id: "search", autocomplete: "off"}), 
                    React.DOM.input({className: "searchform-submit", type: "submit", value: ""}), 
                    React.DOM.span({className: "sb-icon-search"})
                )
            )
        )
    }
};

module.exports = {
    Class: Search,
    Component: React.createClass(Search)
};