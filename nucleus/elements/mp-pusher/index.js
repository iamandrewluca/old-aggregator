/** @jsx React.DOM */
var React = require('react/addons');
var Fluxxor = require('fluxxor');
var Header = require('../header').Component;
var Section = require('../section').Component;
var Footer = require('../footer').Component;
var MpPusher = {
    mixins:[Fluxxor.FluxMixin(React), Fluxxor.StoreWatchMixin("Config", "Resource", "Customizables")],
    sideCustomizer: null,
    getInitialState: function(){
        return {
            sideCustomizerLoaded: false
        }
    },

    getStateFromFlux: function(){
        var flux = this.getFlux();
        var resource = flux.store("Resource");
        return {
            config: flux.store("Config").getConfig(),
            settings: resource.getSettings('post-type-archive'),
            resource: resource.getResource()
        }
    },

    getSideCustomizer: function(){
        if(this.getFlux().store("Customizables").isBeingCustomized('more-settings')){
            if(this.state.sideCustomizerLoaded){
                var SideCustomizer = this.sideCustomizer;
                return SideCustomizer(null)
            } else {
                var that = this;
                require(['side-customizer'], function(sideCustomizer){
                    that.sideCustomizer = sideCustomizer.Component;
                    that.setState({
                        sideCustomizerLoaded: true
                    });
                })
            }
        }
    },

    render: function(){
        if(!(this.state.config && this.state.settings && this.state.resource)){
            return React.DOM.h1(null, "Preloader")
        }
        //<div id="wrapper" className="align-center">{/* Add .boxed for boxed version .align-left - for left alignment or .align-center. If fullwidth - keep always .align-center */}
        return (
            React.DOM.div(null, 
                this.getSideCustomizer(), 
                React.DOM.div({id: "mp-pusher", className: "mp-pusher has-background"}, 
                    Header({settings: this.state.settings.header, config: this.state.config, allowCustomization: true}), 
                    Section({settings: this.state.settings.content, resource: this.state.resource, allowCustomization: true}), 
                    Footer({settings: this.state.settings.footer})
                )
            )
        )
    }
};

module.exports = {
    Class: MpPusher,
    Component: React.createClass(MpPusher)
};