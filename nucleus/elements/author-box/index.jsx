/** @jsx React.DOM */
var React = require('react');
var AuthorBox = {
    render: function(){
        return (
            <h1>Insert markup here</h1>
        )
    }
};

module.exports = {
    Class: AuthorBox,
    Component: React.createClass(AuthorBox)
};