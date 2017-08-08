/** @jsx React.DOM */
var React = require('react');
var Customizable = require('../../mixins/customizable');
var __ = require('../../translate');
var Copyright = {
    mixins: [Customizable('copyright', __("Copyright"))],
    render: function(){
        return (
            <div className="large-9 columns">
                {this.getCustomizationDropdown('top')}
                <p className="copyright" dangerouslySetInnerHTML={{__html: this.props.text}}></p>
            </div>
        )
    }
};

module.exports = {
    Class: Copyright,
    Component: React.createClass(Copyright)
}