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
            <div className="entry-share">
                <div className="socialicons">
                    <ul className="monstro-social">
                        <li>
                            <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodedLink} className="fb" rel="nofollow"
                                target="_blank" onClick={this.openSharer}>
                                <i className="icon-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href={"https://plus.google.com/share?url=" + encodedLink} className="gplus" rel="nofollow"
                                target="_blank" onClick={this.openSharer} >
                                <i className="icon-gplus"></i>
                            </a>
                        </li>
                        <li>
                            <a href={"https://twitter.com/intent/tweet?url=" + encodedLink} className="twitter" rel="nofollow"
                                target="_blank" onClick={this.openSharer} >
                                <i className="icon-twitter"></i>
                            </a>
                        </li>
                    {
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
                        }

                    </ul>
                </div>
            </div>
        )
    }
};

module.exports = {
    Class: SocialShare,
    Component: React.createClass(SocialShare)
};