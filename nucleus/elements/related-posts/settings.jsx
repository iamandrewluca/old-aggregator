/** @jsx React.DOM */
var React = require('react');
var __ = require('../../translate');
var ButtonRadio = require('../button-radio').Component;
var SettingsComponentMixin = require('../../mixins/settings-component');
var Switch = require('switch').Component;
var LogoSettings = {
    mixins:[SettingsComponentMixin()],
    getStateFromFlux: function(){
        return {};
    },

    TAXONOMIES: [{
        value: "category",
        label: __('Categories')
    }, {
        value: "post_tag",
        label: __('Tags')
    }],

    ARCHIVE_VIEW_TYPES: [{
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

    setTaxonomy: function(newTaxonomy){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { content:{ single: { relatedPosts: { taxonomy: newTaxonomy } } } });
    },

    setView: function(newView){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { content:{ single: { relatedPosts: { view: newView } } } });
    },

    setNumber: function(newNumber){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { content:{ single: { relatedPosts: { number: newNumber } } } });
    },

    setNoImage: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {
            content: {
                single: {
                    relatedPosts: {
                        "no-image": newValue
                    }
                }
            }
        });
    },


    componentWillMount: function(){
        this.addSettingField('taxonomy', ['content', 'single', 'relatedPosts', 'taxonomy']);
        this.addSettingField('view', ['content', 'single', 'relatedPosts', 'view']);
        this.addSettingField('number', ['content', 'single', 'relatedPosts', 'number']);
        this.addSettingField('no-image', ['content', 'single', 'relatedPosts', 'no-image']);
    },

    getNoImage: function () {
        if('thumb' != this.settingField('view').value()){
            return (
                <div className="row">
                    <div className="small-6 columns">
                        <label id="logo-type-setting" className="inline">
                            {__('No image')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <Switch disabled={this.settingField('no-image').shouldBeDisabled()} checked={this.settingField('no-image').value()}
                        onChange={this.setNoImage}/>
                        {this.settingField('no-image').inheritance()}
                    </div>
                </div>
            )
        }
    },

    render: function(){
        return (
            <div>
                <div className="row">
                    <div className="small-6 columns">
                        <label id="logo-type-setting" className="inline">
                            {__('Related posts resource')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <ButtonRadio options={this.TAXONOMIES} disabled={this.settingField('taxonomy').shouldBeDisabled()}
                            selected={this.settingField('taxonomy').value()} onSelected={this.setTaxonomy}/>
                        {this.settingField('taxonomy').inheritance()}
                    </div>
                </div>

                <div className="row">
                    <div className="small-6 columns">
                        <label id="logo-type-setting" className="inline">
                            {__('View type')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <ButtonRadio options={this.ARCHIVE_VIEW_TYPES}  disabled={this.settingField('view').shouldBeDisabled()}
                        selected={this.settingField('view').value()} onSelected={this.setView}/>
                        {this.settingField('view').inheritance()}
                    </div>
                </div>

                <div className="row">
                    <div className="small-6 columns">
                        <label id="logo-type-setting" className="inline">
                            {__('Number of posts')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <ButtonRadio options={this.COLUMNS}  disabled={this.settingField('number').shouldBeDisabled()}
                        selected={this.settingField('number').value()} onSelected={this.setNumber}/>
                            {this.settingField('number').inheritance()}
                    </div>
                </div>

                {this.getNoImage()}
            </div>
        )
    }
};

module.exports = {
    Class: LogoSettings,
    Component: React.createClass(LogoSettings)
};