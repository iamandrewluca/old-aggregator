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
                <div className="page-description" dangerouslySetInnerHTML={{__html: this.props.resource.description}}/>
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
                return <option value={index}>{category.name || category.prop('name')}</option>
            }.bind(this));
        }
        return (
            <select onChange={this.onCategorySelected}>
                {options}
            </select>
        )
    },

    getPostTypesDropdown: function (){
        var options = [];
        if(this.state.postTypes){
            options = this.state.postTypes.getAllEntities().map(function(postType, index){
                return <option value={index}>{postType.prop('name')}</option>
            }.bind(this));
        }
        return (
            <select onChange={this.onPostTypeSelected}>
                {options}
            </select>
        )
    },

    updateSearchQuery: function(event){
        this.getFlux().actions.updateSearchQuery(event.target.value);
    },

    getSearch: function(){
        if(this.props.showSearch){
            return (
                <div className="blog-list row">
                    <div className="large-4 columns">
                        <label>{__('Archives')}</label>
                        <div>{this.getPostTypesDropdown()}</div>
                    </div>
                    <div className="large-4 columns">
                        <label>{__('Category')}</label>
                        <div>{this.getCategoryDropdown()}</div>
                    </div>
                    <div className="large-4 columns">
                        <form>
                            <label>{__('Search')}</label>
                            <input type="text" className="search-field" placeholder={__("To search, just type")}
                                value={this.state.searchQuery} onChange={this.updateSearchQuery}/>
                            <a href="javascript:void(0);" className="icon-search"></a>
                        </form>
                    </div>
                </div>
            )
        }
    },

    render: function(){
        var h2class = this.props.resource.is('archive') ? 'cat-title' : 'entry-title';
        return (
            <div className="">
                <h2 className={h2class} dangerouslySetInnerHTML={{__html: this.props.title}}/>
                {this.getCategoryDescription()}
                {this.getSearch()}
            </div>
        )
    }
};

module.exports = {
    Class:ArchiveHeader,
    Component: React.createClass(ArchiveHeader)
};