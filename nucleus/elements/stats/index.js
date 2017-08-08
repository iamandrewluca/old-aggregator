/** @jsx React.DOM */
var React = require('react');
var MonstroStats = {
    render: function(){
        return (
            React.DOM.div({className: "monstro-stats"}, 
                React.DOM.ul(null, 
                    React.DOM.li(null, 
                        React.DOM.strong(null, "720"), 
                        React.DOM.span(null, "views")
                    )
                )
            )
        )
    }
};

module.exports = {
    Class: MonstroStats,
    Component: React.createClass(MonstroStats)
};