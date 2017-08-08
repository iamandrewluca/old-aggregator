/** @jsx React.DOM */
var React = require('react');
var GridView = require('grid-view').Component;
var ThumbView = require('thumb-view').Component;
var ListView = require('list-view').Component;
var FullwGallery = require('fullw-gallery').Component;
var SingleGallery = require('single-gallery').Component;
var TeamMembers = require('team').Component;
var TeamMemberFull = require('single-team').Component;
var Testimonials = require('testimonials').Component;
var SinglePost = require('single-post').Component;
var SingleVideo = require('single-video').Component;
var SingleVideoFull = require('single-video-full').Component;
var Page = require('page').Component;
var Breadcrumbs = require('breadcrumbs').Component;
var EntryMeta = require('entry-meta').Component;
var Sidebar = require('sidebar').Component;
var PageHeader = require('page-header').Component;
var Customizable = require('../../mixins/customizable');
var __ = require('../../translate');
var Section = {
    mixins: [Customizable('content', __('Content'), function(cb){
        require(['./settings'], cb);
    })],
    getContent: function(){
        if(this.props.resource.is('home', 'archive', 'search')) {
            switch (this.props.settings.archive.view) {
                case 'grid':
                    return GridView({settings: this.props.settings, resource: this.props.resource, columns: this.props.settings.archive.columns});
                case 'thumb':
                    return ThumbView({settings: this.props.settings, resource: this.props.resource, columns: this.props.settings.archive.columns});
                default:
                    return ListView({settings: this.props.settings, resource: this.props.resource});
            }
        } else if(this.props.resource.is('page')) {
            return Page({page: this.props.resource.getEntityByClass('page'), settings: this.props.settings.single});
        } else if(this.props.resource.is('single-video')){
            if('fullwidth' == this.props.settings.width){
                return SingleVideoFull(null)
            } else {
                return SingleVideo(null)
            }
        } else if(this.props.resource.is('single-gallery')){
            return SingleGallery({gallery: this.props.resource.getEntityByClass('single-gallery'), settings: this.props.settings.single})
        } else if(this.props.resource.is('single')){
            return SinglePost({post: this.props.resource.getEntityByClass('post'), settings: this.props.settings.single});
        }

        //switch(this.props.resource.contentLayout){
        //    case 'full-width-gallery': return <FullwGallery/>;
        //    case 'single-gallery': return <GallerySingle/>;
        //    case 'team-members': return <TeamMembers/>;
        //    case 'single-team': return <TeamMemberFull/>;
        //    case 'testimonials': return <Testimonials/>;
        //    case 'list-view': return <ListView/>;
        //    case 'grid-view': return <GridView/>;
        //    case 'thumb-view': return <ThumbView/>;
        //    case 'post-single': return <SinglePost/>;
        //    case 'page': return <Page/>;
        //    case 'breadcrumbs': return <Breadcrumbs/>;
        //    case 'entry-meta': return <EntryMeta/>;
        //    case 'sidebar': return <Sidebar/>;
        //}
    },
    getBreadcrumbsAndArchiveHeader: function(){
        if(!this.props.resource.is('home')){
            var title = this.props.resource.is('archive', 'search', 'error404') ?
                this.props.resource.prop('archiveTitle') :
                this.props.resource.getEntityByClass('single', 'page').prop('title');
            return (
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "large-12 columns"}, 
                        Breadcrumbs(null), 
                        PageHeader({resource: this.props.resource, title: title, showSearch: this.props.resource.is('archive', 'search', 'error404')})
                    )
                )
            )
        }
    },
    render: function(){
        return (
            React.DOM.section({id: "main", className: "monstro-unboxed"}, 
                React.DOM.div({className: "main-container delimited solid"}, 
                    this.getCustomizationDropdown("top-middle"), 
                    this.getBreadcrumbsAndArchiveHeader(), 
                    /*<div className="full-width-row">*/
                        React.DOM.div({className: "row"}, 
                            React.DOM.div({className: "large-12 columns margin-bottom-60"}, 
                                React.DOM.div({className: "delimiter-type"})/* add .none and remove .margin-bottom-60 from parent */
                            )
                        ), 
                    /*</div>*/
                    React.DOM.div({className: "row"}, 
                        React.DOM.div({className: "large-9 columns content-left"}, 
                            this.getContent()
                        ), 
                        React.DOM.div({className: "large-3 columns sidebar-right"}, 
                            Sidebar(null)
                        )
                    )
                )
            )
        )
    }
};

module.exports = {
    Class: Section,
    Component: React.createClass(Section)
};