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
var SinglePost = {
    hasFeatImg: function(){
        return this.props.post.hasEntity('featured-image');
    },

    getFeatImg: function(){
        if(this.hasFeatImg()){
            var featuredImage = this.props.post.getEntityByClass('featured-image');
            return (
                <Image src={featuredImage.getLink('self')} className="featured-image" />
            )
        }
    },

    getArticleClasses: function(){
        var classes = this.props.post.getClasses();
        if(!this.hasFeatImg()){
            classes.push('no-feat-img');
        }
        return classes.join(' ');
    },

    haveTags: function(){
        return this.props.post.getEntitiesByClass(['term', 'post_tag']).length > 0;
    },

    getTags: function(){
        if(this.haveTags()){
            return (
                <div className="columns large-8">
                    <EntryTags tags={this.props.post.getEntitiesByClass(['term', 'post_tag'])}/>
                </div>
            )
        }
    },

    getSocialSharing: function(){
        var columns = this.haveTags() ? 4 : 12;
        return (
            <div className={"columns large-" + columns}>
                <SocialShare link={this.props.post.prop("permalink")}/>
            </div>
        )
    },

    render: function(){
        var date = this.props.post.getEntityByClass('date');
        var author = this.props.post.getEntityByClass('author');
        return (
            <div>
                <article className={"type-post" + this.getArticleClasses()}>
                    <header className="entry-header">
                        <div className="featimg">
                            <Link className="image" href={this.props.post.prop("permalink")} title="" rel="bookmark">
                                {this.getFeatImg()}
                            </Link>
                            <div className="entry-feat-overlay">
                                <Link href={this.props.post.prop("permalink")}>&nbsp;</Link>
                            </div>
                        </div>
                    </header>
                    <section className="entry-content">
                        <div className="row">
                            <div className="columns large-12" dangerouslySetInnerHTML={{__html: this.props.post.prop("content")}}/>
                        </div>
                    </section>
                    <footer className="entry-footer ">
                        <div className="entry-tags">
                            <div className="row">
                                {this.getTags()}
                                {this.getSocialSharing()}
                            </div>
                        </div>
                        <PostNavigation up={this.props.post.getEntityByClass(['term', 'category']).prop('permalink')}
                            prev={this.props.post.getLink(['prev', 'post'])} next={this.props.post.getLink(['next', 'post'])}/>
                        <Comments/>
                        <RelatedPosts for={this.props.post} settings={this.props.settings.relatedPosts} allowCustomization={true}/>
                    </footer>
                </article>
            </div>
        )
    }
};

module.exports = {
    Class: SinglePost,
    Component: React.createClass(SinglePost)
};