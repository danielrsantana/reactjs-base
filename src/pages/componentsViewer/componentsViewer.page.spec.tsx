import React from "react";
import { shallow } from "enzyme";
import App from "./componentsViewer.page";

describe("APP Sample Page", () => {
  let wrapper: any = null;

  function setupTestContext(): void {
    wrapper = shallow(
      <App />
    );
  }

  it("should render properly", () => {
    setupTestContext();
  });
});
