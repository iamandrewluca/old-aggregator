/** @jsx React.DOM */
var React = require('react');
var Customizable = require('../../mixins/customizable');
var __ = require('../../translate');
var Logo = require('../logo').Component;
var MainMenu = require('../main-menu').Component;
var Search = require('../search').Component;
var Header = {
    mixins: [Customizable('header', __('Header'), function(cb){
        require(['./settings'], cb);
    })],
    getSettingsSnapshot: function(){
        return {
            type: this.props.settings.type
        }
    },
    getCustomizationDropdownPosition: function(){
        return ('left' == this.props.settings.type) ? 'right' : 'bottom';
    },
    getSearch: function(){
        if(this.props.settings.showSearch){
            return (
                <div className="columns small-3 large-2">
                    <Search/>
                </div>
            )
        } else {
            return null;
        }
    },
    getSocialIcons: function(){
        return this.props.settings.showSocialIcons ? <SocialIcons/> : null;
    },
    getLoginMenu: function(){
        return this.props.settings.showLoginMenu ? <LoginMenu/> : null;
    },
    getSocialIconsAndLoginMenu: function(){
        if(this.props.settings.showSocialIcons || this.props.settings.showLoginMenu){
            return (
                <div className="large-3 columns">
                    {this.getSocialIcons()}
                    {this.getLoginMenu()}
                </div>
            )
        } else {
            return null;
        }
    },
    getHeaderContainerClasses: function(){
        var padding = this.props.settings.padding;
        var classes = [];
        if(padding){
            classes.push("padding-top-" + padding);
            classes.push("padding-bottom-" + padding);
        }
        if(('left' != this.props.settings.type) && this.props.settings.verticalAlign){
            classes.push("vertical-align");
        }
        return classes.join(' ');
    },
    getMenuContainerClasses: function(){
        var classes = "columns hide-for-small";
        var columns = 12;
        if(this.props.settings.showSearch) columns -= 2;
        if(this.props.settings.showLoginMenu) columns -= 2;
        if(this.props.settings.menu.dropdown) classes += ' monstro-drop-down';
        classes = classes + " large-" + columns + " ";
        return classes;
    },
    render: function(){
        return (
            <header id="header-container" className={"monstro-unboxed " + this.getHeaderContainerClasses()}>
                <div className="row">
                    {this.getCustomizationDropdown(this.getCustomizationDropdownPosition())}
                    <div className="columns small-1 hide-for-large">
                        <a href="javascript:void(0)" id="trigger" className="menu-trigger"><i className="icon-menu"></i></a>
                    </div>
                    <div className="columns small-8 large-2">
                        <Logo settings={this.props.settings.logo} homeUrl={this.props.config.homeUrl} allowCustomization={this.props.allowCustomization}/>
                    </div>
                    <div className={this.getMenuContainerClasses()}>
                        <MainMenu settings={this.props.settings.menu} items={this.props.config.menu} allowCustomization={this.props.allowCustomization}/>
                    </div>

                    {this.getSearch()}
                </div>
            </header>
        )
    }
};

module.exports = {
    Class: Header,
    Component: React.createClass(Header)
};