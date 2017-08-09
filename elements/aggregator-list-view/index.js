/** @jsx React.DOM */
var React = require('react');
var Parent = require('../../nucleus/elements/list-view').Class;
var Link = require('link').Component;
// var Switch = require('switch').Component;
var __ = require('translate');
var Pagination = require('pagination').Component;
var AggregatorListView = jQuery.extend(true, Parent, {
    getDefaultProps: function(){
        return {
            settings: {"no-image": true}
        }
    },

    getTitle: function () {
        var posts = this.props.resource.getEntitiesByClass('post');
        function refreshPage(){
            window.parent.location = window.parent.location.href;
        }
        if(!location.href.startsWith(AggregatorData.config.homeUrl + "?resource=")){
            if(AggregatorData.lang === 'ro'){
                return (
                    React.DOM.div({className: "page-title"}, 
                        React.DOM.h1(null, __('Toate știrele')), 
                        React.DOM.button({className: "monstro-refresh", type: "button", onClick: refreshPage}, React.DOM.span(null, __('Reîmprospătează')))
                    )
                )
            } if(AggregatorData.lang === 'ru'){
                return (
                    React.DOM.div({className: "page-title"}, 
                        React.DOM.h1(null, __('Все новости')), 
                        React.DOM.button({className: "monstro-refresh", type: "button", onClick: refreshPage}, React.DOM.span(null, __('Обновить')))
                    )
                )
            }
        }
        else {
            var category = posts[0].getEntityByClass('category');
            if (posts[0] === undefined) return;
            return (
                React.DOM.div({className: "page-title"}, 
                    React.DOM.h1(null, category.prop('name')), 
                    React.DOM.p({className: "source-URL"}, 
                        React.DOM.a({target: "_blank", rel: "nofollow", href: category.prop('resourceURL'), dangerouslySetInnerHTML: {__html: category.prop('resourceURL')}}), 
                        React.DOM.span({className: "agregator-link-extern"})
                    )
                )
            )
        }
    },

    getPosts: function(){
        var posts = this.props.resource.getEntitiesByClass('post');
        if(posts.length){
            return posts.map(function(post){
                var category = post.getEntityByClass('category');
                var date = new Date(post.prop("date"));
                var formatedDate = date.getDate() + " " + AggregatorData.months[AggregatorData.lang][date.getMonth()] + " " + date.getFullYear() + ", " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
                return (
                    React.DOM.article({key: post.prop('permalink'), className: "type-post " + this.getArticleClasses(post)}, 
                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.h2({className: "entry-title"}, 
                                React.DOM.a({target: "_blank", rel: "nofollow", href: post.prop("permalink"), dangerouslySetInnerHTML: {__html: post.prop("title")}})
                            ), 
                            Link({className: "resource-permalink", href: category.prop('permalink')}, 
                                category.prop('name')
                            ), 
                            React.DOM.div({className: "entry-meta"}, 
                                React.DOM.ul(null, 
                                    React.DOM.li(null, React.DOM.span(null, React.DOM.a({target: "_blank", rel: "nofollow", href: post.prop("permalink"), className: "blog-date", dangerouslySetInnerHTML: {__html: formatedDate}})))
                                )
                            )
                        )
                    )
                )
            }.bind(this));
        } else {
            if(AggregatorData.lang === 'ro'){
                return (
                    React.DOM.div({className: "row"}, 
                        React.DOM.div({className: "columns large-12"}, 
                            React.DOM.h4({className: "monstro-no-posts-msg"}, __('Nicio știre. Reveniți.'))
                        )
                    )
                )
            } if(AggregatorData.lang === 'ru') {
                return (
                    React.DOM.div({className: "row"}, 
                        React.DOM.div({className: "columns large-12"}, 
                            React.DOM.h4({className: "monstro-no-posts-msg"}, __('Нет новостей.'))
                        )
                    )
                )
            }
        }
    },

    render: function(){
        return (
            React.DOM.div(null, 
                this.getTitle(), 
                React.DOM.div({className: "monstro-list-view"}, 
                    this.getPosts()
                ), 
                Pagination({currentPage: this.props.resource.prop('currentPage'), totalPages: this.props.resource.prop('totalPages')})
            )

        )
    }
});
module.exports = {
    Class: AggregatorListView,
    Component: React.createClass(AggregatorListView)
};