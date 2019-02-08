import React from "react";
import { shallow } from "enzyme";
import ModalComponent from "./modal.component";

describe("Sample Feature Test", () => {
  let wrapper: any = null;
  let title: string;
  const button1Text: string = "button1";
  const button1Class: string = "is-info";
  const button2Text: string = "button2";
  const button2Class: string = "is-danger";
  const isInvisibleClass: string = "is-invisible";

  function setupTestContext(): void {
    title = "sample title";

    wrapper = shallow(
      <ModalComponent
        title={title}
        button1Class={button1Class}
        button1Text={button1Text}
        button1Visible={true}
        button2Class={button2Class}
        button2Text={button2Text}
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
    expect(wrapper.find(".modalHeaderTitle").text()).toEqual(title);
    expect(buttonOne.text()).toEqual(button1Text);
    expect(buttonOne.hasClass(button1Class)).toEqual(true);
    expect(buttonOne.hasClass(isInvisibleClass)).toEqual(false);
    expect(buttonTwo.text()).toEqual(button2Text);
    expect(buttonTwo.hasClass(button2Class)).toEqual(true);
    expect(buttonTwo.hasClass(isInvisibleClass)).toEqual(false);
  });
});
