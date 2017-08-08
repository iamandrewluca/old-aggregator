/** @jsx React.DOM */
var React = require('react');
var AccordionNavigation = {
    open: function(event){
        if(!this.props.open && this.props.children && this.props.onSelected){
            event.preventDefault();
            this.props.onSelected();
        }
    },
    render: function(){
        var content;
        var activeClass = '';
        if(this.props.open){
            activeClass = " active";
            content = React.DOM.div({className: "content active"}, 
                this.props.children
            )
        }
        var href = this.props.href || 'javascript:void(0);';
        return React.DOM.dd({className: "accordion-navigation" + activeClass}, 
            React.DOM.a({href: href, onClick: this.open}, this.props.title), 
            content
        )
    }
};

module.exports = {
    Class: AccordionNavigation,
    Component: React.createClass(AccordionNavigation)
};