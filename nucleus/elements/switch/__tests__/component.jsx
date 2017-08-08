/** @jsx React.DOM */
jest.dontMock("../");
jest.dontMock("jquery");
describe("switch", function(){
    React = require('react/addons');
    Switch = require("../").Component;
    jQuery = require("jquery");
    TestUtils = React.addons.TestUtils;

    it("should set the checkbox correctly", function(){
        var _switch = TestUtils.renderIntoDocument(
            <Switch checked={true}/>
        );
        expect(jQuery(_switch.getDOMNode()).find('input').is(':checked')).toBe(true);
        _switch = TestUtils.renderIntoDocument(
            <Switch checked={false}/>
        );
        expect(jQuery(_switch.getDOMNode()).find('input').is(':checked')).toBe(false);
    });

    it("should call back with the new value", function(){
        var callback = jest.genMockFunction();
        var _switch = TestUtils.renderIntoDocument(
            <Switch checked={true} onChange={callback}/>
        );
        var label = TestUtils.findRenderedDOMComponentWithTag(_switch, 'label');
        TestUtils.Simulate.click(label);
        expect(callback).toBeCalledWith(false);

        callback = jest.genMockFunction();
        _switch = TestUtils.renderIntoDocument(
            <Switch checked={false} onChange={callback}/>
        );
        label = TestUtils.findRenderedDOMComponentWithTag(_switch, 'label');
        TestUtils.Simulate.click(label);
        expect(callback).toBeCalledWith(true);
    });

    it("should return the correct value", function(){
        var _switch = TestUtils.renderIntoDocument(
            <Switch checked={true}/>
        );
        expect(_switch.getValue()).toBe(true);
        _switch = TestUtils.renderIntoDocument(
            <Switch checked={false}/>
        );
        expect(_switch.getValue()).toBe(false);
    });
});