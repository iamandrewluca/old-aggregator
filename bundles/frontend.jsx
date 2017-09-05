/** @jsx React.DOM */
const React = require('react');
const Fluxxor = require('fluxxor');
const actions = require('../nucleus/actions').actions;
const Config = require('../mRNA/config');
const Resource = require('../mRNA/resource');
const Aggregator = require('aggregator').Component;

const aggregatorActions = jQuery.extend(true, actions, {
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
  },

  changeFilter: function (id, isSelected) {
    this.dispatch('change-filter', {
      id: id,
      isSelected: isSelected
    });
  },

  changePersonalFilter: function (value) {
    this.dispatch('change-personal-filter', {
      value: value
    });
  }
});

const flux = new Fluxxor.Flux({
  Config: new Config.Store(),
  Resource: new Resource.Store()
}, aggregatorActions);


window.addEventListener('popstate', function() {
  flux.actions.navigate(location.pathname, true);
});

const TitleCtrl = require('../nucleus/elements/title/controller');
TitleCtrl(flux.store('Resource'));
flux.actions.bootstrap();
React.renderComponent(<Aggregator flux={flux}/>, document.getElementById('react-parent'));
jQuery(document).foundation();
