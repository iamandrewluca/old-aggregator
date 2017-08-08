jest.dontMock('../../../nucleus/bower_components/jquery/dist/jquery.js')
    .dontMock('../controller');
describe('#monstro-wrapper controller', function(){
    var resourceMock = {
        contentLayout: 'fgsfds'
    };
    var settingsMock = {
        header:{},
        contentLayouts:{
            fgsfds:{}
        }
    };
    beforeEach(function(){
        document.body.innerHTML = '<div id="monstro-wrapper"></div>';
        jQuery = require('../../../nucleus/bower_components/jquery/dist/jquery.js');
        WrapperCtrl = require('../controller');
        WrapperCtrl.onResourceChanged(resourceMock);
        jest.runAllTimers();
    });
    it("should set the alignment classes", function(){
        var positions = ['left', 'center', 'right'];
        for(index in positions){
            var settings = jQuery.extend({}, settingsMock);
            settings.contentLayouts.fgsfds.align = positions[index];
            WrapperCtrl.onSettingsChanged(settings);
            expect(jQuery('#monstro-wrapper').hasClass('align-' + positions[index])).toBe(true);
        }
    });
    it("should remove the alignment classes", function(){
        var positions = ['left', 'center', 'right'];
        for(index in positions){
            var settings = jQuery.extend({}, settingsMock);
            settings.contentLayouts.fgsfds.align = positions[index];
            WrapperCtrl.onSettingsChanged(settings);
            settings.contentLayouts.fgsfds.align = 0 == index ? 'center' : 'left';
            WrapperCtrl.onSettingsChanged(settings);
            expect(jQuery('#monstro-wrapper').hasClass('align-' + positions[index])).not.toBe(true);
        }
    });
    it("should not set align classes when header is left", function(){
        var positions = ['left', 'center', 'right'];
        for(index in positions){
            var settings = jQuery.extend({}, settingsMock);
            settings.header.type = 'left';
            settings.contentLayouts.fgsfds.align = positions[index];
            WrapperCtrl.onSettingsChanged(settings);
            expect(jQuery('#monstro-wrapper').hasClass('align-' + positions[index])).not.toBe(true);
        }
    });
});