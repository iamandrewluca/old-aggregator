/** @jsx React.DOM */
var React = require('react');
var Blurable = require('../../mixins/blurable');
var DropdownButton = {
    mixins: [Blurable],
    getInitialState: function(){ return { open: false } },
    open: function(){
        this.setState({ open: true })
    },
    close: function(){
        this.setState({ open: false })
    },
    toggle: function(){
        this.setState({ open: !this.state.open })
    },

    componentDidUpdate: function(){
        if(this.state.open && this.props.onOpen){
            this.props.onOpen();
        }
    },

    select: function(value){
        return function(event){
            event.stopPropagation();
            this.close();
            this.props.onSelected(value);
        }.bind(this);
    },

    getDropdown: function(){
        if(this.state.open){
            var style = {
                position: "absolute",
                zIndex: 1000,
                top: "100%",
                left: 0
            };
            var items = this.props.items.map(function(item){
                return <li onClick={this.select(item.value)}>
                    <a href="javascript:void(0);" className={"option-" + item.value}>{item.label}</a>
                </li>
            }.bind(this));
            return <ul className="f-dropdown open" style={style}>
                {items}
            </ul>
        }
    },

    componentWillMount: function(){
        this.onBluredCallback = this.close;
    },

    render: function(){
        return <a className={"button dropdown " + this.props.className} onClick={this.toggle} id={this.props.id}>
            {this.props.children}
            {this.getDropdown()}
        </a>
    }
};

module.exports = {
    Class: DropdownButton,
    Component: React.createClass(DropdownButton)
};