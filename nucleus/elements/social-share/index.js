/** @jsx React.DOM */
var React = require('react');
var Link = require('../link').Component;
var __ = require('../../translate');
var SocialShare = {
    openSharer: function(event){
        event.preventDefault();
        event.stopPropagation();
        var href = jQuery(event.currentTarget).attr('href');
        window.open(href, '_blank', 'width=800px, height=600px', true);
    },

    render: function(){
        var encodedLink = encodeURIComponent(this.props.link);
        return (
            React.DOM.div({className: "entry-share"}, 
                React.DOM.div({className: "socialicons"}, 
                    React.DOM.ul({className: "monstro-social"}, 
                        React.DOM.li(null, 
                            React.DOM.a({href: "https://www.facebook.com/sharer/sharer.php?u=" + encodedLink, className: "fb", rel: "nofollow", 
                                target: "_blank", onClick: this.openSharer}, 
                                React.DOM.i({className: "icon-facebook"})
                            )
                        ), 
                        React.DOM.li(null, 
                            React.DOM.a({href: "https://plus.google.com/share?url=" + encodedLink, className: "gplus", rel: "nofollow", 
                                target: "_blank", onClick: this.openSharer}, 
                                React.DOM.i({className: "icon-gplus"})
                            )
                        ), 
                        React.DOM.li(null, 
                            React.DOM.a({href: "https://twitter.com/intent/tweet?url=" + encodedLink, className: "twitter", rel: "nofollow", 
                                target: "_blank", onClick: this.openSharer}, 
                                React.DOM.i({className: "icon-twitter"})
                            )
                        )
                    
                        /*
                         <li>
                         <Link href="#" className="pinterest" rel="nofollow" target="_blank">
                         <i className="icon-pinterest"></i>
                         </Link>
                         </li>
                         <li>
                         <Link href="mailto:?to=&amp;body=" rel="nofollow" className="email">
                         <i className="icon-email"></i></Link>
                         </li>
                         */
                        

                    )
                )
            )
        )
    }
};

module.exports = {
    Class: SocialShare,
    Component: React.createClass(SocialShare)
};