/** @jsx React.DOM */
var LoremPixel = React.createClass({
    render: function(){
        src = "http://lorempixel.com/" + this.props.width + "/" + this.props.height + "/";
        return <img src={src}/>
    }
});