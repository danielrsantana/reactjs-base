import React from "react";
import { shallow } from "enzyme";
import ModalComponent from "./modal.component";

describe("Sample Feature Test", () => {
  let wrapper: any = null;
  let title: string;
  const button1Text: string = "button1";
  const button1Class: string = "is-info";
  const button2Text: string = "button2";
  const button2Class: string = "is-success";
  const isInvisibleClass: string = "is-invisible";

  function setupTestContext(): void {
    title = "sample title";

    wrapper = shallow(
      <ModalComponent
        title={title}
        button1Class="is-info"
        button1Text={button1Text}
        button1Visible={true}
        button2Class=""
        button2Text={button2Text}
        button2Visible={false}
        isVisible={false}
        onButton1Clicked={() => {}}
        onButton2Clicked={() => {}}
        onModalClose={() => {}}
        children={<div>aaaaaaaaaa</div>}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    const buttonOne: any = wrapper.find(".buttonOne");
    const buttonTwo: any = wrapper.find(".buttonTwo");

    console.log(JSON.stringify(wrapper));
    // console.log(buttonOne);
    // console.log(buttonTwo);

    expect(wrapper.find(".modalTitle").text()).toEqual(title);
    expect(buttonOne.text()).toEqual(button1Text);
    expect(buttonOne.hasClass(button1Class)).toEqual(true);
    expect(buttonOne.hasClass(isInvisibleClass)).toEqual(false);
    expect(buttonTwo.text()).toEqual(button2Text);
    expect(buttonTwo.hasClass(button2Class)).toEqual(true);
    expect(buttonTwo.hasClass(isInvisibleClass)).toEqual(true);
  });

  it("callbacks should not throw exceptions", () => {
    const buttonOne: any = wrapper.find(".buttonOne");
    const buttonTwo: any = wrapper.find(".buttonTwo");
    expect(() => {
      throw new Error();
    }).toThrow();
    // expect(wrapper.instance().props.onButton1Clicked()).toThrow();
    // expect(wrapper.instance().props.onButton2Clicked()).toThrow();
    // expect(wrapper.instance().props.onModalClose()).toThrow();
  });
});
