jest.dontMock('../')
    .dontMock('../settings')
    .dontMock('../../button-radio/')
    .dontMock('../../switch/')
    .dontMock('fluxxor')
    .dontMock('jquery');
describe("header settings", function(){
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    jQuery = require('jquery');
    ButtonRadio = require('../../button-radio').Component;
    Switch = require('../../switch').Component;
    HeaderSettings = require('../settings');
    __ = function(txt){return txt;};

    beforeEach(function(){
        FakeHeader = {
            props: {
                settings:{
                    type: 'default'
                }
            }
        };
    });

    describe("vertical align setting", function(){
        it("should exist", function(){
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-verticalAlign');
        });

        it("should display the correct setting", function(){
            FakeHeader.props.settings.verticalAlign = true;
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var verticalAlignOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-verticalAlign')
            var verticalAlignSwitch = TestUtils.findRenderedComponentWithType(verticalAlignOption, Switch);
            expect(verticalAlignSwitch.getValue()).toBe(true);
            FakeHeader.props.settings.verticalAlign = false;
            settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            verticalAlignOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-verticalAlign');
            verticalAlignSwitch = TestUtils.findRenderedComponentWithType(verticalAlignOption, Switch);
            expect(verticalAlignSwitch.getValue()).toBe(false);
        });

        it("should be changeable when header is not left", function(){
            var type, types = ['default', 'centered'];
            var value, values = [true, false];
            for(type in types){
                for(value in values){
                    FakeHeader.props.settings.type = types[type];
                    FakeHeader.props.settings.verticalAlign = values[value];
                    mRNA = {
                        updateSettings: jest.genMockFunction().mockImplementation(function(callback){
                            var settingsMock = {header:{}};
                            var result = callback(settingsMock);
                            expect(result.header.verticalAlign).toBe(!values[value]);
                        })
                    };
                    var settings = TestUtils.renderIntoDocument(
                        HeaderSettings({target: FakeHeader})
                    );
                    var verticalAlignOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-verticalAlign');
                    var verticalAlignSwitch = TestUtils.findRenderedComponentWithType(verticalAlignOption, Switch);
                    var verticalAlignLabel = TestUtils.findRenderedDOMComponentWithTag(verticalAlignSwitch, 'label');
                    TestUtils.Simulate.click(verticalAlignLabel);
                    expect(mRNA.updateSettings).toBeCalled();
                }
            }
        });

        describe("disabled", function(){
            it("should not be changeable when header is left", function(){
                var value, values = [true, false];
                FakeHeader.props.settings.type = "left";
                for(value in values){
                    FakeHeader.props.settings.verticalAlign = values[value];
                    mRNA = {
                        updateSettings: jest.genMockFunction()
                    };
                    var settings = TestUtils.renderIntoDocument(
                        HeaderSettings({target: FakeHeader})
                    );
                    var verticalAlignOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-verticalAlign');
                    var verticalAlignSwitch = TestUtils.findRenderedComponentWithType(verticalAlignOption, Switch);
                    var verticalAlignLabel = TestUtils.findRenderedDOMComponentWithTag(verticalAlignSwitch, 'label');
                    TestUtils.Simulate.click(verticalAlignLabel);
                    expect(mRNA.updateSettings).not.toBeCalled();
                }
            });

            it("should have the .disabled class", function(){
                FakeHeader.props.settings.type = "left";
                var settings = TestUtils.renderIntoDocument(
                    HeaderSettings({target: FakeHeader})
                );
                var verticalAlignOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-verticalAlign');
                expect(verticalAlignOption.getDOMNode().getAttribute('class')).toMatch('disabled');
            });
        });
    });
    describe('show/hide social icons setting', function(){
        it("should exist", function(){
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-socialIcons');
        });

        it("should display the correct setting", function(){
            FakeHeader.props.settings.showSocialIcons = true;
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var socialIconsOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-socialIcons');
            var socialIconsSwitch = TestUtils.findRenderedComponentWithType(socialIconsOption, Switch);
            expect(socialIconsSwitch.getValue()).toBe(true);
            FakeHeader.props.settings.showSocialIcons = false;
            settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            socialIconsOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-socialIcons');
            socialIconsSwitch = TestUtils.findRenderedComponentWithType(socialIconsOption, Switch);
            expect(socialIconsSwitch.getValue()).toBe(false);
        });

        it("should be changeable", function(){
            FakeHeader.props.settings.type = 'default';
            FakeHeader.props.settings.showSocialIcons = false;
            mRNA = {
                updateSettings: jest.genMockFunction().mockImplementation(function(callback){
                    var settingsMock = {header:{}};
                    var result = callback(settingsMock);
                    expect(result.header.showSocialIcons).toBe(true);
                })
            };
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var socialIconsOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-socialIcons');
            var socialIconsSwitch = TestUtils.findRenderedComponentWithType(socialIconsOption, Switch);
            var socialIconsLabel = TestUtils.findRenderedDOMComponentWithTag(socialIconsSwitch, 'label');
            TestUtils.Simulate.click(socialIconsLabel);
            expect(mRNA.updateSettings).toBeCalled();
        });
    });
    describe('show/hide search setting', function(){
        it("should exist", function(){
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-search');
        });

        it("should display the correct setting", function(){
            FakeHeader.props.settings.showSearch = true;
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var searchOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-search');
            var searchSwitch = TestUtils.findRenderedComponentWithType(searchOption, Switch);
            expect(searchSwitch.getValue()).toBe(true);
            FakeHeader.props.settings.showSearch = false;
            settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            searchOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-search');
            searchSwitch = TestUtils.findRenderedComponentWithType(searchOption, Switch);
            expect(searchSwitch.getValue()).toBe(false);
        });

        it("should be changeable", function(){
            FakeHeader.props.settings.type = 'default';
            FakeHeader.props.settings.showSearch = false;
            mRNA = {
                updateSettings: jest.genMockFunction().mockImplementation(function(callback){
                    var settingsMock = {header:{}};
                    var result = callback(settingsMock);
                    expect(result.header.showSearch).toBe(true);
                })
            };
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var searchOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-search');
            var searchSwitch = TestUtils.findRenderedComponentWithType(searchOption, Switch);
            var searchLabel = TestUtils.findRenderedDOMComponentWithTag(searchSwitch, 'label');
            TestUtils.Simulate.click(searchLabel);
            expect(mRNA.updateSettings).toBeCalled();
        });
    });
    describe('show/hide login menu setting', function(){
        it("should exist", function(){
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-loginMenu');
        });

        it("should display the correct setting", function(){
            FakeHeader.props.settings.showLoginMenu = true;
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var loginMenuOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-loginMenu');
            var loginMenuSwitch = TestUtils.findRenderedComponentWithType(loginMenuOption, Switch);
            expect(loginMenuSwitch.getValue()).toBe(true);
            FakeHeader.props.settings.showLoginMenu = false;
            settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            loginMenuOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-loginMenu');
            loginMenuSwitch = TestUtils.findRenderedComponentWithType(loginMenuOption, Switch);
            expect(loginMenuSwitch.getValue()).toBe(false);
        });

        it("should be changeable", function(){
            FakeHeader.props.settings.type = 'default';
            FakeHeader.props.settings.showLoginMenu = false;
            mRNA = {
                updateSettings: jest.genMockFunction().mockImplementation(function(callback){
                    var settingsMock = {header:{}};
                    var result = callback(settingsMock);
                    expect(result.header.showLoginMenu).toBe(true);
                })
            };
            var settings = TestUtils.renderIntoDocument(
                HeaderSettings({target: FakeHeader})
            );
            var loginMenuOption = TestUtils.findRenderedDOMComponentWithClass(settings, 'settings-header-loginMenu');
            var loginMenuSwitch = TestUtils.findRenderedComponentWithType(loginMenuOption, Switch);
            var loginMenuLabel = TestUtils.findRenderedDOMComponentWithTag(loginMenuSwitch, 'label');
            TestUtils.Simulate.click(loginMenuLabel);
            expect(mRNA.updateSettings).toBeCalled();
        });
    });
});