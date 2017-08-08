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
                    <Link href="?">{__('Agregator de știri')}</Link>
                )
            }
            else {
                return (
                    <Link href="?">{__('Агрегатор новостей')}</Link>
                )
            }
    },
    render: function(){
        return (
            <header id="header-container" className="vertical-align">
                <div className="row">
                    <div className="large-9 columns">
                        <h1 className="logo">
                            {this.printLogo()}
                        </h1>
                    </div>
                    <div className="large-3 columns">
                        <ul className="language-switcher">
                            <li className={"lang-ro" + this.isActive('ro')} onClick={this.setLang('ro')}>
                                <a href="javascript:void(0);">{__('Română')}</a>
                            </li>
                            <li className={"lang-ru" + this.isActive('ru')} onClick={this.setLang('ru')}>
                                <a href="javascript:void(0);">{__('Русский')}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
};
module.exports = {
    Class: AggregatorHeader,
    Component: React.createClass(AggregatorHeader)
};