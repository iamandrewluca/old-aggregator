/** @jsx React.DOM */
var React = require('react');
var EntryMeta = require('../entry-meta').Component;
var Voting = require('../voting').Component;
var ThumbView = require('../thumb-view').Component;
var GridView = require('../grid-view').Component;
var parseSiren = require('../../utils/siren');
var __ = require('../../translate');
var URIjs = require('URIjs');
var Customizable = require('../../mixins/customizable');
var Courier = require('../../utils/courier');
var deepCompare = require('deep-equal');
var RelatedPosts = {
    mixins: [Customizable('related', __('Related posts'), function(cb){
        require(['./settings'], cb);
    })],

    getInitialState: function(){
        return {
            resource: null
        }
    },

    updateResource: function(link, taxonomy, number){
        var uri = new URIjs(link);
        uri.addQuery('related', taxonomy);
        uri.addQuery('number', number);
        Courier.fetchJson(uri.toString()).then(function(resource){
            this.setState({
                resource: parseSiren(resource)
            });
        }.bind(this));
    },

    componentWillMount: function(){
        this.updateResource(this.props['for'].getLink('self'), this.props.settings.taxonomy, this.props.settings.number);
    },

    componentWillReceiveProps: function(nextProps){
        if(!deepCompare(this.props.settings, nextProps.settings.taxonomy) || (this.props['for'].getLink('self') != nextProps['for'].getLink('self'))){
            this.updateResource(nextProps['for'].getLink('self'), nextProps.settings.taxonomy, nextProps.settings.number);
        }
    },

    getPostsWhenLoaded: function (){
        if(this.state.resource) {
            var columns = this.state.resource.getEntitiesByClass('post').length;
            if('grid' == this.props.settings.view){
                return GridView({resource: this.state.resource, columns: columns, settings: this.props.settings});
            } else {
                return ThumbView({resource: this.state.resource, columns: columns, settings: this.props.settings});
            }
        }
    },

    render: function(){
        return (
            React.DOM.div({className: "related-posts"}, 
                this.getCustomizationDropdown("top"), 
                React.DOM.h3({id: "related-title"}, __('Related posts')), 
                this.getPostsWhenLoaded()
            )
        )
    }
};

module.exports = {
    Class: RelatedPosts,
    Component: React.createClass(RelatedPosts)
};