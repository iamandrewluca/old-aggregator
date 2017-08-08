/** @jsx React.DOM */
var React = require('react');
var ButtonRadio = {
    getInitialState: function(){
        return {
            selected: this.props.selected ? this.props.selected : this.props.options[0].value
        }
    },
    select: function(value){
        return function(){
            if('undefined' != typeof this.props.onSelected){
                this.props.onSelected(value);
            }
        }.bind(this);
    },
    render: function(){
        var options = this.props.options.map(function(item){
            var secondaryClass = item.value == this.props.selected ? '' : ' secondary';
            if(this.props.disabled){
                secondaryClass += ' disabled';
            }
            return React.DOM.li({onClick: this.select(item.value)}, 
                React.DOM.a({href: "javascript:void(0);", className: "button tiny" + secondaryClass}, 
                    item.label
                )
            )
        }.bind(this));
        return React.DOM.ul({className: "button-group radius"}, 
            options
        )

    }
};

module.exports = {
    Class: ButtonRadio,
    Component: React.createClass(ButtonRadio)
};