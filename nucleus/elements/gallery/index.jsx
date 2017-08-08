/** @jsx React.DOM */
var React = require('react');
var Customizable = require('../../mixins/customizable');
var __ = require('../../translate');
var imagesLoaded = require('imagesloaded/imagesloaded');
var Gallery ={
    mixins: [Customizable('gallery', __('Gallery'))],
    $el: null,
    getInitialState: function(){
        return {
            active: 0,
            width: 999999,
            viewportWidth: 1920,
            pos: 0
        }
    },
    prev: function(){
        this.setState({
            active: this.state.active - 1
        });
    },
    next: function(){
        this.setState({
            active: this.state.active + 1
        });
    },
    getPrevButton: function(){
        if(this.state.active > 0){
            return (
                <a href="javascript:void(0);" className="gallery-prev" onClick={this.prev}>prev</a>
            )
        }
    },
    getNextButton: function(){
        if(this.state.active < (this.props.slides.length - 1)){
            return (
                <a href="javascript:void(0);" className="gallery-next" onClick={this.next}>next</a>
            )
        }
    },
    updateWidth: function(){
        var width = 99999;
        this.$el.find('ul li').each(function(index, slide){
            width += jQuery(slide).width()
        });
        if(this.state.width != width){
            this.setState({
                width: width
            });
        }
    },
    componentDidMount: function(){
        imagesLoaded(this.getDOMNode(), this.updateWidth);
        this.$el = jQuery(this.getDOMNode());
        this.setState({
            viewportWidth: this.$el.width()
        });
    },
    componentDidUpdate: function(prevProps, prevState){
        this.$el.imagesLoaded(this.updateWidth);
        var newPos;
        if(0 == this.state.active){
            newPos = 0;
        } else {
            var target = this.$el.find('ul li').eq(this.state.active);
            var $target = jQuery(target);
            var center = $target.position().left + ($target.width() / 2);
            newPos = center - (this.state.viewportWidth / 2);
        }
        if(this.state.pos != newPos){
            this.setState({
                pos: newPos
            });
        }

        if((this.state.active == (this.props.slides.length - 1)) && this.props.onSlidesEnded){
            this.props.onSlidesEnded();
        } else if((this.state.active == (this.props.slides.length - 2)) && this.props.onSlidesWillEnd){
            this.props.onSlidesWillEnd();
        }
    },
    render: function(){
        var wrapperStyle = {
            height: this.props.height
        };
        var galleryStyle = {
            width: this.state.width,
            marginLeft: -this.state.pos
        };
        var slides = this.props.slides.map(function(slide, index){
            var activeClass = (this.state.active == index ? ' active' : '');
            var setActive = function(){
                this.setState({
                    active: index
                });
            }.bind(this);
            return (
                <li className={"monstro-gallery-item" + activeClass} onClick={setActive}>
                    <a href="javascript:void(0);">
                        <img src={slide.image}/>
                    </a>
                </li>
            )
        }.bind(this));
        return (
            <div className="monstro-gallery-wrapper" style={wrapperStyle}>
                {this.getCustomizationDropdown('bottom-middle')}
                <ul className="monstro-gallery" style={galleryStyle}>
                    {slides}
                </ul>
                <div className="gallery-controls">
                    {this.getPrevButton()}
                    {this.getNextButton()}
                </div>
            </div>
        )
    }
};

module.exports = {
    Class: Gallery,
    Component: React.createClass(Gallery)
};