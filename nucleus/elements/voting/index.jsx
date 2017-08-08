/** @jsx React.DOM */
var React = require('react');
var Voting = {
    render: function(){
        return (
            <div className="monstro-vote">
                <div className="monstro-vote-sticky">
                    <div className="monstro-float-vote">
                        <ul className="heart">
                            <li className="count"><span>4</span></li>
                            <li>
                                <a href="#" className="good">
                                    <span className="icon"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

module.exports = {
    Class: Voting,
    Component: React.createClass(Voting)
};