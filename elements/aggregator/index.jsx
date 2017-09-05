/** @jsx React.DOM */
const React = require('react');
const Fluxxor = require('fluxxor');
const ResourceSelection = require('resource-selection').Component;
const AggregatorListView = require('aggregator-list-view').Component;
const AggregatorHeader = require('aggregator-header').Component;
const AggregatorFooter = require('aggregator-footer').Component;
const Aggregator = {
  mixins:[Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("Resource")],
  getStateFromFlux: function(){
    const resource = this.getFlux().store("Resource");
    return {
      resource: resource.getResource(),
      resources: resource.getResources(),
      filters: resource.getFilters(),
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
                <AggregatorListView
                  resource={this.state.resource}
                  resources={this.state.resources}
                />
              </div>
              <div className="large-3 columns sidebar-right">
                <ResourceSelection
                  resources={this.state.resources}
                  filters={this.state.filters}
                />
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
