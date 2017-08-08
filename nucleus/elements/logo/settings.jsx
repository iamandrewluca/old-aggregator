/** @jsx React.DOM */
var React = require('react');
var __ = require('translate');
var ButtonRadio = require('button-radio').Component;
var SettingsComponentMixin = require('settings-component');
var LogoSettings = {
    mixins:[SettingsComponentMixin()],

    LOGO_TYPES: [{
        value: "text",
        label: __('Text')
    }, {
        value: "image",
        label: __('Image')
    }],

    getStateFromFlux: function(){
        return {};
    },

    getUploadLabel: function(){
        if('image' == this.settingField('type').value()){
            return (
                <label>
                    <a href="javascript:void(0);" className="button tiny">{__('Upload')}</a>
                </label>
            )
        }
    },

    setLogoType: function(newType){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { header:{ logo: { type: newType } } });
    },

    componentWillMount: function(){
        this.addSettingField('type', ['header', 'logo', 'type']);
    },

    render: function(){
        return (
            <div>
                <div className="row logo-type-setting">
                    <div className="small-6 columns">
                        <label id="logo-type-setting" className="inline">
                            {__('Logo type')}
                        </label>
                    </div>
                    <div className="small-6 columns">
                        <ButtonRadio options={this.LOGO_TYPES} disabled={this.settingField('type').shouldBeDisabled()}
                            selected={this.settingField('type').value()} onSelected={this.setLogoType}/>
                        {this.settingField('type').inheritance()}
                    </div>
                </div>
                {this.getUploadLabel()}
            </div>
        );
    }
};

module.exports = {
    Class: LogoSettings,
    Component: React.createClass(LogoSettings)
};