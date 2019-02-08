import React from "react";
import { shallow } from "enzyme";
import InputTextComponent from "./inputText.component";

describe("Sample Feature Test", () => {
  let wrapper: any = null;
  const SAMPLE_TEXT: string = "sample text";
  const SAMPLE_ICON: string = "fas fa-envelope";

  function setupTestContext(): void {
    wrapper = shallow(
      <InputTextComponent
        type="text"
        placeHolder={SAMPLE_TEXT}
        label={SAMPLE_TEXT}
        value={SAMPLE_TEXT}
        hasLabel={true}
        labelPosition="top"
        isHorizontal={true}
        iconLeft={SAMPLE_ICON}
        iconRight={SAMPLE_ICON}
        isDanger={true}
        validationMessage={SAMPLE_TEXT}
        onChange={() => {}}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find("label").text()).toEqual(SAMPLE_TEXT);
    expect(wrapper.find("input").props().value).toEqual(SAMPLE_TEXT);
    expect(wrapper.find('.icon')).toHaveLength(2);
  });

  it("should renderInputControlLeftLabel works", () => {
    const element = wrapper.instance().renderInputControlLeftLabel();
    const node = shallow(element);
    expect(node.find('.inputTextComponent')).toHaveLength(1);
    expect(node.find('label').text()).toEqual(SAMPLE_TEXT);
    expect(node.find('.field-body')).toHaveLength(1);
  });

  it("should renderInputControlTip works", () => {
    const element = wrapper.instance().renderInputControlTip();
    const node = shallow(element);
    expect(node.find('.help')).toHaveLength(1);
    expect(node.find('.help').text()).toEqual(SAMPLE_TEXT);
    expect(node.find('.is-danger')).toHaveLength(1);
  });

  it("should renderInputControlIcon works", () => {
    const element = wrapper.instance().renderInputControlIcon('is-small', 'is-right', 'icon-class');
    const node = shallow(element);
    expect(node.find('.icon')).toHaveLength(1);
    expect(node.find('.is-right')).toHaveLength(1);
    expect(node.find('.is-left')).toHaveLength(0);
    expect(node.find('.icon-class')).toHaveLength(1);
  });

  it("should renderInputControlTopLabel works", () => {
    const element = wrapper.instance().renderInputControlTopLabel(false);
    const node = shallow(element);
    expect(node.find('.label').text()).toEqual(SAMPLE_TEXT);
  });

  it("should renderInputControl works", () => {
    const element = wrapper.instance().renderInputControl(false);
    const node = shallow(element);
    expect(node.find('.inputTextComponent')).toHaveLength(1);
    expect(node.find('input').props().value).toEqual(SAMPLE_TEXT);
  });
});
