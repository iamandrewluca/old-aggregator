/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var ResourceSelection = require('resource-selection').Component;
var AggregatorListView = require('aggregator-list-view').Component;
var AggregatorHeader = require('aggregator-header').Component;
var AggregatorFooter = require('aggregator-footer').Component;
var Aggregator = {
    mixins:[Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("Resource")],
    getStateFromFlux: function(){
        var flux = this.getFlux();
        var resource = this.getFlux().store("Resource");
        return {
            resource: resource.getResource(),
            resources: resource.getResources(),
            lang: resource.getLang()
        }
    },

    render: function(){
        return (
            <div id="wrapper">
                <AggregatorHeader lang={this.state.lang}/>
                <section id="main">
                    <div className="main-container delimited shadow withbg">
                        <div className="row">
                            <div className="large-9 columns content-left">
                                <AggregatorListView resource={this.state.resource}/>
                            </div>
                            <div className="large-3 columns sidebar-right">
                                <ResourceSelection resources={this.state.resources}/>
                            </div>
                        </div>
                    </div>
                </section>
                <AggregatorFooter/>
            </div>
        )
    }
};

module.exports = {
    Class: Aggregator,
    Component: React.createClass(Aggregator)
}