/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var __ = require('../../translate');
var ArchiveHeader = {
    mixins: [Fluxxor.StoreWatchMixin("Resource"), Fluxxor.FluxMixin(React)],

    getStateFromFlux: function(){
        return {
            categories: this.getFlux().store("Resource").getCategories(this.getFlux()),
            postTypes: this.getFlux().store("Resource").getPostTypes(this.getFlux())
        }
    },

    hasDescription: function(){
        return ('string' == typeof this.props.resource.description) && (this.props.resource.description.length > 1);
    },

    getCategoryDescription: function(){
        if(this.hasDescription()){
            return (
                React.DOM.div({className: "page-description", dangerouslySetInnerHTML: {__html: this.props.resource.description}})
            )
        }
    },

    onCategorySelected: function(event){
        var index = event.currentTarget.value;
        if(0 == index){
            //TODO: navigate to All categories
        } else {
            this.getFlux().actions.navigate(this.state.categories.getEntityAt(index - 1).getLink('self'));
        }
    },

    onPostTypeSelected: function(event){
        var index = event.currentTarget.value;
        this.getFlux().actions.navigate(this.state.postTypes.getEntityAt(index).getLink('self'));
    },

    getCategoryDropdown: function(){
        var options = [];
        if(this.state.categories){
            var entities = this.state.categories.getAllEntities();
            entities.unshift({
                name: __('All categories')
            });
            options = entities.map(function(category, index){
                return React.DOM.option({value: index}, category.name || category.prop('name'))
            }.bind(this));
        }
        return (
            React.DOM.select({onChange: this.onCategorySelected}, 
                options
            )
        )
    },

    getPostTypesDropdown: function (){
        var options = [];
        if(this.state.postTypes){
            options = this.state.postTypes.getAllEntities().map(function(postType, index){
                return React.DOM.option({value: index}, postType.prop('name'))
            }.bind(this));
        }
        return (
            React.DOM.select({onChange: this.onPostTypeSelected}, 
                options
            )
        )
    },

    updateSearchQuery: function(event){
        this.getFlux().actions.updateSearchQuery(event.target.value);
    },

    getSearch: function(){
        if(this.props.showSearch){
            return (
                React.DOM.div({className: "blog-list row"}, 
                    React.DOM.div({className: "large-4 columns"}, 
                        React.DOM.label(null, __('Archives')), 
                        React.DOM.div(null, this.getPostTypesDropdown())
                    ), 
                    React.DOM.div({className: "large-4 columns"}, 
                        React.DOM.label(null, __('Category')), 
                        React.DOM.div(null, this.getCategoryDropdown())
                    ), 
                    React.DOM.div({className: "large-4 columns"}, 
                        React.DOM.form(null, 
                            React.DOM.label(null, __('Search')), 
                            React.DOM.input({type: "text", className: "search-field", placeholder: __("To search, just type"), 
                                value: this.state.searchQuery, onChange: this.updateSearchQuery}), 
                            React.DOM.a({href: "javascript:void(0);", className: "icon-search"})
                        )
                    )
                )
            )
        }
    },

    render: function(){
        var h2class = this.props.resource.is('archive') ? 'cat-title' : 'entry-title';
        return (
            React.DOM.div({className: ""}, 
                React.DOM.h2({className: h2class, dangerouslySetInnerHTML: {__html: this.props.title}}), 
                this.getCategoryDescription(), 
                this.getSearch()
            )
        )
    }
};

module.exports = {
    Class:ArchiveHeader,
    Component: React.createClass(ArchiveHeader)
};