import React from "react";
import { shallow } from "enzyme";
import CheckBoxComponent from "./checkbox.component";
import * as common from "../common/constants.common";

describe("CheckBoxComponent Test", () => {
  let wrapper: any = null;

  function setupTestContext(): void {
    wrapper = shallow(
      <CheckBoxComponent 
      text={common.default.SAMPLE_TEXT} 
      label={common.default.SAMPLE_TEXT} 
      labelPosition={common.default.TOP}
      isChecked={true}
      isDisabled={true} />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".checkboxComponent")).toHaveLength(1);
    expect(wrapper.find(".label").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find(".checkbox").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find("checkbox").disabled).toEqual(true);
    expect(wrapper.find("checkbox").checked).toEqual(true);
  });
});
