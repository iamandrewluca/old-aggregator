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
        <div key={resource.id} className="row monstro-resources">
          <div className="large-8 small-9 columns">
            <Link href={"?resource=" + resource.slug}>
              {resource.name}
            </Link>
          </div>
          <div className="large-4 small-3 columns">
            <Switch checked={resource.selected} className="round"
                    onChange={isSelected => actions.changeSelection(resource.id, isSelected)}/>
          </div>
        </div>
      )
    });

    const stopFilters = this.props.filters.map(function(filter) {
      return (
        <div key={filter.id} className="row monstro-resources">
          <div className="large-8 small-9 columns">
            <a>{filter.title}</a>
          </div>
          <div className="large-4 small-3 columns">
            <Switch checked={filter.selected} className="round"
                    onChange={isSelected => actions.changeFilter(filter.id, isSelected)}/>
          </div>
        </div>
      )
    });

    return (
      <form>

        <div className="row monstro-resources">

          <div className="large-12 columns">
            <Link href="?" className="all-resources">{__('Filtru abonamente')}</Link>
          </div>

          <div className="large-12 columns">
            <span className="monstro-hint">{__('Meniu „Pentru alergici” - serviți știri fără:')}</span>
          </div>

        </div>

        {stopFilters}

        <div className="row monstro-resources">

          <div className="large-12 columns">
            <input type="text" placeholder="Alege cuvântul tău"
                   onChange={e => actions.changePersonalFilter(e.target.value)} />
          </div>

          <div className="small-12 columns">
            <span className="monstro-hint">{__('Selectați din lista de mai jos resursele dorite')}</span>
          </div>

          <div className="large-8 small-9 columns">
            <a>{toggled ? __('Dezactivează Toate') : __('Activează Toate')}</a>
          </div>
          <div className="large-4 small-3 columns">
            <Switch checked={toggled} className="round"
                    onChange={isSelected => actions.toggleAllSources(isSelected)}/>
          </div>

        </div>

        {resources}

      </form>
    )
  }
};
module.exports = {
  Class: ResourceSelection,
  Component: React.createClass(ResourceSelection)
};
