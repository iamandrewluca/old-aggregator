/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var EntryTags = {
    render: function(){
        var tags = this.props.tags.map(function(tag){
            return (
                <li>
                    <Link href={tag.prop('permalink')}>{tag.prop('name')}</Link>
                </li>
            )
        });
        return (
            <ul className="entry-tags">
                {tags}
            </ul>
        )
    }
};

module.exports = {
    Class: EntryTags,
    Component: React.createClass(EntryTags)
};