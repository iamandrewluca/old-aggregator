/** @jsx React.DOM */
var React = require('react');
var Search = {
    render: function(){
        return (
            <div id="searchform" className="searchform standard">
                <form id="ui-element" action="javascript:void(0);" method="post" className="">
                    <input className="searchform-input ng-pristine ng-valid" placeholder="Search" type="search" name="search" id="search" autocomplete="off" />
                    <input className="searchform-submit" type="submit" value="" />
                    <span className="sb-icon-search"></span>
                </form>
            </div>
        )
    }
};

module.exports = {
    Class: Search,
    Component: React.createClass(Search)
};