/** @jsx React.DOM */
var React = require('react');
var TeamMembers = {
    render: function(){
        return (
            React.DOM.article({className: "post-1122 type-page"}, 

                React.DOM.header({className: "entry-header"}, 

                    React.DOM.div({className: "team-header"}, 
                        React.DOM.span({className: "monstro-page-name"}, "about"), 
                        React.DOM.h2({className: "monstro-subpage-name"}, "team"), 
                        React.DOM.div({className: "team-description"}, 
                            React.DOM.p(null, 
                                "Vivamus sagittis lacus vel augue laoreet" + ' ' +
                                "rutrum faucibus dolor auctor. Lorem ipsum dolor" + ' ' +
                                "sit amet, consectetur adipiscing elit. Integera" + ' ' +
                                "posuere erat a ante venenatis dapibus posuere velit" + ' ' +
                                "aliquet."
                            )
                        )
                    )

                ), 

                React.DOM.section({className: "entry-content"}, 

                    React.DOM.div({id: "monstro-team"}, 
                        React.DOM.ul({className: "row"}, 
                            React.DOM.li({className: "columns large-4"}, 
                                React.DOM.div({className: "monstro-team-items"}, 
                                    React.DOM.a({href: "#"}, 
                                        React.DOM.img({className: "monstro-team-img", src: "http://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"}), 
                                        React.DOM.span({className: "team-read-more"}, "read more ")
                                    ), 
                                    React.DOM.span({className: "team-name"}, " John Doe "), 
                                    React.DOM.span({className: "monstro-team-title"}, " Co-Founder ")
                                )
                            ), 
                            React.DOM.li({className: "columns large-4"}, 
                                React.DOM.div({className: "monstro-team-items"}, 
                                    React.DOM.a({href: "#"}, 
                                        React.DOM.img({className: "monstro-team-img", src: "http://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"}), 
                                        React.DOM.span({className: "team-read-more"}, "read more ")
                                    ), 
                                    React.DOM.span({className: "team-name"}, " John Doe "), 
                                    React.DOM.span({className: "monstro-team-title"}, " Co-Founder ")
                                )
                            ), 
                            React.DOM.li({className: "columns large-4"}, 
                                React.DOM.div({className: "monstro-team-items"}, 
                                    React.DOM.a({href: "#"}, 
                                        React.DOM.img({className: "monstro-team-img", src: "https://serpcloud.com/serp/upload/1373741454avatar4.jpg"}), 
                                        React.DOM.span({className: "team-read-more"}, "read more ")
                                    ), 
                                    React.DOM.span({className: "team-name"}, " John Doe "), 
                                    React.DOM.span({className: "monstro-team-title"}, " Creative Directors ")
                                )
                            ), 
                            React.DOM.li({className: "columns large-4"}, 
                                React.DOM.div({className: "monstro-team-items"}, 
                                    React.DOM.a({href: "#"}, 
                                        React.DOM.img({className: "monstro-team-img", src: "http://pickaface.net/includes/themes/clean/img/slide4.png"}), 
                                        React.DOM.span({className: "team-read-more"}, "read more ")
                                    ), 
                                    React.DOM.span({className: "team-name"}, " John Doe "), 
                                    React.DOM.span({className: "monstro-team-title"}, " Co-Founder ")
                                )
                            ), 
                            React.DOM.li({className: "columns large-4"}, 
                                React.DOM.div({className: "monstro-team-items"}, 
                                    React.DOM.a({href: "#"}, 
                                        React.DOM.img({className: "monstro-team-img", src: "http://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png"}), 
                                        React.DOM.span({className: "team-read-more"}, "read more ")
                                    ), 
                                    React.DOM.span({className: "team-name"}, " John Doe "), 
                                    React.DOM.span({className: "monstro-team-title"}, " Co-Founder ")
                                )
                            ), 
                            React.DOM.li({className: "columns  large-4"}, 
                                React.DOM.div({className: "monstro-team-items"}, 
                                    React.DOM.a({href: "#"}, 
                                        React.DOM.img({className: "monstro-team-img", src: "https://serpcloud.com/serp/upload/1373741454avatar4.jpg"}), 
                                        React.DOM.span({className: "team-read-more"}, "read more ")
                                    ), 
                                    React.DOM.span({className: "team-name"}, " John Doe "), 
                                    React.DOM.span({className: "monstro-team-title"}, " Creative Directors ")
                                )
                            )
                        )
                    )
                )

            )
        )
    }
};

module.exports = {
    Class: TeamMembers,
    Component: React.createClass(TeamMembers)
};