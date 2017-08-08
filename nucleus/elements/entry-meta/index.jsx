/** @jsx React.DOM */
var React = require('react');
var EntryMeta = {
    render: function(){
        return (
            <div className="entry-meta">
                <ul>
                    <li>on <a href="#">April, 21 2014</a></li>
                </ul>
            </div>
        )
    }
};

module.exports = {
    Class: EntryMeta,
    Component: React.createClass(EntryMeta)
};