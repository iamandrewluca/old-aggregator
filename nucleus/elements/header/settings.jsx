/** @jsx React.DOM */
var React = require('react');
var __ = require('../../translate');
var ButtonRadio = require('../button-radio').Component;
var Switch = require('../switch').Component;
var SettingsComponentMixin = require('../../mixins/settings-component');
var HeaderSettings = {
    mixins: [SettingsComponentMixin()],

    getStateFromFlux: function(){return {}},

    HEADER_TYPES: [{
        value: "default",
        label: __('Default')
    }, {
        value: "left",
        label: __('Left')
    }, {
        value: "centered",
        label: __('Centered')
    }],

    PADDINGS: [{
        value: false,
        label: __('None')
    },{
        value: 15,
        label: '15px'
    }, {
        value: 30,
        label: '30px'
    }, {
        value: 60,
        label: '60px'
    }],

    getVerticalAlign: function (){
        if('left' != this.settingField('type').value()){
            return (
                <div className="row">
                    <div className="small-6 columns">
                        <label>
                            {__('Vertical align')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <Switch disabled={this.settingField('verticalAlign').shouldBeDisabled()} checked={this.settingField('verticalAlign').value()}
                        onChange={this.setVerticalAlign}/>
                        {this.settingField('verticalAlign').inheritance()}
                    </div>
                </div>
            );
        }
    },

    setHeaderType: function(newType){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { header:{ type: newType } });
    },

    setSticky: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {header: {sticky: newValue}});
    },

    setVerticalAlign: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {header: {verticalAlign: newValue}});
    },

    setSocialIcons: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {header: {showSocialIcons: newValue}});
    },

    setSearch: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {header: {showSearch: newValue}});
    },

    setLoginMenu: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {header: {showLoginMenu: newValue}});
    },

    setPadding: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, {header: {padding: newValue}});
    },


    componentWillMount: function(){
        this.addSettingField('type', ['header', 'type']);
        this.addSettingField('sticky', ['header', 'sticky']);
        this.addSettingField('verticalAlign', ['header', 'verticalAlign']);
        this.addSettingField('showSearch', ['header', 'showSearch']);
        this.addSettingField('showLoginMenu', ['header', 'showLoginMenu']);
        this.addSettingField('padding', ['header', 'padding']);
    },

    render: function(){
        return (
            <div>
                <div className="row header-type-setting">
                    <div className="small-6 columns">
                        <label>
                            {__('Header type')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <ButtonRadio options={this.HEADER_TYPES} disabled={this.settingField('type').shouldBeDisabled()}
                            selected={this.settingField('type').value()} onSelected={this.setHeaderType}/>
                            {this.settingField('type').inheritance()}
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 columns">
                        <label>
                            {__('Sticky header')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <Switch disabled={this.settingField('sticky').shouldBeDisabled()} checked={this.settingField('sticky').value()}
                            onChange={this.setSticky}/>
                        {this.settingField('sticky').inheritance()}
                    </div>
                </div>

                {this.getVerticalAlign()}

                <div className="row">
                    <div className="small-6 columns">
                        <label>
                            {__('Search')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <Switch disabled={this.settingField('showSearch').shouldBeDisabled()} checked={this.settingField('showSearch').value()}
                            onChange={this.setSearch}/>
                        {this.settingField('showSearch').inheritance()}
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 columns">
                        <label>
                            {__('Login menu')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <Switch disabled={this.settingField('showLoginMenu').shouldBeDisabled()} checked={this.settingField('showLoginMenu').value()}
                            onChange={this.setLoginMenu}/>
                        {this.settingField('showSearch').inheritance()}
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 columns">
                        <label>
                            {__('Padding')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <ButtonRadio options={this.PADDINGS} disabled={this.settingField('padding').shouldBeDisabled()}
                        selected={this.settingField('padding').value()} onSelected={this.setPadding}/>
                            {this.settingField('padding').inheritance()}
                        {this.settingField('padding').inheritance()}
                    </div>
                </div>
            </div>
        );
    }
};


module.exports = {
    Class: HeaderSettings,
    Component: React.createClass(HeaderSettings)
};