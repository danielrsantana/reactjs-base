import React from "react";
import { shallow } from "enzyme";
import DropDownComponent from "./dropdown.component";
import * as common from "../common/constants.common";
import * as alertUtils from "./../alert/alert.utils";
import { DataItemModel } from "../common/dataItem.model";

describe("CheckBoxComponent Test", () => {
  let wrapper: any = null;
  let componentData: Array<DataItemModel> = [];

  function setupTestContext(): void {
    componentData = alertUtils.getNotificationTypes();
    wrapper = shallow(
      <DropDownComponent
        label={common.default.SAMPLE_TEXT}
        labelPosition={common.default.LEFT}
        data={componentData}
        isDanger={true}
        isDisabled={true}
        onSelectedItemChanged={this.onSelectedNotificationTypeChanged}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".dropdownComponent")).toHaveLength(1);
    expect(wrapper.find(".label").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find("select")).toHaveLength(componentData.length);
    expect(wrapper.find("select").disabled).toEqual(true);
    expect(wrapper.find(".is-danger")).toHaveLength(1);
  });
});
