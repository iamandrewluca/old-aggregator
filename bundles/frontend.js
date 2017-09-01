/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var actions = require('../nucleus/actions').actions;
var Config = require('../mRNA/config');
var Resource = require('../mRNA/resource');
var Aggregator = require('aggregator').Component;

var aggregatorActions = jQuery.extend(true, actions, {
  updateLang: function(newLang){
    this.dispatch('update-lang', newLang);
  },
  changeSelection: function(id, isSelected){
    this.dispatch('change-selection', {
      id: id,
      isSelected: isSelected
    })
  },
  prepareSelection: function(id, isSelected){
    this.dispatch('prepare-selection', {
      id: id,
      isSelected: isSelected
    })
  },
  toggleAllSources: function(isSelected) {
    this.dispatch('toggle-all-sources', isSelected);
  }
});
var flux = new Fluxxor.Flux({
  Config: new Config.Store(),
  Resource: new Resource.Store()
}, aggregatorActions);


window.addEventListener('popstate', function() {
  flux.actions.navigate(location.pathname, true);
});

var TitleCtrl = require('../nucleus/elements/title/controller');
TitleCtrl(flux.store('Resource'));
flux.actions.bootstrap();
React.renderComponent(Aggregator({flux: flux}), document.getElementById('react-parent'));
jQuery(document).foundation();
