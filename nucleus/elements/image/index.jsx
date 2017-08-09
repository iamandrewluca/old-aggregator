/** @jsx React.DOM */
var React = require('react');
// var Fluxxor = require('fluxxor');
var Image = {
    render: function(){
        return this.transferPropsTo(<img/>);
    }
};

module.exports = {
    Class: Image,
    Component: React.createClass(Image)
};