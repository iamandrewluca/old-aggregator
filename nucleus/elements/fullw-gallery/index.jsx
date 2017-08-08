/** @jsx React.DOM */
var React = require('react');
var EntryMeta = require('../entry-meta').Component;
var FullwGallery = {
    render: function(){
        var style = {
            backgroundImage: "url(images/landscape.jpg)"
        };
        return (
            <article className="GalleryElement">
                <section>
                    <div className="GalleryMeta">
                        <div className="entry-navigation">
                            <a href="#a3" className="backbutton">Previous</a>
                            <p className="GalleryNumber">01</p>
                            <a href="#a2" className="nextbutton">Next</a>
                            <a href="#open" className="openbutton">Open</a>
                        </div>
                    </div>

                    <div className="GalleryMeta">
                        <EntryMeta />
                        <h2 className="entry-title">
                            <a href="#" title="Markup: HTML Tags and Formatting" rel="bookmark">Markup: HTML Tags and Formatting</a>
                        </h2>
                    </div>
                </section>
                <footer>
                    <div className="backgrounder" style={style}></div>
                </footer>
            </article>
        )
    }
};

module.exports = {
    Class: FullwGallery,
    Component: React.createClass(FullwGallery)
};