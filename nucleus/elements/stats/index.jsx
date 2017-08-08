/** @jsx React.DOM */
var React = require('react');
var MonstroStats = {
    render: function(){
        return (
            <div className="monstro-stats">
                <ul>
                    <li>
                        <strong>720</strong>
                        <span>views</span>
                    </li>
                </ul>
            </div>
        )
    }
};

module.exports = {
    Class: MonstroStats,
    Component: React.createClass(MonstroStats)
};