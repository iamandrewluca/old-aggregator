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
                    <div className="page-title">
                        <h1>{__('Toate știrele')}</h1>
                        <button className="monstro-refresh" type="button" onClick={refreshPage}><span>{__('Reîmprospătează')}</span></button>
                    </div>
                )
            } if(AggregatorData.lang === 'ru'){
                return (
                    <div className="page-title">
                        <h1>{__('Все новости')}</h1>
                        <button className="monstro-refresh" type="button" onClick={refreshPage}><span>{__('Обновить')}</span></button>
                    </div>
                )
            }
        }
        else {
            var category = posts[0].getEntityByClass('category');
            if (posts[0] === undefined) return;
            return (
                <div className="page-title">
                    <h1>{category.prop('name')}</h1>
                    <p className="source-URL">
                        <a target="_blank" rel="nofollow" href={category.prop('resourceURL')} dangerouslySetInnerHTML={{__html: category.prop('resourceURL') }} />
                        <span className="agregator-link-extern" />
                    </p>
                </div>
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
                    <article key={post.prop('permalink')} className={"type-post " + this.getArticleClasses(post)}>
                        <header className="entry-header">
                            <h2 className="entry-title">
                                <a target="_blank" rel="nofollow" href={post.prop("permalink")} dangerouslySetInnerHTML={{__html: post.prop("title")}}/>
                            </h2>
                            <Link className="resource-permalink" href={category.prop('permalink')}>
                                {category.prop('name')}
                            </Link>
                            <div className="entry-meta">
                                <ul>
                                    <li><span><a target="_blank" rel="nofollow" href={post.prop("permalink")} className="blog-date" dangerouslySetInnerHTML={{__html: formatedDate}} /></span></li>
                                </ul>
                            </div>
                        </header>
                    </article>
                )
            }.bind(this));
        } else {
            if(AggregatorData.lang === 'ro'){
                return (
                    <div className="row">
                        <div className="columns large-12">
                            <h4 className="monstro-no-posts-msg">{__('Nicio știre. Reveniți.')}</h4>
                        </div>
                    </div>
                )
            } if(AggregatorData.lang === 'ru') {
                return (
                    <div className="row">
                        <div className="columns large-12">
                            <h4 className="monstro-no-posts-msg">{__('Нет новостей.')}</h4>
                        </div>
                    </div>
                )
            }
        }
    },

    render: function(){
        return (
            <div>
                {this.getTitle()}
                <div className="monstro-list-view">
                    {this.getPosts()}
                </div>
                <Pagination currentPage={this.props.resource.prop('currentPage')} totalPages={this.props.resource.prop('totalPages')}/>
            </div>

        )
    }
});
module.exports = {
    Class: AggregatorListView,
    Component: React.createClass(AggregatorListView)
};