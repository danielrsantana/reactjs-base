import React from "react";
import { shallow } from "enzyme";
import AlertComponent from "./alert.component";
import * as alertUtils from "./alert.utils";
import { AlertModel } from "./alert.model";
import * as common from "../common/constants.common";

describe("AlertComponent Test", () => {
  let wrapper: any = null;

  function setupTestContext(): void {
    const message: AlertModel = alertUtils.generateMessage(
      common.default.SAMPLE_TEXT,
      common.default.TOP,
      common.default.SUCCESS
    );
    wrapper = shallow(<AlertComponent alert={message} />);
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".alertComponentMessage").text()).toEqual(
      common.default.SAMPLE_TEXT
    );
    expect(wrapper.find(".is-success")).toHaveLength(1);
  });
});
