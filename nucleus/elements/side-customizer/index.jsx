/** @jsx React.DOM */
var React = require('react');
var Fluxxor = require('fluxxor');
var __ = require('../../translate');
var Blurable = require('../../mixins/blurable');
var Accordion = require('../accordion').Component;
var AccordionNavigation = require('../accordion/navigation').Component;
var InteractiveTutorials = require('./interactive-tutorials').Component;
var SideCustomizer = {
    mixins: [Fluxxor.FluxMixin(React), Blurable],
    onBluredCallback: function(){
        //this.getFlux().store("Customizable").customizationFinished('more-settings');
    },

    getSupportLink: function(){
        console.warn('Support forum link is not specified!');
        return "http://cosmothemes.zendesk.com/path/to/product";
    },

    getVideoTutorialsLink: function(){
        console.warn('Video tutorials link is not specified!');
        return "http://youtube.com/path/to/playlist";
    },

    render: function(){
        return <div className="side-customizer">
            <Accordion>
                <AccordionNavigation title={__('Ajax settings')}>
                    Herp derp content
                </AccordionNavigation>
                <AccordionNavigation title={__('Sidebar builder')}>
                    Sidebar builder
                </AccordionNavigation>
                <AccordionNavigation title={__('Help and support')}>
                    <Accordion>
                        <AccordionNavigation title={__('Interactive Tutorials')}>
                            <InteractiveTutorials/>
                        </AccordionNavigation>
                        <AccordionNavigation title={__('Support forums')} href={this.getSupportLink()}/>
                        <AccordionNavigation title={__('Video tutorials')} href={this.getVideoTutorialsLink()}/>
                    </Accordion>
                </AccordionNavigation>
            </Accordion>
        </div>
    }
};

module.exports = {
    Class: SideCustomizer,
    Component: React.createClass(SideCustomizer)
};