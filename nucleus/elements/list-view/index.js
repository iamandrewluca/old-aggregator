/** @jsx React.DOM */
var React = require('react');
var Link = require('link').Component;
var Image = require('image').Component;
var MonstroPagination = require('pagination').Component;
var SocialShare = require('social-share').Component;
var __ = require('translate');
var ListView = {
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

    getFeatImgBlock: function (post){
        if(this.props.settings['no-image'] || this.hasFeatImg(post)){
            var category = post.getEntityByClass(['term', 'category']);
            return (
                React.DOM.div({className: "featimg"}, 
                    Link({className: "image", href: post.prop("permalink"), title: "", rel: "bookmark"}, 
                        this.getFeatImg(post)
                    ), 
                    React.DOM.div({className: "entry-category"}, 
                        Link({href: category.prop('permalink')}, category.prop('name'))
                    ), 
                    React.DOM.div({className: "entry-feat-overlay"}, 
                        Link({href: post.prop("permalink")}, " ")
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

    getCommentsNumber: function(post){
        if(post.prop("commentsOpen")){
            return (
                React.DOM.li(null, 
                    React.DOM.span(null, 
                        Link({className: "comment", href: post.prop("permalink") + "#comments", dangerouslySetInnerHTML: {__html: post.prop("nrComments")}})
                    )
                )
            )
        }
    },

    getPosts: function(){
        var posts = this.props.resource.getEntitiesByClass('post');
        if(posts.length){
            return posts.map(function(post){
                var date = post.getEntityByClass('date');
                var author = post.getEntityByClass('author');
                //TODO: Category name #66
                return (
                    React.DOM.article({className: "type-post" + this.getArticleClasses(post)}, 
                        React.DOM.header({className: "entry-header meta-below"}, 
                            React.DOM.h2({className: "entry-title"}, 
                                Link({href: post.prop("permalink"), dangerouslySetInnerHTML: {__html: post.prop("title")}})
                            ), 
                            React.DOM.div({className: "entry-meta"}, 
                                React.DOM.ul(null, 
                                    React.DOM.li(null, __('by'), " ", Link({href: author.getLink('self'), dangerouslySetInnerHTML: {__html: author.prop("displayName")}})), 
                                    React.DOM.li(null, React.DOM.span(null, Link({href: date.prop("permalink"), className: "blog-date", dangerouslySetInnerHTML: {__html: date.prop("text")}}))), 
                                    this.getCommentsNumber(post)
                                )
                            ), 
                            this.getFeatImgBlock(post)
                        ), 
                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.div({className: "entry-excerpt", dangerouslySetInnerHTML: {__html: post.prop("excerpt")}})
                        ), 
                        React.DOM.footer({className: "entry-footer"}, 
                            SocialShare({link: post.prop("permalink")}), 
                            Link({className: "read-more", href: post.prop("permalink")}, __('Discover Story'))
                        )
                    )
                )
            }.bind(this));
        } else {
            return (
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "columns large-12"}, 
                        React.DOM.h1({className: "monstro-no-posts-msg"}, __('No posts found'))
                    )
                )
            )
        }
    },
    render: function(){
        return (
            React.DOM.div(null, 
                React.DOM.div({className: "monstro-list-view"}, 
                    this.getPosts()
                ), 

                React.DOM.div({className: "monstro-load-more"}, 
                    Link({href: "javascript:void(0)"}, 
                        React.DOM.span({className: "icon-latest load-more-galleries"})
                    )
                ), 
                MonstroPagination(null)
            )

        )
    }
};

module.exports = {
    Class: ListView,
    Component: React.createClass(ListView)
};