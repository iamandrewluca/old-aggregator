/** @jsx React.DOM */
var CustomizationTutorial = React.createClass({
    getInitialState: function(){
        return {joyride: false};
    },

    next: function(event){
        if(event){
            event.stopPropagation();
        }
        this.$document.foundation('joyride', 'hide');
        this.$document.foundation('joyride', 'show');
    },

    step1hover: function(event){
        jQuery(event.currentTarget).off(event);
        this.next();
        this.$logo.contextmenu(this.step2contextmenu);
    },
    step2contextmenu: function(event){
        jQuery(event.currentTarget).off(event);
        this.$document.foundation('joyride', 'hide');
        setTimeout(function(){
            this.$document.foundation('joyride', 'show');
            jQuery('.joyride-tip-guide').on('click', this.next);
        }.bind(this), 1000);
    },

    componentDidMount: function(){
        this.$document = jQuery(document);
        this.$logo = jQuery('#main-logo');
        this.$document.foundation('joyride', 'start');
        setTimeout(function(){
            this.$logo.mouseenter(this.step1hover);
        }.bind(this), 1000);
    },
    render: function(){
        return <ol className="joyride-list" data-joyride>
            <li data-id="main-logo" data-options="tip_location: right; prev_button: false; next_button: false">
                <p>{__("When you hover over a customizable element, your cursor will change into a cog. Try hovering over your site's logo.")}</p>
            </li>
            <li data-id="main-logo" data-options="tip_location: right; prev_button: false; next_button: false">
                <p>{__("Right click a customizable element to customize it.")}</p>
            </li>
            <li data-id="customizable-elements-switcher" data-options="tip_location: top; next_button: true" data-button={__('Got it')}>
                <p>{__("You can use this dropdown button to quickly access other customizable elements")}</p>
            </li>
            <li data-id="logo-type-setting" data-options="tip_location: right; next_button: true" data-button={__('Uh-huh')}>
                <p>{__("You can play around with settings, you will see the changes instantly, but your users won't, so feel free to experiment, if something goes wrong, you can always cancel.")}</p>
            </li>
            <li data-id="save-cancel-customization" data-options="tip_location: right; next_button: true" data-button={__('Nice')}>
                <p>{__("And that's it! If you're happy with your changes, just hit 'Save'.")}</p>
            </li>
        </ol>
    }
});