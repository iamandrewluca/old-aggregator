/** @jsx React.DOM */
var React = require('react');
var __ = require('translate');
var ButtonRadio = require('button-radio').Component;
var SettingsComponentMixin = require('settings-component');
var Switch = require('switch').Component;
var LogoSettings = {
    mixins:[SettingsComponentMixin()],

    getStateFromFlux: function(){
        return {};
    },

    setHamburger: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { header:{ menu: { hamburger: newValue } } });
    },

    setDropdown: function(newValue){
        this.getFlux().actions.updateSettings(this.props.customizationLevel, { header:{ menu: { dropdown: newValue } } });
    },

    componentWillMount: function(){
        this.addSettingField('hamburger', ['header', 'menu', 'hamburger']);
        this.addSettingField('dropdown', ['header', 'menu', 'dropdown']);
    },

    render: function(){
        return (
            React.DOM.div(null, 
                React.DOM.div({className: "row logo-type-setting"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('Hamburger menu')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('hamburger').shouldBeDisabled(), checked: this.settingField('hamburger').value(), 
                            onChange: this.setHamburger}), 
                        this.settingField('hamburger').inheritance()
                    )
                ), 
                React.DOM.div({className: "row logo-type-setting"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label({id: "logo-type-setting", className: "inline"}, 
                            __('Dropdown')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('dropdown').shouldBeDisabled(), checked: this.settingField('dropdown').value(), 
                        onChange: this.setDropdown}), 
                        this.settingField('dropdown').inheritance()
                    )
                )
            )
        );
    }
};

module.exports = {
    Class: LogoSettings,
    Component: React.createClass(LogoSettings)
};