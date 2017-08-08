/** @jsx React.DOM */
var React = require('react');
var TeamMemberFull = {
    render: function(){
        return (

            React.DOM.article({className: "post-1122 type-page"}, 
                React.DOM.div({className: "team-arrows"}, 
                    React.DOM.a({href: "#"}, " ", React.DOM.span({className: "member-arrow-top"}), " "), 
                    React.DOM.a({href: "#"}, React.DOM.span({className: "member-arrow-left"}), " "), 
                    React.DOM.a({href: "#"}, React.DOM.span({className: "member-arrow-right"}), " ")
                ), 
                React.DOM.div({className: "row"}, 
                    React.DOM.div({className: "columns large-6"}, 

                        React.DOM.header({className: "team-header"}, 
                            React.DOM.div({className: "team-full-header"}, 
                                React.DOM.h2({className: "team-member-name"}, "Rose Faithes "), 
                                React.DOM.span({className: "team-member-position"}, "Creative Director")
                            )
                        ), 

                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.div({className: "team-full-description"}, 
                                React.DOM.p(null, "VFusce dapibus, tellus ac cursus" + ' ' +
                                "commodo, tortor mauris condimentum nibh, ut fermentum massa justo" + ' ' +
                                "sit amet risus. Integer posuere erat a ante venenatis dapibus" + ' ' +
                                "posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut" + ' ' +
                                "id elit. Vestibulum id ligula porta felis euismod semper." + ' ' +
                                "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh," + ' ' +
                                "ut fermentum massa justo sit amet risus. Vestibulum id ligula porta" + ' ' +
                                "felis euismod semper."), 
                                React.DOM.p(null, 
                                "Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero," + ' ' +
                                "a pharetra augue. Donec id elit non mi porta gravida at eget metus. Fusce" + ' ' +
                                "dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut" + ' ' +
                                "fermentum massa justo sit ")
                            ), 
                            React.DOM.div({className: "team-socialicons"}, 
                                React.DOM.ul({className: "member-social"}, 
                                    React.DOM.li(null, React.DOM.a({href: "#", className: "fb"}, React.DOM.i({className: "icon-facebook"}))), 
                                    React.DOM.li(null, React.DOM.a({href: "#", className: "twitter"}, React.DOM.i({className: "icon-twitter"})))
                                )
                            )
                        )
                    ), 

                    React.DOM.div({className: "columns large-6"}, 
                        React.DOM.section({className: "entry-section"}, 
                            React.DOM.img({className: "member-image", src: "http://www.wcaltd.com/wp-content/uploads/2013/04/C_Person_051113_0368.jpg", alt: "image"})
                        )
                    )
                )

            )
        )
    }
};

module.exports = {
    Class: TeamMemberFull,
    Component: React.createClass(TeamMemberFull)
};