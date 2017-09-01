var Fluxxor = require('fluxxor');
var constants = require('../nucleus/actions').constants;
var parseSiren = require('../nucleus/utils/siren');
// var traverseObj = require('../nucleus/utils/object-traverser').traverse;
var resource = null;
var resources = null;
var filters = null;
var lang = null;
// var __ = require('../nucleus/translate');
var Courier = require('../nucleus/utils/courier');
var URIjs = require('URIjs');
var obj2array = require('../nucleus/utils/obj2array');
// var cached = {};

var ResourceStore = {
  initialize: function() {
    this.bindActions(constants.BOOTSTRAP, this.onBootstrap);
    this.bindActions(constants.NAVIGATE, this.onNavigate);
    this.bindActions('update-lang', this.onChangeLang);
    this.bindActions('change-selection', this.changeSelection);
    this.bindActions('toggle-all-sources', this.toggleAllSources);
  },

  getSelectionDelta: function(id, isSelected) {
    var selectedResources;
    if(selectedResources = $.cookie(lang)) {
      selectedResources = selectedResources.split(',');
    } else {
      selectedResources = isSelected ? [] : resources.map(function(resource) {return resource.id});
    }
    if(isSelected) {
      if(selectedResources.indexOf(id) == -1) {
        selectedResources.push(id);
      }
    } else {
      if((index = selectedResources.indexOf(id)) > -1) {
        selectedResources.splice(index, 1);
      }
    }
    return selectedResources;
  },

  changeSelection: function(payload) {

    var source = resources.find(function(source) {
      return source.id === payload.id;
    });

    source.selected = payload.isSelected;
    this.emit("change");

    var delta = this.getSelectionDelta(payload.id, payload.isSelected);
    $.cookie(lang, delta);
    this.updateResource().then(function() {
      this.emit("change");
    }.bind(this));
  },

  toggleAllSources: function(isSelected) {

    if (isSelected) {
      $.removeCookie(lang, { path: '/' });
    } else {
      $.cookie(lang, '');
    }

    var resource = this.updateResource();
    var that = this;
    this.updateResources().then(function() {
      resource.then(function() {
        that.emit("change");
      })
    });
  },

  onChangeLang: function(newLang) {
    $.cookie('lang', newLang);
    lang = $.cookie('lang');
    var resource = this.updateResource();
    var filters = this.updateFilters();
    var that = this;
    this.updateResources().then(function() {
      filters.then(function () {
        resource.then(function() {
          that.emit("change");
        });
      });
    });
  },

  updateResource: function() {
    return jQuery.get(AggregatorData.config.homeUrl + '?monstro-api=json&data=resource', null, function(newResource) {
      resource = parseSiren(newResource);
    }.bind(this), 'json');
  },

  updateResources: function() {
    return jQuery.get(AggregatorData.config.homeUrl + '?monstro-api=json&data=resources', null, function(newResources) {
      resources = obj2array(newResources);
    }.bind(this), 'json');
  },

  updateFilters: function () {
    return jQuery.get(AggregatorData.config.homeUrl + '?monstro-api=json&data=filters', null, function(newFilters) {
      filters = obj2array(newFilters);
    }.bind(this), 'json');
  },

  onBootstrap: function() {
    resource = parseSiren(AggregatorData.resource);
    resources = obj2array(AggregatorData.resources);
    filters = AggregatorData.filters;
    lang = AggregatorData.lang;
    this.emit("change");
  },

  onNavigate: function(url) {
    var uri = new URIjs(url);
    if(!uri.hasSearch('monstro-api')) {
      uri.addSearch('monstro-api', 'json');
    }
    Courier.fetchJson(uri.toString()).then(function(data) {
      resource = parseSiren(data);
      this.emit("change");
      window.scrollTo(0, 0);
    }.bind(this));
  },

  getSettings: function(_level) {

  },

  getLang: function() {
    return lang;
  },

  getResources: function() {
    return resources;
  },

  getResource: function() {
    return resource;
  },

  getFilters: function () {
    return filters;
  },
};

module.exports = {
  Class: ResourceStore,
  Store: Fluxxor.createStore(ResourceStore)
};
