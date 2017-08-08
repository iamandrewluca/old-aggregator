/** @jsx React.DOM */
var React = require('react');
var __ = require('translate');
var Comments = {
    getInitialState: function(){
        return {
            tab: 'wp'
        }
    },

    setWp: function(){
        this.setState({
            tab: 'wp'
        })
    },

    setFb: function(){
        this.setState({
            tab: 'fb'
        })
    },

    getActiveClass: function(tab){
        if(this.state.tab == tab){
            return 'active';
        }
    },

    getTab: function (){
        if('wp' == this.state.tab){
            return (
                React.DOM.div({id: "content-wp", className: "comments-content"}, 
                    React.DOM.div({className: "row"}, 
                        React.DOM.div({id: "comments", className: "large-12 columns"}, 

                            React.DOM.ol({className: "monstro-comment-list monstro-comment-plain"}, 
                                React.DOM.li({className: "comment byuser comment-author-cosmodemo bypostauthor even thread-even depth-1", id: "li-comment-78"}, 
                                    React.DOM.article({id: "comment-78", className: "comment-body"}, 
                                        React.DOM.div({className: "monstro-comment-thumb"}, 
                                            React.DOM.img({alt: "", src: "http://0.gravatar.com/avatar/6f06ecbcb4e2d6002cc9ffa9471ac3ec?s=70&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D70&r=G", className: "avatar avatar-70 photo"})
                                        ), 
                                        React.DOM.div({className: "monstro-comment-quote"}, 
                                            React.DOM.header({className: "monstro-comment-textinfo st"}, 
                                                React.DOM.span({className: "user"}, "by ", React.DOM.a({href: "http://cosmothemes.com", rel: "external nofollow", className: "url"}, "CosmoThemes")), 
                                                React.DOM.span({className: "time"}, "on May 22, 2014  11:16 am"), 
                                                React.DOM.span({className: "edit"}, 
                                                    React.DOM.a({className: "comment-edit-link", href: "#"}, "Edit")
                                                ), 
                                                React.DOM.span({className: "gray reply fr"}, 
                                                    React.DOM.a({className: "comment-reply-link", href: "#respond"}, "Reply")
                                                )
                                            )
                                        )
                                    )
                                )
                            ), 

                            React.DOM.div({id: "respond", className: "comment-respond"}, 
                                React.DOM.h3({id: "reply-title", className: "comment-reply-title"}, 
                                    React.DOM.span(null, "Leave a reply"), 
                                    React.DOM.small(null, 
                                        React.DOM.a({rel: "nofollow", id: "cancel-comment-reply-link", href: "#respond"}, "Cancel reply")
                                    )
                                ), 
                                React.DOM.form({action: "#", method: "post", id: "commentform", className: "comment-form"}, 
                                    React.DOM.div({className: "large-12 columns"}, 
                                        React.DOM.p({className: "logged-in-as"}, "Logged in as ", React.DOM.a({href: "#"}, "cosmodemo"), ". ", React.DOM.a({href: "#", title: "Log out of this account"}, "Log out?"))
                                    ), 
                                    React.DOM.div({className: "large-6 columns"}, 
                                        React.DOM.p({className: "comment-form-comment textarea"}, 
                                            React.DOM.textarea({id: "comment", name: "comment", cols: "45", rows: "8"})
                                        )
                                    ), 
                                    React.DOM.p({className: "form-submit"}, 
                                        React.DOM.input({name: "submit", type: "submit", id: "submit", value: "Add comment"})
                                    )
                                )
                            )

                        )
                    )
                )
            )
        } else if('fb' == this.state.tab){
            return (
                React.DOM.div({id: "content-fb", className: "fb-comments-tab comments-content"}, 
                    React.DOM.div({id: "comments"}, 
                        React.DOM.div({className: "fb-comments fb_iframe_widget fb_iframe_widget_fluid", 'data-numposts': "5", 'data-colorscheme': "light", 'data-width': "100%", 'fb-xfbml-state': "rendered"}, 
                            React.DOM.span(null, 
                                React.DOM.iframe({id: "f212c7122c", name: "f3c2a3ab1c", scrolling: "no", title: "Facebook Social Plugin", className: "fb_ltr", src: "https://www.facebook.com/plugins/comments.php?api_key=228746690494932&channel_url=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FbLBBWlYJp_w.js%3Fversion%3D41%23cb%3Df38260ef8c%26domain%3Ddemo.cosmothemes.com%26origin%3Dhttp%253A%252F%252Fdemo.cosmothemes.com%252Ff6f6dedc8%26relation%3Dparent.parent&colorscheme=light&href=http%3A%2F%2Fdemo.cosmothemes.com%2Fffw%2Fgallery%2Fjust-a-gallery-sample-with-lots-of-images%2F&locale=en_US&numposts=5&sdk=joey&skin=light&width=100%25"})
                            )
                        )
                    )
                )
            )
        }
    },

    render: function (){
        return (
            React.DOM.div({className: "monstro-comments"}, 
                React.DOM.ul({className: "comments-tabs"}, 
                    React.DOM.li({id: "tab-wp", className: this.getActiveClass('wp'), onClick: this.setWp}, 
                        React.DOM.a({href: "javascript:void(0)", className: "tab active"}, 
                            __('WordPress comments'), "(1)"
                        )
                    ), 
                    React.DOM.li({id: "tab-fb", className: this.getActiveClass('fb'), onClick: this.setFb}, 
                        React.DOM.a({href: "javascript:void(0)", className: "tab"}, 
                            __('Facebook comments')
                        )
                    )
                ), 

                React.DOM.div({className: "comments-wrapper"}, 
                    this.getTab()
                )
            )
        )
    }
};

module.exports = {
    Class: Comments,
    Component: React.createClass(Comments)
};