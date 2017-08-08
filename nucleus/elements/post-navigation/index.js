/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var __ = require('../../translate');
var PostNavigation = {
    getPrevLink: function(){
        if(this.props.prev){
            return (
                React.DOM.div({className: "columns large-5"}, 
                    React.DOM.i({className: "icon-left"}), 
                    Link({href: this.props.prev, rel: "prev"}, __('Previous post'))
                )
            )
        }
    },

    getNextLink: function(){
        if(this.props.next){
            return (
                React.DOM.div({className: "columns large-5"}, 
                    Link({href: this.props.next, rel: "next"}, __('Next post')), 
                    React.DOM.i({className: "icon-right"})
                )
            )
        }
    },

    getUpClasses: function(){
        return this.props.prev ? 2 : 5;
    },

    render: function(){
        return (
            React.DOM.div({className: "post-navigation"}, 
                React.DOM.div({className: "row"}, 
                    this.getPrevLink(), 
                    React.DOM.div({className: "columns large-" + this.getUpClasses()}, 
                        Link({href: this.props.up, className: "icon-root"})
                    ), 
                    this.getNextLink()
                )
            )
        )
    }
};

module.exports = {
    Class: PostNavigation,
    Component: React.createClass(PostNavigation)
};