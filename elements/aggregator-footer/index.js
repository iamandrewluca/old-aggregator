/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
// var __ = require('translate');
var AggregatorFooter = {
    mixins: [Fluxxor.FluxMixin(React)],
    render: function(){
        return (
            React.DOM.footer({id: "footer-container"}, 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "large-12 columns"}, 
                        React.DOM.p({className: "copyright"}, "Copyright © 2014-2017. Toate drepturile rezervate.")
                    )

                )
            )
        )
    }
};
module.exports = {
    Class: AggregatorFooter,
    Component: React.createClass(AggregatorFooter)
};