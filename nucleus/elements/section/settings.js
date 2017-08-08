/** @jsx React.DOM */
var React = require('react');
var __ = require('translate');
var ButtonRadio = require('button-radio').Component;
var Switch = require('switch').Component;
var SettingsComponentMixin = require('../../mixins/settings-component');
var LogoSettings = {
    mixins:[SettingsComponentMixin()],

    ARCHIVE_VIEW_TYPES: [{
        value: "list",
        label: __('List')
    }, {
        value: "grid",
        label: __('Grid')
    }, {
        value: "thumb",
        label: __('Thumb')
    }],

    COLUMNS: [{
        value: 2,
        label: 2
    }, {
        value: 3,
        label: 3
    }, {
        value: 4,
        label: 4
    }],

    WIDTHS: [{
        value: 'fullwidth',
        label: __('Full')
    }, {
        value: 'large',
        label: __('Large')
    }, {
        value: 'narrow',
        label: __('Narrow')
    }],

    ALIGNS: [{
        value: 'left',
        label: __('Left')
    }, {
        value: 'center',
        label: __('Center')
    }, {
        value: 'right',
        label: __('Right')
    }],

    PAGINATION_TYPES: [{
        value: 'classic',
        label: __('Classic')
    }, {
        value: 'load-more',
        label: __('Load more button')
    }, {
        value: 'infinite-scroll',
        label: __('Ifinite scroll')
    }],

    getStateFromFlux: function(){
        return {
            settings: this.getFlux().store("Resource").getSettings(this.props.customizationLevel)
        };
    },

    setViewType: function(newType){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content:{
                archive:{
                    view: newType
                }
            }
        });
    },

    setColumns: function(newColumns){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content: {
                archive: {
                    columns: newColumns
                }
            }
        });
    },

    setWidth: function(newWidth){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content: {
                width: newWidth
            }
        });
    },

    setAlign: function(newAlign){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content: {
                align: newAlign
            }
        });
    },

    setPagination: function(newPagination){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content: {
                archive: {
                    pagination: newPagination
                }
            }
        });
    },

    setNoImage: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content: {
                "no-image": newValue
            }
        });
    },

    componentWillMount: function(){
        this.addSettingField('archiveView', ['content', 'archive', 'view']);
        this.addSettingField('columns', ['content', 'archive', 'columns']);
        this.addSettingField('width', ['content', 'width']);
        this.addSettingField('align', ['content', 'align']);
        this.addSettingField('no-image', ['content', 'no-image']);
        this.addSettingField('pagination', ['content', 'archive', 'pagination']);
    },

    getColumns: function(){
        if(['thumb', 'grid'].indexOf(this.settingField('archiveView').value()) > -1){
            return (
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('Number of columns')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.COLUMNS, disabled: this.settingField('columns').shouldBeDisabled(), 
                        selected: this.settingField('columns').value(), onSelected: this.setColumns}), 
                            this.settingField('columns').inheritance()
                    )
                )
            )
        }
    },

    getAlign: function(){
        if('fullwidth' != this.settingField('width').value() && 'left' != this.state.settings.header.type){
            return (
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('Layout alignment')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.ALIGNS, disabled: this.settingField('align').shouldBeDisabled(), 
                        selected: this.settingField('align').value(), onSelected: this.setAlign}), 
                            this.settingField('align').inheritance()
                    )
                )
            )
        }
    },

    getNoImage: function () {
        if('thumb' != this.settingField('archiveView').value()){
            return (
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('No image')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('no-image').shouldBeDisabled(), checked: this.settingField('no-image').value(), 
                        onChange: this.setNoImage}), 
                        this.settingField('no-image').inheritance()
                    )
                )
            )
        }
    },

    render: function(){
        return (
            React.DOM.div(null, 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('Layout width')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.WIDTHS, disabled: this.settingField('width').shouldBeDisabled(), 
                        selected: this.settingField('width').value(), onSelected: this.setWidth}), 
                        this.settingField('width').inheritance()
                    )
                ), 
                this.getAlign(), 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('View type')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.ARCHIVE_VIEW_TYPES, disabled: this.settingField('archiveView').shouldBeDisabled(), 
                        selected: this.settingField('archiveView').value(), onSelected: this.setViewType}), 
                        this.settingField('archiveView').inheritance()
                    )
                ), 
                this.getColumns(), 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('Pagination type')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.PAGINATION_TYPES, disabled: this.settingField('pagination').shouldBeDisabled(), 
                        selected: this.settingField('pagination').value(), onSelected: this.setPagination}), 
                        this.settingField('pagination').inheritance()
                    )
                ), 

                this.getNoImage()
            )
        )
    }
};

module.exports = {
    Class: LogoSettings,
    Component: React.createClass(LogoSettings)
};