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
                <div id="content-wp" className="comments-content">
                    <div className="row">
                        <div id="comments" className="large-12 columns">

                            <ol className="monstro-comment-list monstro-comment-plain">
                                <li className="comment byuser comment-author-cosmodemo bypostauthor even thread-even depth-1" id="li-comment-78">
                                    <article id="comment-78" className="comment-body">
                                        <div className="monstro-comment-thumb">
                                            <img alt="" src="http://0.gravatar.com/avatar/6f06ecbcb4e2d6002cc9ffa9471ac3ec?s=70&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D70&amp;r=G" className="avatar avatar-70 photo" />
                                        </div>
                                        <div className="monstro-comment-quote">
                                            <header className="monstro-comment-textinfo st">
                                                <span className="user">by <a href="http://cosmothemes.com" rel="external nofollow" className="url">CosmoThemes</a></span>
                                                <span className="time">on May 22, 2014&nbsp;&nbsp;11:16 am</span>
                                                <span className="edit">
                                                    <a className="comment-edit-link" href="#">Edit</a>
                                                </span>
                                                <span className="gray reply fr">
                                                    <a className="comment-reply-link" href="#respond">Reply</a>
                                                </span>
                                            </header>
                                        </div>
                                    </article>
                                </li>
                            </ol>

                            <div id="respond" className="comment-respond">
                                <h3 id="reply-title" className="comment-reply-title">
                                    <span>Leave a reply</span>
                                    <small>
                                        <a rel="nofollow" id="cancel-comment-reply-link" href="#respond">Cancel reply</a>
                                    </small>
                                </h3>
                                <form action="#" method="post" id="commentform" className="comment-form">
                                    <div className="large-12 columns">
                                        <p className="logged-in-as">Logged in as <a href="#">cosmodemo</a>. <a href="#" title="Log out of this account">Log out?</a></p>
                                    </div>
                                    <div className="large-6 columns">
                                        <p className="comment-form-comment textarea">
                                            <textarea id="comment" name="comment" cols="45" rows="8"></textarea>
                                        </p>
                                    </div>
                                    <p className="form-submit">
                                        <input name="submit" type="submit" id="submit" value="Add comment" />
                                    </p>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else if('fb' == this.state.tab){
            return (
                <div id="content-fb" className="fb-comments-tab comments-content">
                    <div id="comments">
                        <div className="fb-comments fb_iframe_widget fb_iframe_widget_fluid" data-numposts="5" data-colorscheme="light" data-width="100%" fb-xfbml-state="rendered">
                            <span>
                                <iframe id="f212c7122c" name="f3c2a3ab1c" scrolling="no" title="Facebook Social Plugin" className="fb_ltr" src="https://www.facebook.com/plugins/comments.php?api_key=228746690494932&amp;channel_url=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter%2FbLBBWlYJp_w.js%3Fversion%3D41%23cb%3Df38260ef8c%26domain%3Ddemo.cosmothemes.com%26origin%3Dhttp%253A%252F%252Fdemo.cosmothemes.com%252Ff6f6dedc8%26relation%3Dparent.parent&amp;colorscheme=light&amp;href=http%3A%2F%2Fdemo.cosmothemes.com%2Fffw%2Fgallery%2Fjust-a-gallery-sample-with-lots-of-images%2F&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;skin=light&amp;width=100%25"></iframe>
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    },

    render: function (){
        return (
            <div className="monstro-comments">
                <ul className="comments-tabs">
                    <li id="tab-wp" className={this.getActiveClass('wp')} onClick={this.setWp}>
                        <a href="javascript:void(0)" className="tab active">
                            {__('WordPress comments')}(1)
                        </a>
                    </li>
                    <li id="tab-fb" className={this.getActiveClass('fb')} onClick={this.setFb}>
                        <a href="javascript:void(0)" className="tab">
                            {__('Facebook comments')}
                        </a>
                    </li>
                </ul>

                <div className="comments-wrapper">
                    {this.getTab()}
                </div>
            </div>
        )
    }
};

module.exports = {
    Class: Comments,
    Component: React.createClass(Comments)
};