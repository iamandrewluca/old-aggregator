/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var __ = require('../../translate');
var PostNavigation = {
    getPrevLink: function(){
        if(this.props.prev){
            return (
                <div className="columns large-5">
                    <i className="icon-left"></i>
                    <Link href={this.props.prev} rel="prev">{__('Previous post')}</Link>
                </div>
            )
        }
    },

    getNextLink: function(){
        if(this.props.next){
            return (
                <div className="columns large-5">
                    <Link href={this.props.next} rel="next">{__('Next post')}</Link>
                    <i className="icon-right"></i>
                </div>
            )
        }
    },

    getUpClasses: function(){
        return this.props.prev ? 2 : 5;
    },

    render: function(){
        return (
            <div className="post-navigation">
                <div className="row">
                    {this.getPrevLink()}
                    <div className={"columns large-" + this.getUpClasses()}>
                        <Link href={this.props.up} className="icon-root"/>
                    </div>
                    {this.getNextLink()}
                </div>
            </div>
        )
    }
};

module.exports = {
    Class: PostNavigation,
    Component: React.createClass(PostNavigation)
};