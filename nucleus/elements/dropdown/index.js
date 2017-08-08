/** @jsx React.DOM */
var Blurable = require('../../mixins/blurable');
var React = require('react');
var Dropdown = {
    mixins: [Blurable],
    componentWillMount: function(){
        this.onBluredCallback = this.props.onClose;
    },
    render: function(){
        var style = {
            position: "absolute",
            zIndex: 1000,
            width: this.props.width || 300
        };
        var drop = this.props.position;
        switch(this.props.position){
            case 'right':
                style.top = 10;
                style.left = "100%";
                break;
            case 'top':
                style.bottom = "100%";
                style.left = 0;
                break;
            case 'top-middle':
                style.top = 50;
                style.left = "25%";
                style.width = "50%";
                style.maxWidth = "none";
                drop = "top";
                break;
            case 'bottom':
                style.top = "100%";
                style.marginTop = 10;
                style.left = 10;
                break;
            case 'bottom-middle':
                style.top = "75%";
                style.left = "25%";
                style.width = "50%";
                style.maxWidth = "none";
                drop = "bottom";
                break;
        }

        return React.DOM.div({className: "f-dropdown content large open drop-" + drop, 'data-dropdown-content': true, style: style}, 
                this.props.children
        )

    }
};

module.exports = {
    Class: Dropdown,
    Component: React.createClass(Dropdown)
};