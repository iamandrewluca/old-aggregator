module.exports =  {
    maybeBlured: function(event){
        var $target = jQuery(event.target);
        if($target.is(this.getDOMNode())){
        } else if($target.parents().filter(this.getDOMNode()).length){
        } else if(this.onBluredCallback){
            this.onBluredCallback();
        }
    },
    componentDidMount: function(){
        jQuery('body').click(this.maybeBlured);
    },

    componentWillUnmount: function(){
        jQuery('body').off('click', this.maybeBlured);
    }
};