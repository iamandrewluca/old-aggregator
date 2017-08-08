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
                <Image src={featuredImage.getLink('self')} className="featured-image" />
            )
        }
    },

    getFeatImgBlock: function (post){
        if(this.props.settings['no-image'] || this.hasFeatImg(post)){
            var category = post.getEntityByClass(['term', 'category']);
            return (
                <div className="featimg">
                    <Link className="image" href={post.prop("permalink")} title="" rel="bookmark">
                        {this.getFeatImg(post)}
                    </Link>
                    <div className="entry-category">
                        <Link href={category.prop('permalink')}>{category.prop('name')}</Link>
                    </div>
                    <div className="entry-feat-overlay">
                        <Link href={post.prop("permalink")}>&nbsp;</Link>
                    </div>
                </div>
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
                <li>
                    <span>
                        <Link className="comment" href={post.prop("permalink") + "#comments"} dangerouslySetInnerHTML={{__html: post.prop("nrComments")}}/>
                    </span>
                </li>
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
                    <article className={"type-post" + this.getArticleClasses(post)}>
                        <header className="entry-header meta-below">
                            <h2 className="entry-title">
                                <Link href={post.prop("permalink")} dangerouslySetInnerHTML={{__html: post.prop("title")}}/>
                            </h2>
                            <div className="entry-meta">
                                <ul>
                                    <li>{__('by')} <Link href={author.getLink('self')} dangerouslySetInnerHTML={{__html: author.prop("displayName")}}></Link></li>
                                    <li><span><Link href={date.prop("permalink")} className="blog-date" dangerouslySetInnerHTML={{__html: date.prop("text")}}/></span></li>
                                    {this.getCommentsNumber(post)}
                                </ul>
                            </div>
                            {this.getFeatImgBlock(post)}
                        </header>
                        <section className="entry-content">
                            <div className="entry-excerpt" dangerouslySetInnerHTML={{__html: post.prop("excerpt")}}/>
                        </section>
                        <footer className="entry-footer">
                            <SocialShare link={post.prop("permalink")}/>
                            <Link className="read-more" href={post.prop("permalink")}>{__('Discover Story')}</Link>
                        </footer>
                    </article>
                )
            }.bind(this));
        } else {
            return (
                <div className="row">
                    <div className="columns large-12">
                        <h1 className="monstro-no-posts-msg">{__('No posts found')}</h1>
                    </div>
                </div>
            )
        }
    },
    render: function(){
        return (
            <div>
                <div className="monstro-list-view">
                    {this.getPosts()}
                </div>

                <div className="monstro-load-more">
                    <Link href="javascript:void(0)">
                        <span className="icon-latest load-more-galleries"></span>
                    </Link>
                </div>
                <MonstroPagination/>
            </div>

        )
    }
};

module.exports = {
    Class: ListView,
    Component: React.createClass(ListView)
};