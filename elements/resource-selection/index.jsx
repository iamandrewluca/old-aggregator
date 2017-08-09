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

        var toggleAllSources = function(isSelected) {
            actions.toggleAllSources(isSelected);
        }

        return (
            <form>
                <div className="row monstro-resources">
                    <div className="large-12 columns">
                        <Link href="?" className="all-resources">{__('Filtru abonamente')}</Link>

                        <div className="row monstro-resources">
                            <div className="large-8 small-9 columns">
                                <a>{toggled ? __('Dezactivează Toate') : __('Activează Toate')}</a>
                            </div>
                            <div className="large-4 small-3 columns">
                                <Switch checked={toggled} className="round" onChange={toggleAllSources}/>
                            </div>
                        </div>

                        <span className="monstro-hint">{__('Selectați din lista de mai jos resursele dorite')}</span>
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