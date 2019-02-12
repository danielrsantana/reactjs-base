import React from "react";
import { shallow } from "enzyme";
import RadioButtonComponent from "./radiobutton.component";
import * as common from "../common/constants.common";
import * as alertUtils from "./../alert/alert.utils";
import { DataItemModel } from "../common/dataItem.model";

describe("CheckBoxComponent Test", () => {
  let wrapper: any = null;
  let componentData: Array<DataItemModel> = [];

  function setupTestContext(): void {
    componentData = alertUtils.getNotificationSide();

    wrapper = shallow(
      <RadioButtonComponent
        data={componentData}
        labelPosition={common.default.TOP}
        label={common.default.SAMPLE_TEXT}
        onSelectedItemChanged={this.onSelectedNotificationSideChanged}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".radioButtonComponent")).toHaveLength(1);
    expect(wrapper.find(".label").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find("input")).toHaveLength(componentData.length);
  });
});
