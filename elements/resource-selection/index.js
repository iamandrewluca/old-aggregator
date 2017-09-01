/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var __ = require('translate');
var Link = require('link').Component;
var Switch = require('switch').Component;
var ResourceSelection = {
  mixins: [Fluxxor.FluxMixin(React)],
  render: function(){
    var actions = this.getFlux().actions;
    var toggled = false;
    var resources = this.props.resources.map(function(resource){
      var onChange = function(isSelected){
        actions.changeSelection(resource.id, isSelected);
      };

      toggled = toggled || resource.selected;

      return (
        React.DOM.div({key: resource.id, className: "row monstro-resources"}, 
          React.DOM.div({className: "large-8 small-9 columns"}, 
            Link({href: "?resource=" + resource.slug}, 
              resource.name
            )
          ), 
          React.DOM.div({className: "large-4 small-3 columns"}, 
            Switch({checked: resource.selected, className: "round", onChange: onChange})
          )
        )
      )
    });

    var filters = [
      "Plahotniuc",
      "Candu",
      "Maia Sandu",
      "Dodon",
      "internauții",
      "Șocant",
      "Majuscule"
    ];

    var filterChanged = function(isSelected) {
      console.log(isSelected)
    };

    var stopFilters = filters.map(function(stopWord) {
      return (
        React.DOM.div({key: stopWord, className: "row monstro-resources"}, 
          React.DOM.div({className: "large-8 small-9 columns"}, 
            React.DOM.a(null, stopWord)
          ), 
          React.DOM.div({className: "large-4 small-3 columns"}, 
            Switch({checked: false, className: "round", onChange: filterChanged})
          )
        )
      )
    })

    var toggleAllSources = function(isSelected) {
      actions.toggleAllSources(isSelected);
    }

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
            React.DOM.input({type: "text", placeholder: "Alege cuvântul tău"})
          ), 

          React.DOM.div({className: "small-12 columns"}, 
            React.DOM.span({className: "monstro-hint"}, __('Selectați din lista de mai jos resursele dorite'))
          ), 

          React.DOM.div({className: "large-8 small-9 columns"}, 
            React.DOM.a(null, toggled ? __('Dezactivează Toate') : __('Activează Toate'))
          ), 
          React.DOM.div({className: "large-4 small-3 columns"}, 
            Switch({checked: toggled, className: "round", onChange: toggleAllSources})
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
