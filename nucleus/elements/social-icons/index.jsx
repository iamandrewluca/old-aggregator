/** @jsx React.DOM */
var React = require('react');
var SocialIcons = {
    render: function(){
        return (
            <div className="socialicons float-right">
                <ul className="monstro-social">
                    <li><link href="#" className="fb"><i className="icon-facebook"></i></link></li>
                    <li><link href="#" className="twitter"><i className="icon-twitter"></i></link></li>
                    <li><link href="#" className="rss"><i className="icon-rss"></i></link></li>
                </ul>
            </div>
        )
    }
};
module.exports = {
    Class: SocialIcons,
    Component: React.createClass(SocialIcons)
}