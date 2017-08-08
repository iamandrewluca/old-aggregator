/** @jsx React.DOM */
var React = require('react');
var SocialIcons = {
    render: function(){
        return (
            React.DOM.div({className: "socialicons float-right"}, 
                React.DOM.ul({className: "monstro-social"}, 
                    React.DOM.li(null, React.DOM.link({href: "#", className: "fb"}, React.DOM.i({className: "icon-facebook"}))), 
                    React.DOM.li(null, React.DOM.link({href: "#", className: "twitter"}, React.DOM.i({className: "icon-twitter"}))), 
                    React.DOM.li(null, React.DOM.link({href: "#", className: "rss"}, React.DOM.i({className: "icon-rss"})))
                )
            )
        )
    }
};
module.exports = {
    Class: SocialIcons,
    Component: React.createClass(SocialIcons)
}