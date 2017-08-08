/** @jsx React.DOM */
var React = require('react');
var __ = require('../../translate');
var InteractiveTutorials = {
    getInitialState: function (){
        return {joyride: false};
    },

    startCustomizationTutorial: function (){
        $ = jQuery;
        var enjoyHint = new EnjoyHint({});
        enjoyHint.setScript([{
            selector:'#main-logo',
            event: 'dblclick',
            description: __('To begin, just double click a customizable item, for example, the logo.')
        }, {
            selector:'#main-logo .customization-content',
            event: 'click',
            description: __("These are the settings for the logo. Let's select an image logo instead of a text logo.")
        }, {
            selector:'#main-logo img',
            event: 'hover',
            description: __("The changes will be immediately reflected on your site. " +
                            "Your visitors will not be able to see them until you save them, so feel free to play around. " +
                            "Hover over the logo to continue."),
            timeout: 1000
        }, {
            selector:'#header-container',
            event: 'dblclick',
            description: __("To customize another item, just doubleclick it, for example, try doubleclicking the header.")
        }, {
            selector:'#header-container .customization-content',
            event: 'hover',
            description: __("Aaaaand here are the settings for the header. Hover to continue."),
            timeout: 1000
        }, {
            selector:'#customizable-elements-switcher',
            event: 'click',
            description: __('Alternatively, you can use this button to navigate between customizables. It displays all the customizable elements on the current page.')
        }, {
            selector:'#customizable-elements-switcher .option-logo',
            event: 'click',
            description: __("Let's go back to logo settings")
        }, {
            selector:'#settings-level-navigation',
            event: 'click',
            description: __("You can have global and individual settings for specific post types, archive, pages etc. " +
                            "For example, let's say you we an image logo on front page, but a text logo on the rest of the site. " +
                            "To achieve this, let's click this button"),
            timeout: 1000
        }, {
            selector:'#settings-level-navigation .option-front-page-single-or-archive',
            event: 'click',
            description: __("Now we go to settings for Front page")
        }, {
            selector:'.logo-type-setting',
            event: 'click',
            description: __("As you can see, the logo type option is grayed out, and the \"Same as on The entire site\" checkbox is on, " +
                            "this means the logo on front page will always be as on the rest of the site, i.e. Front page does not have an individual setting for logo type. " +
                            "Let's change that, for scientific reasons. Uncheck the \"Same as on The entire site\" checkbox or just click a logo type option")
        }]);





        enjoyHint.runScript();
    },

    render: function (){
        return <div>
            <a href="javascript:void(0);" className="button expand" onClick={this.startCustomizationTutorial()}>{__('How do I customize my site?')}</a>
        </div>
    }
};

module.exports = {
    Class: InteractiveTutorials,
    Component: React.createClass(InteractiveTutorials)
};