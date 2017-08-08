/** @jsx React.DOM */
var CopyrightSettings = React.createClass({
    updateText: function(event){
        mRNA.updateSettings(function(settings){
            settings.footer.copyright = event.target.value;
            return settings;
        });
    },
    render: function(){
        return (
            <div>
                <label>
                    {__('Header type')}
                    <input type="text" value={this.props.target.props.text} onChange={this.updateText}/>
                </label>
            </div>
        )
    }
});