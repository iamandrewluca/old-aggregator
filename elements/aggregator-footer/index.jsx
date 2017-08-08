/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var __ = require('translate');
var AggregatorFooter = {
    mixins: [Fluxxor.FluxMixin(React)],
    render: function(){
        return (
            <footer id="footer-container">
                <div className="row">
                    <div className="large-12 columns">
                        <p className="copyright">Copyright &copy; 2014-2017. Toate drepturile rezervate.</p>
                    </div>

                </div>
            </footer>
        )
    }
};
module.exports = {
    Class: AggregatorFooter,
    Component: React.createClass(AggregatorFooter)
};