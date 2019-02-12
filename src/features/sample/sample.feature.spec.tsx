import React from "react";
import { shallow } from "enzyme";
import SampleFeature from "./sample.feature";
import * as common from "../../components/common/constants.common";

describe("Sample Feature Test", () => {
  let wrapper: any = null;

  function setupTestContext(): void {
    wrapper = shallow(
      <SampleFeature
        subTitle={common.default.SAMPLE_TEXT}
        title={common.default.SAMPLE_TEXT}
        onAlertParent={() => {}}
      />
    );
  }

  it("should render properly", () => {
    setupTestContext();
    expect(wrapper.find(".sampleFeatureTitle").text()).toEqual(common.default.SAMPLE_TEXT);
    expect(wrapper.find(".sampleFeatureMessage").text()).toEqual(common.default.SAMPLE_TEXT);
  });
});
