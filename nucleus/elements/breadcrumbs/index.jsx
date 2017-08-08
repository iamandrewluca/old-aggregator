/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var Breadcrumbs = {
    render: function(){
        return (
            <div className="breadcrumbs">
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Category</Link></li>
                </ul>
            </div>
        )
    }
};

module.exports = {
    Class: Breadcrumbs,
    Component: React.createClass(Breadcrumbs)
};