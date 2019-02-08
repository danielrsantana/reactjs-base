import React from "react";
import { shallow } from "enzyme";
import AlertComponent from "./alert.component";

describe("Sample Feature Test", () => {
  let wrapper: any = null;
  let SAMPLE_MESSAGE: string = "this is a sample message";

  function setupTestContext(): void {
    wrapper = shallow(
      <AlertComponent message={SAMPLE_MESSAGE} isDanger={true} />
    );
  }

  it("should render properly", () => {
    setupTestContext();
  });
});
