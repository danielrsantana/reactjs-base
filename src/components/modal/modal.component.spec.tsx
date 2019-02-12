import React from "react";
import { shallow } from "enzyme";
import ModalComponent from "./modal.component";
import * as common from "../common/constants.common";

describe("Sample Feature Test", () => {
  let wrapper: any = null;
  const invisibleCssClass:string = 'is-invisible';

  function setupTestContext(): void {
    wrapper = shallow(
      <ModalComponent
        title={common.default.SAMPLE_TEXT}
        button1Class={common.default.SAMPLE_CLASS}
        button1Text={common.default.SAMPLE_TEXT}
        button1Visible={true}
        button2Class={common.default.SAMPLE_CLASS}
        button2Text={common.default.SAMPLE_TEXT}
        button2Visible={true}
        isVisible={false}
        onButton1Clicked={() => {}}
        onButton2Clicked={() => {}}
        onModalClose={() => {}}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    const buttonOne: any = wrapper.find(".buttonOne");
    const buttonTwo: any = wrapper.find(".buttonTwo");

    expect(wrapper.find(".modalComponent")).toHaveLength(1);
    expect(wrapper.find(".modalHeaderTitle").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(buttonOne.text()).toEqual(common.default.SAMPLE_TEXT);
    expect(buttonOne.hasClass(common.default.SAMPLE_CLASS)).toEqual(true);
    expect(buttonOne.hasClass(invisibleCssClass)).toEqual(false);
    expect(buttonTwo.text()).toEqual(common.default.SAMPLE_TEXT);
    expect(buttonTwo.hasClass(common.default.SAMPLE_CLASS)).toEqual(true);
    expect(buttonTwo.hasClass(invisibleCssClass)).toEqual(false);
  });
});
