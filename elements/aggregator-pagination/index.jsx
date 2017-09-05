/** @jsx React.DOM */
const React = require('react');
const Link = require('link').Component;
const URIjs = require('URIjs');
const showPages = 19;
const AggregatorPagination = {
    render: function(){
        const half = (showPages - 1) / 2;
        const start = (this.props.currentPage <= half) ? 1 : this.props.currentPage - half;
        const end = (this.props.currentPage >= (this.props.totalPages - half)) ?
            this.props.totalPages :
            this.props.currentPage + half;
        const pageNumbers = [];
        for(let counter = start; counter <= end; counter++) pageNumbers.push(counter);
        const pages = pageNumbers.map(function(number){
            if(this.props.currentPage === number){
                return (
                    <span key={number} className="page-numbers current">{number}</span>
                )
            } else {
                const uri = new URIjs(location);
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
