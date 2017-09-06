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
      topics: resource.getTopics(),
      lang: resource.getLang()
    }
  },

  render: function(){
    return (
      React.DOM.div({id: "wrapper"}, 
        AggregatorHeader({lang: this.state.lang}), 
        React.DOM.section({id: "main"}, 
          React.DOM.div({className: "main-container delimited shadow withbg"}, 
            React.DOM.div({className: "row"}, 
              React.DOM.div({className: "large-9 columns content-left"}, 
                AggregatorListView({
                  resource: this.state.resource, 
                  resources: this.state.resources, 
                  topics: this.state.topics}
                )
              ), 
              React.DOM.div({className: "large-3 columns sidebar-right"}, 
                ResourceSelection({
                  resources: this.state.resources, 
                  filters: this.state.filters}
                )
              )
            )
          )
        ), 
        AggregatorFooter(null)
      )
    )
  }
};

module.exports = {
  Class: Aggregator,
  Component: React.createClass(Aggregator)
}
