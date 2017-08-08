/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var __ = require('../../translate');
var traverseObj = require('../../utils/object-traverser').traverse;
var deleteProp = require('../../utils/object-traverser').deleteProp;
var createDelta = require('../../utils/object-traverser').createDelta;
module.exports = function(){
    var fields = {};
    return {
        mixins:[Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("Resource")],
        addSettingField: function(slug, path){
            var that = this;
            fields[slug] = {
                isInherited: function(){
                    return that.getFlux().store("Resource").isSettingInherited(that.props.customizationLevel, path);
                },

                shouldBeDisabled: function(){
                    return ('global' != that.props.customizationLevel) && this.isInherited();
                },

                value: function(){
                    var traversable = this.isInherited() ?
                        that.getFlux().store("Resource").getSettings(that.props.customizationLevel) :
                        that.props.settings;
                    return traverseObj(traversable, path);
                },

                update: function(value){
                    that.getFlux().actions.updateSettings(that.props.customizationLevel, createDelta(path, value));
                },

                toggleInheritance: function(event){
                    if(event.currentTarget.checked){
                        that.getFlux().actions.updateSettings(that.props.customizationLevel, function(settings){
                            deleteProp(settings, path);
                            return settings;
                        });
                    } else {
                        var parentLevel = that.getFlux().store("Resource").getParentSettingsLevel(that.props.customizationLevel);
                        var parentSettings = that.getFlux().store("Resource").getSettings(parentLevel);
                        this.update(traverseObj(parentSettings, path));
                    }
                },

                inheritance: function(){
                    var gotoLevel;
                    if('global' != that.props.customizationLevel){
                        var parentLevel = that.getFlux().store("Resource").getParentSettingsLevel(that.props.customizationLevel);
                        name = that.getFlux().store("Resource").getSettingsLevelName(parentLevel);
                        gotoLevel = function(){
                            that.props.onCustomizationLevelChanged(parentLevel);
                        };
                        return [
                            <input type="checkbox" checked={this.isInherited()} onChange={this.toggleInheritance.bind(this)}/>,
                            <label>
                                {__('Same as on')}&nbsp;
                                <a href="javascript:void(0);" className="customization-level-link" onClick={gotoLevel}>{name}</a>
                            </label>
                        ]
                    }
                    var overrides = that.getFlux().store("Resource").isSettingOverridden(that.props.customizationLevel, path);
                    if(overrides){
                        var name = that.getFlux().store("Resource").getSettingsLevelName(overrides);
                        gotoLevel = function(){
                            that.props.onCustomizationLevelChanged(overrides);
                        };
                        return (
                            <span className="label radius">
                                {__('This setting is overridden on')}&nbsp;
                                <a href="javascript:void(0);" className="customization-level-link" onClick={gotoLevel}>{name}</a>
                            </span>
                        )
                    }
                }
            }
        },
        settingField: function(slug){
            return fields[slug];
        }
    }
};