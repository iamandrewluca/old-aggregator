/** @jsx React.DOM */
var React = require('react');
var TeamMembers = {
    render: function(){
        return (
            <article className="post-1122 type-page">

                <header className="entry-header">

                    <div className="team-header">
                        <span className="monstro-page-name">about</span>
                        <h2 className="monstro-subpage-name">team</h2>
                        <div className="team-description">
                            <p>
                                Vivamus sagittis lacus vel augue laoreet
                                rutrum faucibus dolor auctor. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Integera
                                posuere erat a ante venenatis dapibus posuere velit
                                aliquet.
                            </p>
                        </div>
                    </div>

                </header>

                <section className="entry-content">

                    <div id="monstro-team">
                        <ul className="row">
                            <li className="columns large-4">
                                <div className="monstro-team-items">
                                    <a href="#">
                                        <img className="monstro-team-img" src="http://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png" />
                                        <span className="team-read-more">read more </span>
                                    </a>
                                    <span className="team-name"> John Doe </span>
                                    <span className="monstro-team-title"> Co-Founder </span>
                                </div>
                            </li>
                            <li className="columns large-4">
                                <div className="monstro-team-items">
                                    <a href="#">
                                        <img className="monstro-team-img" src="http://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png" />
                                        <span className="team-read-more">read more </span>
                                    </a>
                                    <span className="team-name"> John Doe </span>
                                    <span className="monstro-team-title"> Co-Founder </span>
                                </div>
                            </li>
                            <li className="columns large-4">
                                <div className="monstro-team-items">
                                    <a href="#">
                                        <img className="monstro-team-img" src="https://serpcloud.com/serp/upload/1373741454avatar4.jpg" />
                                        <span className="team-read-more">read more </span>
                                    </a>
                                    <span className="team-name"> John Doe </span>
                                    <span className="monstro-team-title"> Creative Directors </span>
                                </div>
                            </li>
                            <li className="columns large-4">
                                <div className="monstro-team-items">
                                    <a href="#">
                                        <img className="monstro-team-img" src="http://pickaface.net/includes/themes/clean/img/slide4.png" />
                                        <span className="team-read-more">read more </span>
                                    </a>
                                    <span className="team-name"> John Doe </span>
                                    <span className="monstro-team-title"> Co-Founder </span>
                                </div>
                            </li>
                            <li className="columns large-4">
                                <div className="monstro-team-items">
                                    <a href="#">
                                        <img className="monstro-team-img" src="http://static.giantbomb.com/uploads/scale_medium/0/6948/1757649-me_avatar_big.png" />
                                        <span className="team-read-more">read more </span>
                                    </a>
                                    <span className="team-name"> John Doe </span>
                                    <span className="monstro-team-title"> Co-Founder </span>
                                </div>
                            </li>
                            <li className="columns  large-4">
                                <div className="monstro-team-items">
                                    <a href="#">
                                        <img className="monstro-team-img" src="https://serpcloud.com/serp/upload/1373741454avatar4.jpg" />
                                        <span className="team-read-more">read more </span>
                                    </a>
                                    <span className="team-name"> John Doe </span>
                                    <span className="monstro-team-title"> Creative Directors </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

            </article>
        )
    }
};

module.exports = {
    Class: TeamMembers,
    Component: React.createClass(TeamMembers)
};