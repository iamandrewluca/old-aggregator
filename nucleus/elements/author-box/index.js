/** @jsx React.DOM */
var React = require('react');
var AuthorBox = {
    render: function(){
        return (
            React.DOM.h1(null, "Insert markup here")
        )
    }
};

module.exports = {
    Class: AuthorBox,
    Component: React.createClass(AuthorBox)
};