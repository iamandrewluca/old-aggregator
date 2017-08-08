/** @jsx React.DOM */
var React = require('react');
var Tabs = {
    getCallbackFunction: function(id){
        return function(){
            this.props.onTabChanged(id);
        }.bind(this);
    },
    render: function(){
        var tabs = this.props.tabs.map(function(tab, index){
            var id = tab.slug || index;
            var activeClass = (id == this.props.active ? " active" : '');
            return (
                <li className={"tab-title" + activeClass} onClick={this.getCallbackFunction(id)}>
                    <a href="javascript:void(0);">{tab.title}</a>
                </li>
            )
        }.bind(this));
        return (
            <ul className="radius tabs">
                {tabs}
            </ul>
        )
    }
};

module.exports = {
    Class: Tabs,
    Component: React.createClass(Tabs)
};