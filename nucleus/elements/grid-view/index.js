/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var Image = require('../image').Component;
var __ = require('../../translate');
var GridMixin = require('../../mixins/grid');
var GridView = {
    mixins: [GridMixin],
    hasFeatImg: function(post){
        return post.hasEntity('featured-image');
    },

    getFeatImg: function(post){
        if(this.hasFeatImg(post)){
            var featuredImage = post.getEntityByClass('featured-image');
            return (
                Image({src: featuredImage.getLink('self'), className: "featured-image"})
            )
        }
    },

    getHeader: function(post){
        if(this.props.settings['no-image'] || this.hasFeatImg(post)){
            var category = post.getEntityByClass(['term', 'category']);
            return (
                React.DOM.header({className: "entry-header"}, 
                    React.DOM.div({className: "featimg"}, 
                        Link({className: "image", href: post.prop('permalink'), title: "", rel: "bookmark"}, 
                            this.getFeatImg(post)
                        ), 
                        React.DOM.div({className: "entry-category"}, 
                            Link({href: category.prop('permalink')}, category.prop('name'))
                        ), 
                        React.DOM.div({className: "entry-feat-overlay"}, 
                            Link({href: post.prop('permalink')}, " ")
                        )
                    )
                )
            )
        }
    },

    getArticleClasses: function(post){
        var classes = post.getClasses();
        if(this.props.settings['no-image'] && !this.hasFeatImg(post)){
            classes.push('no-feat-img');
        }
        return classes.join(' ');
    },

    getPost: function(post){
        var date = post.getEntityByClass('date');
        var author = post.getEntityByClass('author');
        return (
            React.DOM.article({className: "type-post" + this.getArticleClasses(post)}, 
                this.getHeader(post), 
                React.DOM.section({className: "entry-content"}, 
                    React.DOM.h2({className: "entry-title"}, 
                        Link({href: post.prop('permalink'), dangerouslySetInnerHTML: {__html: post.prop('title')}})
                    ), 
                    React.DOM.div({className: "entry-date"}, 
                        Link({href: date.prop('permalink'), className: "blog-date", dangerouslySetInnerHTML: {__html: date.prop('text')}})
                    ), 
                    React.DOM.div({className: "entry-excerpt", dangerouslySetInnerHTML: {__html: post.prop('excerpt')}})
                ), 
                React.DOM.footer({className: "entry-footer"}, 
                    Link({className: "read-more", href: post.prop('permalink'), title: "", rel: "bookmark"}, __('Discover Story'))
                )
            )
        )
    },


    render: function(){
        return (
            React.DOM.div(null, 
                React.DOM.div({className: "row monstro-grid-view"}, /*Add .no-gutter */
                    this.getPosts()
                ), 
                Link({href: "javascript:void(0)"}, 
                    React.DOM.span({className: "icon-latest load-more-galleries"})
                )
            )

        )
    }
};

module.exports = {
    Class: GridView,
    Component: React.createClass(GridView)
};