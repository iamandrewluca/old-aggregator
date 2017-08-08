/** @jsx React.DOM */
var React = require('react');
var EntryMeta = require('../entry-meta').Component;
var FullwGallery = {
    render: function(){
        var style = {
            backgroundImage: "url(images/landscape.jpg)"
        };
        return (
            React.DOM.article({className: "GalleryElement"}, 
                React.DOM.section(null, 
                    React.DOM.div({className: "GalleryMeta"}, 
                        React.DOM.div({className: "entry-navigation"}, 
                            React.DOM.a({href: "#a3", className: "backbutton"}, "Previous"), 
                            React.DOM.p({className: "GalleryNumber"}, "01"), 
                            React.DOM.a({href: "#a2", className: "nextbutton"}, "Next"), 
                            React.DOM.a({href: "#open", className: "openbutton"}, "Open")
                        )
                    ), 

                    React.DOM.div({className: "GalleryMeta"}, 
                        EntryMeta(null), 
                        React.DOM.h2({className: "entry-title"}, 
                            React.DOM.a({href: "#", title: "Markup: HTML Tags and Formatting", rel: "bookmark"}, "Markup: HTML Tags and Formatting")
                        )
                    )
                ), 
                React.DOM.footer(null, 
                    React.DOM.div({className: "backgrounder", style: style})
                )
            )
        )
    }
};

module.exports = {
    Class: FullwGallery,
    Component: React.createClass(FullwGallery)
};