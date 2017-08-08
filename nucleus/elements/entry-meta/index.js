/** @jsx React.DOM */
var React = require('react');
var EntryMeta = {
    render: function(){
        return (
            React.DOM.div({className: "entry-meta"}, 
                React.DOM.ul(null, 
                    React.DOM.li(null, "on ", React.DOM.a({href: "#"}, "April, 21 2014"))
                )
            )
        )
    }
};

module.exports = {
    Class: EntryMeta,
    Component: React.createClass(EntryMeta)
};