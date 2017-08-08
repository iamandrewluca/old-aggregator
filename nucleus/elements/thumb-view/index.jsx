/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var Image = require('../image').Component;
var __ = require('../../translate');
var GridMixin = require('../../mixins/grid');
var ThumbView = {
    mixins: [GridMixin],
    hasFeatImg: function(post){
        return post.hasEntity('featured-image');
    },

    getFeatImg: function(post){
        if(this.hasFeatImg(post)){
            var featuredImage = post.getEntityByClass('featured-image');
            return (
                <Image src={featuredImage.getLink('self')} className="featured-image" />
            )
        }
    },

    getArticleClasses: function(post){
        var classes = post.getClasses();
        if(!this.hasFeatImg(post)) {
            classes.push('no-feat-img');
        }
        return classes.join(' ');
    },

    getPost: function(post){
        var date = post.getEntityByClass('date');
        var author = post.getEntityByClass('author');
        return (
            <article className={"type-post" + this.getArticleClasses(post)}>
                <header className="entry-header">
                    <div className="featimg">
                        <Link className="image" href={post.prop('permalink')} title="" rel="bookmark">
                        {this.getFeatImg(post)}
                        </Link>
                    </div>
                </header>
                <section className="entry-content">
                    <Link className="read-more" href={post.prop('permalink')} title="" rel="bookmark">{__('Discover Story')}</Link>
                    <div className="entry-content-holder">
                        <h2 className="entry-title">
                            <Link href={post.prop('permalink')} dangerouslySetInnerHTML={{__html: post.prop('title')}}/>
                        </h2>
                        <div className="entry-author">
                            {__('by')} <Link href={author.getLink('self')} dangerouslySetInnerHTML={{__html: author.prop('displayName')}}></Link>
                        </div>
                        <div className="entry-date">
                            <Link href={date.prop('permalink')} className="blog-date" dangerouslySetInnerHTML={{__html: date.prop('text')}}/>
                        </div>
                    </div>
                </section>
            </article>
        )
    },

    render: function(){
        return (
            <div>
                <div className="row monstro-thumb-view no-gutter">{/* Add or remove .no-gutter */}
                    {this.getPosts()}
                </div>
                <Link href="javascript:void(0)">
                    <span className="icon-latest load-more-galleries"></span>
                </Link>
            </div>

        )
    }
};

module.exports = {
    Class: ThumbView,
    Component: React.createClass(ThumbView)
};
