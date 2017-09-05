const Fluxxor = require('fluxxor');
const constants = require('../nucleus/actions').constants;
const parseSiren = require('../nucleus/utils/siren');
const debounce = require('utils/debouncer');
// const traverseObj = require('../nucleus/utils/object-traverser').traverse;
let resource = null;
let resources = null;
let filters = null;
let lang = null;
// const __ = require('../nucleus/translate');
const Courier = require('../nucleus/utils/courier');
const URIjs = require('URIjs');
const obj2array = require('../nucleus/utils/obj2array');
// const cached = {};

const ResourceStore = {

  initialize: function() {
    this.bindActions(constants.BOOTSTRAP, this.onBootstrap);
    this.bindActions(constants.NAVIGATE, this.onNavigate);
    this.bindActions('update-lang', this.onChangeLang);
    this.bindActions('change-selection', this.changeSelection);
    this.bindActions('toggle-all-sources', this.toggleAllSources);
    this.bindActions('change-filter', this.changeFilter);
    this.bindActions('change-personal-filter', this.changePersonalFilter);
  },

  getSelectionDelta: function(id, isSelected) {
    let selectedResources = $.cookie(lang);
    if(selectedResources) {
      selectedResources = selectedResources.split(',');
    } else {
      selectedResources = isSelected ? [] : resources.map(function(resource) {return resource.id});
    }
    if(isSelected) {
      if(selectedResources.indexOf(id) === -1) {
        selectedResources.push(id);
      }
    } else {
      let index;
      if((index = selectedResources.indexOf(id)) > -1) {
        selectedResources.splice(index, 1);
      }
    }
    return selectedResources;
  },

  changeSelection: function(payload) {

    const source = resources.find(function(source) {
      return source.id === payload.id;
    });

    source.selected = payload.isSelected;
    this.emit("change");

    const delta = this.getSelectionDelta(payload.id, source.selected);
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

    const resource = this.updateResource();
    const that = this;
    this.updateResources().then(function() {
      resource.then(function() {
        that.emit("change");
      })
    });
  },

  changeFilter: function (payload) {

    let currentFilter = null;

    filters.forEach(function (filter) {
      filter.selected = false;
      if (payload.id === filter.id) {
        currentFilter = filter;
      }
    });

    let that = this;

    currentFilter.selected = payload.isSelected;
    this.updateResource(payload.isSelected ? currentFilter.title : undefined).then(function () {
      that.emit("change");
    });

    this.emit("change");
  },

  requestPersonalFilter: debounce(500, function (payload) {
    let that = this;
    this.updateResource(payload.value).then(function () {
      that.emit("change");
    });
  }),

  changePersonalFilter: function (payload) {

    if (payload.value.length > 0 && payload.value.length < 3) return;

    this.requestPersonalFilter(payload)

  },

  onChangeLang: function(newLang) {
    $.cookie('lang', newLang);
    lang = $.cookie('lang');
    const resource = this.updateResource();
    const filters = this.updateFilters();
    const that = this;
    this.updateResources().then(function() {
      filters.then(function () {
        resource.then(function() {
          that.emit("change");
        });
      });
    });
  },

  updateResource: function(filter) {
    const path = '?monstro-api=json&data=resource' + (filter ? '&filter=' + encodeURIComponent(filter) : '');
    return jQuery.get(AggregatorData.config.homeUrl + path, null, function(newResource) {
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
    const uri = new URIjs(url);
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
