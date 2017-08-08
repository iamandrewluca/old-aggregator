/** @jsx React.DOM */
var React = require('react');
var Voting = {
    render: function(){
        return (
            React.DOM.div({className: "monstro-vote"}, 
                React.DOM.div({className: "monstro-vote-sticky"}, 
                    React.DOM.div({className: "monstro-float-vote"}, 
                        React.DOM.ul({className: "heart"}, 
                            React.DOM.li({className: "count"}, React.DOM.span(null, "4")), 
                            React.DOM.li(null, 
                                React.DOM.a({href: "#", className: "good"}, 
                                    React.DOM.span({className: "icon"})
                                )
                            )
                        )
                    )
                )
            )
        )
    }
};

module.exports = {
    Class: Voting,
    Component: React.createClass(Voting)
};