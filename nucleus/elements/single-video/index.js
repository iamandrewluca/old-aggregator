/** @jsx React.DOM */
var React = require('react');
var VideoSingle = {
    render: function(){
        return (
            React.DOM.h1(null, "Insert markup here")
        )
    }
};

module.exports = {
    Class: VideoSingle,
    Component: React.createClass(VideoSingle)
};