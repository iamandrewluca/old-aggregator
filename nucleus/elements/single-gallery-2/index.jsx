/** @jsx React.DOM */
var React = require('react');
var EntryMeta = require('../entry-meta').Component;
var Gallery = require('../gallery').Component;
var Stats = require('../stats').Component;
var SocialShare = require('../social-share').Component;
var Voting = require('../voting').Component;
var Comments = require('../entry-comments').Component;
var RelatedPosts = require('../related-posts').Component;
var Link = require('../link').Component;
var Image = require('../image').Component;
var EntryTags = require('../entry-tags').Component;
var PostNavigation = require('../post-navigation').Component;
var SingleGallery2 = {
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
        var classes = post.postClasses.slice(0);
        if(!this.hasFeatImg(post)){
            classes.push('no-feat-img');
        }
        return classes.join(' ');
    },
    getPost: function(){
        var posts = this.props.resource.getEntitiesByClass('post');
        if(posts.length){
            return posts.map(function(post){
                var date = post.getEntityByClass('date');
                var author = post.getEntityByClass('author');
                return (
                    <article className={"type-post" + this.getArticleClasses(post)}>
                        <header className="entry-header">
                            <div className="featimg">
                                <Link className="image" href={post.permalink} title="" rel="bookmark">
                                    {this.getFeatImg(post)}
                                </Link>
                                <div className="entry-feat-overlay">
                                    <Link href={post.permalink}>&nbsp;</Link>
                                </div>
                            </div>
                        </header>
                        <section className="entry-content">
                            <div className="row">
                                <div className="columns large-12">
                                    <Gallery slides={this.state.slides} onSlidesWillEnd={this.simulateLazyLoad} height="800"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="columns large-12" dangerouslySetInnerHTML={{__html: post.excerpt}}/>
                            </div>
                        </section>
                        <footer className="entry-footer ">
                            <div className="entry-tags">
                                <div className="row">
                                    <div className="columns large-8">
                                        <EntryTags/>
                                    </div>
                                    <div className="columns large-4">
                                        <SocialShare/>
                                    </div>
                                </div>
                            </div>
                            <PostNavigation/>
                            <Comments/>
                            <RelatedPosts/>
                        </footer>
                    </article>
                )
            }.bind(this));
        }
    },
    render: function(){
        return (
            <div>
                {this.getPost()}
            </div>
        )
    }
};

module.exports = {
    Class: SingleGallery2,
    Component: React.createClass(SingleGallery2)
};