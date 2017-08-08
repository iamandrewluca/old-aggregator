/** @jsx React.DOM */
var React = require('react');
var MansonryView = {
    render: function(){
        return (
            React.DOM.div({className: "row monstro-grid-view"}, /*Add .no-gutter */

                React.DOM.div({className: "columns large-4"}, 

                    React.DOM.article({className: "format-standard"}, 

                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.div({className: "featimg"}, 
                                Link({href: "#"}, 
                                    Image({src: "images/5182473897e21.jpg", alt: ""})
                                ), 
                                React.DOM.div({className: "entry-category"}, 
                                    Link({href: "#category"}, "Category name")
                                ), 
                                React.DOM.div({className: "entry-feat-overlay"}, 
                                    Link({href: "#"}, " ")
                                )
                            )
                        ), 

                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.h2({className: "entry-title"}, Link({href: "#", title: "", rel: "bookmark"}, "This is post title")), 
                            React.DOM.div({className: "entry-date"}, 
                                Link({href: "#"}, "October 29, 1981")
                            ), 
                            React.DOM.div({className: "entry-excerpt"}, 
                                React.DOM.p(null, "Ahh. Wow, ah Red, you look great. Everything looks great. 1:24, I still got time. Oh my god. No, no not again, c'mon, c'mon. Hey. Libyans. You do? George. I just wannLink use the phone.")
                            )
                        ), 

                        React.DOM.footer({className: "entry-footer"}, 
                            Link({className: "read-more", href: "#", title: "", rel: "bookmark"}, "Full story")
                        )

                    ), 

                    React.DOM.article({className: "format-image"}, 
                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.div({className: "featimg"}, 
                                Link({href: "#"}, 
                                    Image({src: "images/53ecb479ca500.jpg", alt: ""})
                                ), 
                                React.DOM.div({className: "entry-category"}, 
                                    Link({href: "#category"}, "Category name")
                                ), 
                                React.DOM.div({className: "entry-feat-overlay"}, 
                                    Link({href: "#"}, " ")
                                )
                            )
                        ), 
                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.h2({className: "entry-title"}, Link({href: "#", title: "", rel: "bookmark"}, "This is post title")), 
                            React.DOM.div({className: "entry-date"}, 
                                Link({href: "#"}, "January 29, 2014")
                            ), 
                            React.DOM.div({className: "entry-excerpt"}, 
                                React.DOM.p(null, "Sam, quit fiddling with that thing and come in here and eat your dinner. Hey George, heard you laid out Biff, nice going. Please, Marty, don't tell me, no man should know too much about their own destiny.")
                            )
                        ), 
                        React.DOM.footer({className: "entry-footer"}, 
                            Link({className: "read-more", href: "#", title: "", rel: "bookmark"}, "Full story")
                        )
                    )

                ), 

                React.DOM.div({className: "columns large-4"}, 

                    React.DOM.article({className: "format-quote "}, 
                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.div({className: "featimg"}, 
                                Link({href: "#"}, 
                                    Image({src: "images/51b9d629368a3.jpg", alt: ""})
                                ), 
                                React.DOM.div({className: "entry-category"}, 
                                    Link({href: "#category"}, "Category name")
                                ), 
                                React.DOM.div({className: "entry-feat-overlay"}, 
                                    Link({href: "#"}, " ")
                                )
                            )
                        ), 
                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.h2({className: "entry-title"}, Link({href: "#", title: "", rel: "bookmark"}, "This is post title")), 
                            React.DOM.div({className: "entry-date"}, 
                                Link({href: "#"}, "date")
                            ), 
                            React.DOM.div({className: "entry-excerpt"}, 
                                React.DOM.p(null, "Okay, let's go over the plan again. Why not? You cost three-hundred buck damage to my car, you son-of-a-bitch. And I'm gonnLink take it out of your ass. Hold him. Let him go, Biff, you're drunk.")
                            )
                        ), 
                        React.DOM.footer({className: "entry-footer"}, 
                            Link({className: "read-more", href: "#", title: "", rel: "bookmark"}, "Full story")
                        )
                    ), 

                    React.DOM.article({className: "format-link "}, 
                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.div({className: "featimg"}, 
                                Link({href: "#"}, 
                                    Image({src: "images/532042c82f00b.jpg", alt: ""})
                                ), 
                                React.DOM.div({className: "entry-category"}, 
                                    Link({href: "#category"}, "Category name")
                                ), 
                                React.DOM.div({className: "entry-feat-overlay"}, 
                                    Link({href: "#"}, " ")
                                )
                            )
                        ), 
                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.h2({className: "entry-title"}, Link({href: "#", title: "", rel: "bookmark"}, "This is post title")), 
                            React.DOM.div({className: "entry-date"}, 
                                Link({href: "#"}, "October 29, 1981")
                            ), 
                            React.DOM.div({className: "entry-excerpt"}, 
                                React.DOM.p(null, "Ahh. Wow, ah Red, you look great. Everything looks great. 1:24, I still got time. Oh my god. No, no not again, c'mon, c'mon. Hey. Libyans. You do? George. I just wannLink use the phone.")
                            )
                        ), 
                        React.DOM.footer({className: "entry-footer"}, 
                            Link({className: "read-more", href: "#", title: "", rel: "bookmark"}, "Full story")
                        )
                    )

                ), 

                React.DOM.div({className: "columns large-4"}, 

                    React.DOM.article({className: "format-audio "}, 
                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.div({className: "featimg"}, 
                                Link({href: "#"}, 
                                    Image({src: "images/5188cc252aead.jpg", alt: ""})
                                ), 
                                React.DOM.div({className: "entry-category"}, 
                                    Link({href: "#category"}, "Category name")
                                ), 
                                React.DOM.div({className: "entry-feat-overlay"}, 
                                    Link({href: "#"}, " ")
                                )
                            )
                        ), 
                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.h2({className: "entry-title"}, Link({href: "#", title: "", rel: "bookmark"}, "This is post title")), 
                            React.DOM.div({className: "entry-date"}, 
                                Link({href: "#"}, "January 29, 2014")
                            ), 
                            React.DOM.div({className: "entry-excerpt"}, 
                                React.DOM.p(null, "Sam, quit fiddling with that thing and come in here and eat your dinner. Hey George, heard you laid out Biff, nice going. Please, Marty, don't tell me, no man should know too much about their own destiny.")
                            )
                        ), 
                        React.DOM.footer({className: "entry-footer"}, 
                            Link({className: "read-more", href: "#", title: "", rel: "bookmark"}, "Full story")
                        )
                    ), 

                    React.DOM.article({className: "format-video "}, 
                        React.DOM.header({className: "entry-header"}, 
                            React.DOM.div({className: "featimg"}, 
                                Link({href: "#"}, 
                                    Image({src: "images/524557d9da7b2.jpg", alt: ""})
                                ), 
                                React.DOM.div({className: "entry-category"}, 
                                    Link({href: "#category"}, "Category name")
                                ), 
                                React.DOM.div({className: "entry-feat-overlay"}, 
                                    Link({href: "#"}, " ")
                                )
                            )
                        ), 
                        React.DOM.section({className: "entry-content"}, 
                            React.DOM.h2({className: "entry-title"}, Link({href: "#", title: "", rel: "bookmark"}, "This is post title")), 
                            React.DOM.div({className: "entry-date"}, 
                                Link({href: "#"}, "date")
                            ), 
                            React.DOM.div({className: "entry-excerpt"}, 
                                React.DOM.p(null, "Okay, let's go over the plan again. Why not? You cost three-hundred buck damage to my car, you son-of-a-bitch. And I'm gonnLink take it out of your ass. Hold him. Let him go, Biff, you're drunk.")
                            )
                        ), 
                        React.DOM.footer({className: "entry-footer"}, 
                            Link({className: "read-more", href: "#", title: "", rel: "bookmark"}, "Full story")
                        )
                    )

                )


            )
        )
    }
};

module.exports = {
    Class: MansonryView,
    Component: React.createClass(MansonryView)
};