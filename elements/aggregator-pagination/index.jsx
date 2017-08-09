/** @jsx React.DOM */
var React = require('react');
var Link = require('link').Component;
var URIjs = require('URIjs');
var showPages = 19;
var AggregatorPagination = {
    render: function(){
        var half = (showPages - 1) / 2;
        var start = (this.props.currentPage <= half) ? 1 : this.props.currentPage - half;
        var end = (this.props.currentPage >= (this.props.totalPages - half)) ?
            this.props.totalPages :
            this.props.currentPage + half;
        var pageNumbers = [];
        for(var counter = start; counter <= end; counter++) pageNumbers.push(counter);
        var pages = pageNumbers.map(function(number){
            if(this.props.currentPage == number){
                return (
                    <span key={number} className="page-numbers current">{number}</span>
                )
            } else {
                var uri = new URIjs(location);
                uri.removeSearch('page')
                    .addSearch('page', number);
                return (
                    <Link key={number} className="page-numbers" href={uri.toString()}>{number}</Link>
                )
            }
        }.bind(this));
        return (
            <div className="monstro-pagination">
                {pages}
            </div>
        )
    }
};
module.exports = {
    Class: AggregatorPagination,
    Component: React.createClass(AggregatorPagination)
};