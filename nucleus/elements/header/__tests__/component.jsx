jest.dontMock('../')
    .dontMock('jquery')
    .setMock('../../../mixins/customizable', function(){
        return {
            getCustomizationDropdown: jest.genMockFunction()
        }
    })
    .setMock('../../main-menu', {
        Component: jest.genMockFunction()
    })
    .setMock('../../logo', {
        Component: jest.genMockFunction()
    });
describe("main header", function(){
    React = require('react/addons');
    __ = function(txt){return txt;};
    HeaderSettings = jest.genMockFunction();
    Header = require('../').Component;
    TestUtils = React.addons.TestUtils;
    Search = jest.genMockFunction();
    Config = {
        homeUrl: 'whatever'
    };
    jQuery = require('jquery');
    it("should honor search show/hide setting", function(){
        var type, types = ['left', 'centered', 'default'];
        var value, values = [true, false];
        for(type in types){
            for(value in values){
                Search = jest.genMockFunction();
                var settings = {
                    type: types[type],
                    showSearch: values[value]
                };
                var header = TestUtils.renderIntoDocument(
                    Header({settings: settings, config: Config})
                );
                if(values[value]){
                    expect(Search).toBeCalled();
                } else {
                    expect(Search).not.toBeCalled();
                }
            }
        }
    });

    it("should honor social icons show/hide setting", function(){
        var type, types = ['left', 'centered', 'default'];
        var value, values = [true, false];
        for(type in types){
            for(value in values){
                SocialIcons = jest.genMockFunction();
                var settings = {
                    type: types[type],
                    showSocialIcons: values[value]
                };
                var header = TestUtils.renderIntoDocument(
                    Header({settings: settings, config: Config})
                );
                if(values[value]){
                    expect(SocialIcons).toBeCalled();
                } else {
                    expect(SocialIcons).not.toBeCalled();
                }
            }
        }
    });

    it("should should honor login menu show/hide setting", function(){
        var type, types = ['left', 'centered', 'default'];
        var value, values = [true, false];
        for(type in types){
            for(value in values){
                LoginMenu = jest.genMockFunction();
                var settings= {
                    type: types[type],
                    showLoginMenu: values[value]
                };
                var header = TestUtils.renderIntoDocument(
                    Header({settings: settings, config: Config})
                );
                if(values[value]){
                    expect(LoginMenu).toBeCalled();
                } else {
                    expect(LoginMenu).not.toBeCalled();
                }
            }
        }
    });

    describe("left", function(){
        it("should ignore vertical align setting", function(){
            var values = [true, false];
            for(value in values){
                var settings = {
                    type: 'left',
                    verticalAlign: values[value]
                };
                var header = TestUtils.renderIntoDocument(
                    Header({settings: settings, config: Config})
                );
                expect(header.getDOMNode().getAttribute('class')).not.toMatch('vertical-align');
            }
        });
    });

    describe("default and centered", function(){
        it("should honor vertical align setting", function(){
            var types = ['default', 'centered'];
            var values = [true, false];
            var type, value;
            for(type in types){
                for(value in values){
                    var settings = {
                        type: types[type],
                        verticalAlign: values[value]
                    };

                    var header = TestUtils.renderIntoDocument(
                        Header({settings: settings, config: Config})
                    );

                    var headerClasses = header.getDOMNode().getAttribute('class');
                    if(values[value]){
                        expect(headerClasses).toMatch('vertical-align');
                    } else {
                        expect(headerClasses).not.toMatch('vertical-align');
                    }
                }
            }
        });

        it("should distribute columns between menu, search and social icons + login-menu", function(){
            var type, types = ['default', 'centered'];
            var searchValue, searchValues = [true, false];
            var socialIconsValue, socialIconsValues = [true, false];
            var loginMenuValue, loginMenuValues = [true, false];
            var menuColumn, menuColumns = [3, 6, 9];
            for(type in types){
                for(searchValue in searchValues){
                    for(socialIconsValue in socialIconsValues){
                        for(loginMenuValue in loginMenuValues){
                            var settings = {
                                type: types[type],
                                showSearch: searchValues[searchValue],
                                showSocialIcons: socialIconsValues[socialIconsValue],
                                showLoginMenu: loginMenuValues[loginMenuValue]
                            };

                            var header = TestUtils.renderIntoDocument(
                                Header({settings: settings, config: Config})
                            );

                            var menuContainer = TestUtils.findRenderedDOMComponentWithClass(header, 'menu-container');
                            var menuContainerClasses = menuContainer.getDOMNode().getAttribute('class');
                            var computedMenuColumns = 9;
                            if(searchValues[searchValue]){
                                computedMenuColumns -= 3;
                            }
                            if(socialIconsValues[socialIconsValue] || loginMenuValues[loginMenuValue]){
                                computedMenuColumns -= 3;
                            }
                            for(menuColumn in menuColumns){
                                if(computedMenuColumns == menuColumns[menuColumn]){
                                    expect(menuContainerClasses).toMatch('large-' + menuColumns[menuColumn]);
                                } else {
                                    expect(menuContainerClasses).not.toMatch('large-' + menuColumns[menuColumn]);
                                }
                            }
                        }
                    }
                }
            }
        });
    });
});