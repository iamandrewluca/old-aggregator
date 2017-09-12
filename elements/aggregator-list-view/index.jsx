/** @jsx React.DOM */
const React = require('react');
const Parent = require('../../nucleus/elements/list-view').Class;
const Link = require('link').Component;
// const Switch = require('switch').Component;
const __ = require('translate');
const Pagination = require('pagination').Component;
const AggregatorListView = jQuery.extend(true, Parent, {
  getDefaultProps: function(){
    return {
      settings: {"no-image": true}
    }
  },

  getTitle: function () {
    const posts = this.props.resource.getEntitiesByClass('post');
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
      const category = posts[0].getEntityByClass('category');
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
    const posts = this.props.resource.getEntitiesByClass('post');
    if(posts.length){
      return posts.map(function(post){
        const category = post.getEntityByClass('category');
        const date = new Date(post.prop("date"));
        const formatedDate = date.getDate() + " " + AggregatorData.months[AggregatorData.lang][date.getMonth()] + " " + date.getFullYear() + ", " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
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

  getTopics: function () {
    const topics = this.props.topics;

    return topics.map(function(topic){
      const date = new Date(parseInt(topic.post.date));
      const formatedDate = date.getDate() + " " + AggregatorData.months[AggregatorData.lang][date.getMonth()] + " " + date.getFullYear() + ", " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
      return (
        <div className="columns small-4" key={topic.post.id}>
          <article className="type-post">
            <header className="entry-header">
              <h2 className="entry-title">
                <a target="_blank" rel="nofollow" href={topic.post.permalink} dangerouslySetInnerHTML={{__html: topic.post.title}}/>
              </h2>
              <Link className="resource-permalink" href={topic.post.source.resource_url}>
                {topic.post.source.name}
              </Link>
              <div className="entry-meta">
                <ul>
                  <li><span><a target="_blank" rel="nofollow" href={topic.post.permalink} className="blog-date" dangerouslySetInnerHTML={{__html: formatedDate}} /></span></li>
                </ul>
              </div>
            </header>
          </article>
        </div>
      )})
  },

  render: function(){

    const noSources = this.props.resources.every(function(resource) {
      return resource.selected === false
    });

    return (
      <div>
        {this.getTitle()}
        <div className="monstro-list-view">

          {this.props.topics && this.props.topics.length && (
            <div>
              <h5>{__('3 Teme ale zilei')}</h5>
              <div className="row">
                {this.getTopics()}
              </div>
            </div>
          )}

          {noSources ? (
            <div className="row">
              <div className="columns large-12">
                <h4 className="monstro-no-posts-msg">{__('Lipsa știrilor e cea mai bună știre - ai deconectat toate sursele.')}</h4>
              </div>
            </div>
          ) : <div>
            <h5>{__('Restul stirilor')}</h5>
            {this.getPosts()}
          </div>}
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
