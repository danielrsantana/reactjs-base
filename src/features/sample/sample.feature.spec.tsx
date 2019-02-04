import React from "react";
import { shallow } from "enzyme";
import SampleFeature from "./sample.feature";

describe("Sample Feature Test", () => {
  let wrapper: any = null;
  let message: string;
  let title: string;

  function setupTestContext(): void {
    message = "sample message";
    title = "sample title";

    wrapper = shallow(
      <SampleFeature message={message} title={title} onAlertParent={() => {}} />
    );
  }

  function usefulEnzymeCommands(){
    // expect(wrapper.state().someId).be.equal(0);
    // expect(wrapper.state().someList).be.empty;
    // expect(wrapper.state().someObject).to.deep.equal({});
    // expect(wrapper.find('some css selector')).to.have.lengthOf(1);
    // expect(wrapper.state().someText).to.have.string(event.target.value);
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".sampleFeatureTitle").text()).toEqual(title);
    expect(wrapper.find(".sampleFeatureMessage").text()).toEqual(message);
    expect(wrapper.instance().state.count).toEqual(0);
  });

  it("button click should increase one", () => {
    const count: number = wrapper.instance().state.count;
    wrapper.instance().onIncrement();
    expect(wrapper.instance().state.count).toEqual(count + 1);
  });
});
