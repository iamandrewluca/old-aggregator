/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var __ = require('../../translate');
var MonstroPagination = {
    render: function(){
        return (
            React.DOM.div({className: "monstro-pagination"}, 
                React.DOM.span({className: "page-numbers current "}, "1"), 
                Link({className: "page-numbers ", href: "/page/2/"}, "2"), 
                Link({className: "page-numbers ", href: "/page/3/"}, "3"), 
                Link({className: "page-numbers ", href: "/page/4/"}, "4"), 
                Link({className: "page-numbers ", href: "/page/5/"}, "5"), 
                Link({className: "page-numbers ", href: "/page/6/"}, "6"), 
                Link({className: "next page-numbers ", href: "/page/2/"}, "Next »")
            )
        )
    }
};
module.exports = {
    Class: MonstroPagination,
    Component: React.createClass(MonstroPagination)
};