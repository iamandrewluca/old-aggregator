/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var Link = require('link').Component;
var __ = require('translate');
var AggregatorHeader = {
    mixins: [Fluxxor.FluxMixin(React)],
    isActive: function(lang){
        return this.props.lang == lang ? ' active' : '';
    },
    setLang: function(lang){
        return function(){
            this.getFlux().actions.updateLang(lang);
        }.bind(this);
    },
    printLogo: function() {
            if (AggregatorData.lang === 'ro') {
                return (
                    Link({href: "?"}, __('Agregator de știri'))
                )
            }
            else {
                return (
                    Link({href: "?"}, __('Агрегатор новостей'))
                )
            }
    },
    render: function(){
        return (
            React.DOM.header({id: "header-container", className: "vertical-align"}, 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "large-9 columns"}, 
                        React.DOM.h1({className: "logo"}, 
                            this.printLogo()
                        )
                    ), 
                    React.DOM.div({className: "large-3 columns"}, 
                        React.DOM.ul({className: "language-switcher"}, 
                            React.DOM.li({className: "lang-ro" + this.isActive('ro'), onClick: this.setLang('ro')}, 
                                React.DOM.a({href: "javascript:void(0);"}, __('Română'))
                            ), 
                            React.DOM.li({className: "lang-ru" + this.isActive('ru'), onClick: this.setLang('ru')}, 
                                React.DOM.a({href: "javascript:void(0);"}, __('Русский'))
                            )
                        )
                    )
                )
            )
        )
    }
};
module.exports = {
    Class: AggregatorHeader,
    Component: React.createClass(AggregatorHeader)
};