/** @jsx React.DOM */
var React = require('react');
var SocialIcons = require('../social-icons').Component;
var Copyright = require('../copyright').Component;
var Footer = {
    componentDidMount: function(){
        var $el = jQuery(this.getDOMNode());
        var footerHeight = $el.outerHeight();
        jQuery("#main").css("padding-bottom", footerHeight);
        $el.css("height", footerHeight);
    },
    render: function(){
        return (
            <footer id="footer-container" className="monstro-unboxed">
                <div className="row">
                    <div className="columns large-12">
                        {/* future place for footer widgets */}
                    </div>
                    <Copyright text={this.props.settings.copyright}/>
                    <div className="large-3 columns">
                        <SocialIcons />
                    </div>
                </div>
            </footer>
        )
    }
};

module.exports = {
    Class: Footer,
    Component: React.createClass(Footer)
};