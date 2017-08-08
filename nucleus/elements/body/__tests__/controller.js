jest.dontMock('jquery')
    .dontMock('../controller');
describe('body controller', function(){
    var resourceMock = {
        contentLayout: 'fgsfds'
    };
    var settingsMock = {
        header:{
            menu:{}
        },
        contentLayouts:{
            fgsfds:{}
        }
    };

    beforeEach(function(){
        jQuery = require('jquery');
        BodyCtrl = require('../controller');
        BodyCtrl.onResourceChanged(resourceMock);
        jest.runAllTimers();
    });

    it("should set the width classes", function(){
        var widths = ['narrow', 'large', 'full'];
        for(index in widths){
            var settings = jQuery.extend({}, settingsMock);
            settings.contentLayouts.fgsfds.width = widths[index];
            BodyCtrl.onSettingsChanged(settings);
            expect(jQuery('body').hasClass(widths[index] + '-view')).toBe(true);
        }
    });

    it("should remove the width classes", function(){
        var widths = ['narrow', 'large', 'full'];
        for(index in widths){
            var settings = jQuery.extend({}, settingsMock);
            settings.contentLayouts.fgsfds.width = widths[index];
            BodyCtrl.onSettingsChanged(settings);
            settings.contentLayouts.fgsfds.width = 0 == index ? 'large': 'narrow';
            BodyCtrl.onSettingsChanged(settings);
            expect(jQuery('body').hasClass(widths[index] + '-view')).not.toBe(true);
        }
    });

    it("should set the header classes", function(){
        var settings = jQuery.extend({}, settingsMock);
        settings.header.type = 'left';
        BodyCtrl.onSettingsChanged(settings);
        expect(jQuery('body').hasClass('header-left')).toBe(true);
        settings.header.type = 'centered';
        BodyCtrl.onSettingsChanged(settings);
        expect(jQuery('body').hasClass('header-centered')).toBe(true);
        settings.header.menu.enableHamburgerMenu = true;
        BodyCtrl.onSettingsChanged(settings);
        expect(jQuery('body').hasClass('header-hamburger')).toBe(true);
        settings.header.type = 'default';
        BodyCtrl.onSettingsChanged(settings);
        expect(jQuery('body').hasClass('header-left')).not.toBe(true);
        expect(jQuery('body').hasClass('header-centered')).not.toBe(true);
        expect(jQuery('body').hasClass('header-hamburger')).not.toBe(true);
    });
});