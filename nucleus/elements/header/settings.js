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
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label(null, 
                            __('Vertical align')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('verticalAlign').shouldBeDisabled(), checked: this.settingField('verticalAlign').value(), 
                        onChange: this.setVerticalAlign}), 
                        this.settingField('verticalAlign').inheritance()
                    )
                )
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
            React.DOM.div(null, 
                React.DOM.div({className: "row header-type-setting"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label(null, 
                            __('Header type')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.HEADER_TYPES, disabled: this.settingField('type').shouldBeDisabled(), 
                            selected: this.settingField('type').value(), onSelected: this.setHeaderType}), 
                            this.settingField('type').inheritance()
                    )
                ), 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label(null, 
                            __('Sticky header')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('sticky').shouldBeDisabled(), checked: this.settingField('sticky').value(), 
                            onChange: this.setSticky}), 
                        this.settingField('sticky').inheritance()
                    )
                ), 

                this.getVerticalAlign(), 

                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label(null, 
                            __('Search')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('showSearch').shouldBeDisabled(), checked: this.settingField('showSearch').value(), 
                            onChange: this.setSearch}), 
                        this.settingField('showSearch').inheritance()
                    )
                ), 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label(null, 
                            __('Login menu')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        Switch({disabled: this.settingField('showLoginMenu').shouldBeDisabled(), checked: this.settingField('showLoginMenu').value(), 
                            onChange: this.setLoginMenu}), 
                        this.settingField('showSearch').inheritance()
                    )
                ), 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "small-6 columns"}, 
                        React.DOM.label(null, 
                            __('Padding')
                        )
                    ), 
                    React.DOM.div({className: "small-6 columns"}, 
                        ButtonRadio({options: this.PADDINGS, disabled: this.settingField('padding').shouldBeDisabled(), 
                        selected: this.settingField('padding').value(), onSelected: this.setPadding}), 
                            this.settingField('padding').inheritance(), 
                        this.settingField('padding').inheritance()
                    )
                )
            )
        );
    }
};


module.exports = {
    Class: HeaderSettings,
    Component: React.createClass(HeaderSettings)
};