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
                <Image src={featuredImage.getLink('self')} className="featured-image" />
            )
        }
    },

    getHeader: function(post){
        if(this.props.settings['no-image'] || this.hasFeatImg(post)){
            var category = post.getEntityByClass(['term', 'category']);
            return (
                <header className="entry-header">
                    <div className="featimg">
                        <Link className="image" href={post.prop('permalink')} title="" rel="bookmark">
                            {this.getFeatImg(post)}
                        </Link>
                        <div className="entry-category">
                            <Link href={category.prop('permalink')}>{category.prop('name')}</Link>
                        </div>
                        <div className="entry-feat-overlay">
                            <Link href={post.prop('permalink')}>&nbsp;</Link>
                        </div>
                    </div>
                </header>
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
            <article className={"type-post" + this.getArticleClasses(post)}>
                {this.getHeader(post)}
                <section className="entry-content">
                    <h2 className="entry-title">
                        <Link href={post.prop('permalink')} dangerouslySetInnerHTML={{__html: post.prop('title')}}/>
                    </h2>
                    <div className="entry-date">
                        <Link href={date.prop('permalink')} className="blog-date" dangerouslySetInnerHTML={{__html: date.prop('text')}}/>
                    </div>
                    <div className="entry-excerpt" dangerouslySetInnerHTML={{__html: post.prop('excerpt')}}/>
                </section>
                <footer className="entry-footer">
                    <Link className="read-more" href={post.prop('permalink')} title="" rel="bookmark">{__('Discover Story')}</Link>
                </footer>
            </article>
        )
    },


    render: function(){
        return (
            <div>
                <div className="row monstro-grid-view">{/*Add .no-gutter */}
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
    Class: GridView,
    Component: React.createClass(GridView)
};