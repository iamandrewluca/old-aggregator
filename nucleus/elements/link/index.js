/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var Courier = require('../../utils/courier');
var URIjs = require('URIjs');
var Link = {
    mixins:[Fluxxor.FluxMixin(React)],
    navigate: function (event){
        event.preventDefault();
        this.getFlux().actions.navigate(this.props.href);
    },
    precacheOnHover: function (){
        var url = new URIjs(this.props.href);
        if(!url.hasSearch('monstro-api')){
            url.addSearch('monstro-api', 'json');
        }
        Courier.fetchJson(url.toString());
    },
    render: function (){
        return this.transferPropsTo(
            React.DOM.a({href: this.props.href, onMouseEnter: this.precacheOnHover, onClick: this.navigate}, 
                this.props.children
            )
        )
    }
};

module.exports = {
    Class: Link,
    Component: React.createClass(Link)
};