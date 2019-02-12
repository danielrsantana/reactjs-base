import React from "react";
import { shallow } from "enzyme";
import ButtonComponent from "./button.component";
import * as common from "../common/constants.common";

describe("ButtonComponent Test", () => {
  let wrapper: any = null;

  function setupTestContext(): void {
    wrapper = shallow(
      <ButtonComponent 
      text={common.default.SAMPLE_TEXT}
       isDanger={true}
       isDisabled={true}
       isFullwidtdh={true}
       isLoading={true}
       isLarge={true} />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".buttonComponent")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find('button').props().disabled).toEqual(true);
    expect(wrapper.find('.is-danger')).toHaveLength(1);
    expect(wrapper.find('.is-fullwidth')).toHaveLength(1);
    expect(wrapper.find('.is-loading')).toHaveLength(1);
  });
});
