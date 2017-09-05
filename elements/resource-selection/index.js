/** @jsx React.DOM */
const React = require('react');
const Fluxxor = require('fluxxor');
const __ = require('translate');
const Link = require('link').Component;
const Switch = require('switch').Component;
const ResourceSelection = {
  mixins: [Fluxxor.FluxMixin(React)],
  render: function(){
    const actions = this.getFlux().actions;
    let toggled = false;

    const resources = this.props.resources.map(function(resource){

      toggled = toggled || resource.selected;

      return (
        React.DOM.div({key: resource.id, className: "row monstro-resources"}, 
          React.DOM.div({className: "large-8 small-9 columns"}, 
            Link({href: "?resource=" + resource.slug}, 
              resource.name
            )
          ), 
          React.DOM.div({className: "large-4 small-3 columns"}, 
            Switch({checked: resource.selected, className: "round", 
                    onChange: isSelected => actions.changeSelection(resource.id, isSelected)})
          )
        )
      )
    });

    const stopFilters = this.props.filters.map(function(filter) {
      return (
        React.DOM.div({key: filter.id, className: "row monstro-resources"}, 
          React.DOM.div({className: "large-8 small-9 columns"}, 
            React.DOM.a(null, filter.title)
          ), 
          React.DOM.div({className: "large-4 small-3 columns"}, 
            Switch({checked: filter.selected, className: "round", 
                    onChange: isSelected => actions.changeFilter(filter.id, isSelected)})
          )
        )
      )
    });

    return (
      React.DOM.form(null, 

        React.DOM.div({className: "row monstro-resources"}, 

          React.DOM.div({className: "large-12 columns"}, 
            Link({href: "?", className: "all-resources"}, __('Filtru abonamente'))
          ), 

          React.DOM.div({className: "large-12 columns"}, 
            React.DOM.span({className: "monstro-hint"}, __('Meniu „Pentru alergici” - serviți știri fără:'))
          )

        ), 

        stopFilters, 

        React.DOM.div({className: "row monstro-resources"}, 

          React.DOM.div({className: "large-12 columns"}, 
            React.DOM.input({type: "text", placeholder: "Alege cuvântul tău", 
                   onChange: e => actions.changePersonalFilter(e.target.value)})
          ), 

          React.DOM.div({className: "small-12 columns"}, 
            React.DOM.span({className: "monstro-hint"}, __('Selectați din lista de mai jos resursele dorite'))
          ), 

          React.DOM.div({className: "large-8 small-9 columns"}, 
            React.DOM.a(null, toggled ? __('Dezactivează Toate') : __('Activează Toate'))
          ), 
          React.DOM.div({className: "large-4 small-3 columns"}, 
            Switch({checked: toggled, className: "round", 
                    onChange: isSelected => actions.toggleAllSources(isSelected)})
          )

        ), 

        resources

      )
    )
  }
};
module.exports = {
  Class: ResourceSelection,
  Component: React.createClass(ResourceSelection)
};
