/** @jsx React.DOM */
var React = require('react');
var TeamMemberFull = {
    render: function(){
        return (

            <article className="post-1122 type-page">
                <div className="team-arrows">
                    <a href="#"> <span className="member-arrow-top"></span> </a>
                    <a href="#"><span className="member-arrow-left"></span> </a>
                    <a href="#"><span className="member-arrow-right"></span> </a>
                </div>
                <div className="row">
                    <div className="columns large-6">

                        <header className="team-header">
                            <div className="team-full-header">
                                <h2 className="team-member-name">Rose Faithes </h2>
                                <span className="team-member-position">Creative Director</span>
                            </div>
                        </header>

                        <section className="entry-content">
                            <div className="team-full-description">
                                <p>VFusce dapibus, tellus ac cursus
                                commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                sit amet risus. Integer posuere erat a ante venenatis dapibus
                                posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut
                                id elit. Vestibulum id ligula porta felis euismod semper.
                                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                                ut fermentum massa justo sit amet risus. Vestibulum id ligula porta
                                felis euismod semper.</p>
                                <p>
                                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero,
                                a pharetra augue. Donec id elit non mi porta gravida at eget metus. Fusce
                                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit </p>
                            </div>
                            <div className="team-socialicons">
                                <ul className="member-social">
                                    <li><a href="#" className="fb"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#" className="twitter"><i className="icon-twitter"></i></a></li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className="columns large-6">
                        <section className="entry-section">
                            <img className="member-image" src="http://www.wcaltd.com/wp-content/uploads/2013/04/C_Person_051113_0368.jpg" alt="image"/>
                        </section>
                    </div>
                </div>

            </article>
        )
    }
};

module.exports = {
    Class: TeamMemberFull,
    Component: React.createClass(TeamMemberFull)
};