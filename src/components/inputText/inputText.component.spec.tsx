import React from "react";
import { shallow } from "enzyme";
import InputTextComponent from "./inputText.component";
import * as common from "../common/constants.common";

describe("Sample Feature Test", () => {
  let wrapper: any = null;

  function setupTestContext(): void {
    wrapper = shallow(
      <InputTextComponent
        type={common.default.TYPE_TEXT}
        placeHolder={common.default.SAMPLE_TEXT}
        label={common.default.SAMPLE_TEXT}
        labelPosition={common.default.LEFT}
        isIconSmall={true}
        iconLeft={common.default.SAMPLE_ICON}
        iconRight={common.default.SAMPLE_ICON}
        isSuccess={true}
        value={common.default.SAMPLE_TEXT}
        isValid={false}
        isValidationCritical={true}
        validationMessage={common.default.SAMPLE_TEXT}
        onChange={this.onNotificationMessageChanged}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find("label").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find("input").props().value).toEqual(
      common.default.SAMPLE_TEXT
    );
    expect(wrapper.find(".icon")).toHaveLength(2);
  });

  it("should renderInputControlLeftLabel works", () => {
    const element = wrapper.instance().renderInputControlLeftLabel();
    const node = shallow(element);
    expect(node.find(".inputTextComponent")).toHaveLength(1);
    expect(node.find("label").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(node.find(".field-body")).toHaveLength(1);
  });

  it("should renderInputControlTip works", () => {
    const element = wrapper.instance().renderInputControlTip();
    const node = shallow(element);
    expect(node.find(".help")).toHaveLength(1);
    expect(node.find(".help").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(node.find(".is-danger")).toHaveLength(1);
  });

  it("should renderInputControlIcon works", () => {
    const element = wrapper
      .instance()
      .renderInputControlIcon("is-right", common.default.SAMPLE_ICON);
    const node = shallow(element);
    expect(node.find(".icon")).toHaveLength(1);
    expect(node.find(".is-right")).toHaveLength(1);
    expect(node.find(".is-left")).toHaveLength(0);
    expect(node.find(common.default.SAMPLE_TEXT)).toHaveLength(1);
  });

  it("should renderInputControlTopLabel works", () => {
    const element = wrapper.instance().renderInputControlTopLabel(false);
    const node = shallow(element);
    expect(node.find(".label").text()).toEqual(common.default.SAMPLE_TEXT);
  });

  it("should renderInputControl works", () => {
    const element = wrapper.instance().renderInputControl(false);
    const node = shallow(element);
    expect(node.find(".inputTextComponent")).toHaveLength(1);
    expect(node.find("input").props().value).toEqual(
      common.default.SAMPLE_TEXT
    );
  });
});
