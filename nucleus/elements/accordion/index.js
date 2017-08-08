/** @jsx React.DOM */
var React = require('react');
var AccordionNavigation = require('./navigation').Component;
var Accordion = {
    getInitialState: function(){
        return {open: 0}
    },
    setActive: function(index){
        return function(){
            this.setState({
                open: index
            });
        }.bind(this);
    },
    render: function(){
        var children = this.props.children.map(function(child, index){
            var open = this.state.open == index;
            return (
                AccordionNavigation({title: child.props.title, href: child.props.href, open: open, 
                onSelected: this.setActive(index), key: index}, 
                    child.props.children
                )
            );
        }.bind(this));
        return React.DOM.dl({className: "accordion"}, 
            children
        )
    }
};

module.exports = {
    Class: Accordion,
    Component: React.createClass(Accordion)
};