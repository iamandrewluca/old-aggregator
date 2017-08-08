/** @jsx React.DOM */
var React = require('react');
var Switch = {
    getValue: function(){
        return this.props.checked
    },
    onChange: function(){
        if(this.props.onChange){
            this.props.onChange(!this.refs.theCheckbox.props.checked);
        }
    },
    render: function(){
        return this.transferPropsTo(
            <div className="switch">
                <input type="checkbox" checked={this.props.checked} readOnly={true} ref="theCheckbox"/>
                <label onClick={this.onChange}></label>
            </div>
        );
    }
};

module.exports = {
    Class: Switch,
    Component: React.createClass(Switch)
};