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
                actions.changeSelection(resource.slug, isSelected);
            };

            toggled = toggled || resource.selected;

            return (
                <div key={resource.slug} className="row monstro-resources">
                    <div className="large-8 small-9 columns">
                        <Link href={"?resource=" + resource.slug}>
                            {resource.name}
                        </Link>
                    </div>
                    <div className="large-4 small-3 columns">
                        <Switch checked={resource.selected} className="round" onChange={onChange}/>
                    </div>
                </div>
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
        ]

        var filterChanged = function(isSelected) {
            console.log(isSelected)
        }

        var stopFilters = filters.map(function(stopWord) {
            return (
                <div key={stopWord} className="row monstro-resources">
                    <div className="large-8 small-9 columns">
                        <a>{stopWord}</a>
                    </div>
                    <div className="large-4 small-3 columns">
                        <Switch checked={false} className="round" onChange={filterChanged}/>
                    </div>
                </div>
            )
        })

        var toggleAllSources = function(isSelected) {
            actions.toggleAllSources(isSelected);
        }

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
                        <input type="text" placeholder="Alege cuvântul tău" />
                    </div>

                    <div className="small-12 columns">
                        <span className="monstro-hint">{__('Selectați din lista de mai jos resursele dorite')}</span>
                    </div>

                    <div className="large-8 small-9 columns">
                        <a>{toggled ? __('Dezactivează Toate') : __('Activează Toate')}</a>
                    </div>
                    <div className="large-4 small-3 columns">
                        <Switch checked={toggled} className="round" onChange={toggleAllSources}/>
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