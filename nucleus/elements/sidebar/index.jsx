/** @jsx React.DOM */
var React = require('react');
var Sidebar = {
    render: function(){
        return (
            <aside className="widget">
                <div className="widget_text">
                    <p className="widget-delimiter">&nbsp;</p>
                    <h5 className="widget-title">Real-time customizer</h5>
                    <div className="textwidget">
                        <p>Note: Settings will not be saved and some features will not work due to security reasons.</p>
                    </div>
                </div>
            </aside>
        )
    }
};

module.exports = {
    Class: Sidebar,
    Component: React.createClass(Sidebar)
};