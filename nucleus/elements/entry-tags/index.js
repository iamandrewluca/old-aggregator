/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var EntryTags = {
    render: function(){
        var tags = this.props.tags.map(function(tag){
            return (
                React.DOM.li(null, 
                    Link({href: tag.prop('permalink')}, tag.prop('name'))
                )
            )
        });
        return (
            React.DOM.ul({className: "entry-tags"}, 
                tags
            )
        )
    }
};

module.exports = {
    Class: EntryTags,
    Component: React.createClass(EntryTags)
};