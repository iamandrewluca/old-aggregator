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
            content = <div className="content active">
                {this.props.children}
            </div>
        }
        var href = this.props.href || 'javascript:void(0);';
        return <dd className={"accordion-navigation" + activeClass}>
            <a href={href} onClick={this.open}>{this.props.title}</a>
            {content}
        </dd>
    }
};

module.exports = {
    Class: AccordionNavigation,
    Component: React.createClass(AccordionNavigation)
};