/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var __ = require('../../translate');
var MonstroPagination = {
    render: function(){
        return (
            <div className="monstro-pagination">
                <span className="page-numbers current ">1</span>
                <Link className="page-numbers " href="/page/2/">2</Link>
                <Link className="page-numbers " href="/page/3/">3</Link>
                <Link className="page-numbers " href="/page/4/">4</Link>
                <Link className="page-numbers " href="/page/5/">5</Link>
                <Link className="page-numbers " href="/page/6/">6</Link>
                <Link className="next page-numbers " href="/page/2/">Next »</Link>
            </div>
        )
    }
};
module.exports = {
    Class: MonstroPagination,
    Component: React.createClass(MonstroPagination)
};