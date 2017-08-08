/** @jsx React.DOM */
var React = require('react');
var Sidebar = {
    render: function(){
        return (
            React.DOM.aside({className: "widget"}, 
                React.DOM.div({className: "widget_text"}, 
                    React.DOM.p({className: "widget-delimiter"}, " "), 
                    React.DOM.h5({className: "widget-title"}, "Real-time customizer"), 
                    React.DOM.div({className: "textwidget"}, 
                        React.DOM.p(null, "Note: Settings will not be saved and some features will not work due to security reasons.")
                    )
                )
            )
        )
    }
};

module.exports = {
    Class: Sidebar,
    Component: React.createClass(Sidebar)
};