/** @jsx React.DOM */
var React = require('react');
var SingleVideoFull = {
    render: function(){
        return (
            React.DOM.h1(null, "Single video full")
        )
    }
};

module.exports = {
    Class: SingleVideoFull,
    Component: React.createClass(SingleVideoFull)
};