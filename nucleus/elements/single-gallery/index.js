/** @jsx React.DOM */
var React = require('react');
var EntryMeta = require('../entry-meta').Component;
var Gallery = require('../gallery').Component;
var Stats = require('../stats').Component;
var SocialShare = require('../social-share').Component;
var Voting = require('../voting').Component;
var Comments = require('../entry-comments').Component;
var RelatedPosts = require('../related-posts').Component;
var GallerySingle = {
    getInitialState: function(){
        return {
            slides: [
                {
                    image: "http://lorempixel.com/750/800/"
                },
                {
                    image: "http://lorempixel.com/750/800/"
                }
            ]
        }
    },
    simulateLazyLoad: function(){
        var slides = this.state.slides;
        this.setState({
            slides: slides.concat([{
                image: "http://lorempixel.com/" + (1800 + this.state.slides.length) + "/800/"
            }])
        });
    },
    render: function(){
        return (
            React.DOM.article({className: "gallery type-gallery status-publish has-post-thumbnail hentry"}, 

                React.DOM.header({className: "entry-header meta-above"}, 
                    EntryMeta(null), 
                    React.DOM.h2({className: "post-title"}, "Olivia & James wedding")
                ), 

                React.DOM.section(null, 
                    React.DOM.div({className: "entry-content stretched"}, 
                        Gallery({slides: this.state.slides, onSlidesWillEnd: this.simulateLazyLoad, height: "800"})
                    )
                ), 

                React.DOM.footer({className: "entry-footer"}, 

                    React.DOM.div({className: "row"}, 
                        React.DOM.div({className: "columns large-12"}, 
                            React.DOM.p(null, "Well, the way they make shows is, they make one show. That show’s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they’re going to make more shows. Some pilots get picked and become television programs. Some don’t, become nothing. She starred in one of the ones that became nothing."), 
                            React.DOM.p(null, "Yeah, I like animals better than people sometimes… Especially dogs. Dogs are the best. Every time you come home, they act like they haven’t seen you in a year. And the good thing about dogs… is they got different dogs for different people. Like pit bulls. The dog of dogs. Pit bull can be the right man’s best friend… or the wrong man’s worst enemy. You going to give me a dog for a pet, give me a pit bull.")
                        )
                    ), 

                    React.DOM.div({className: "row monstro-border"}, 
                        React.DOM.div({className: "large-8 small-6 columns"}, 
                            Stats(null), 
                            SocialShare(null)
                        ), 
                        React.DOM.div({className: "large-4 small-6 columns"}, 
                            Voting(null)
                        )
                    ), 

                    React.DOM.div({className: "row"}, 
                        React.DOM.div({className: "columns large-12"}, 
                            Comments(null)
                        )
                    ), 

                    React.DOM.div({className: "row"}, 
                        React.DOM.div({className: "columns large-12"}
                        /*<RelatedPosts />*/
                        )
                    )

                )

            )
        )
    }
};

module.exports = {
    Class: GallerySingle,
    Component: React.createClass(GallerySingle)
};