import React from "react";
import { shallow } from "enzyme";
import App from "./app";

describe("APP Sample Page", () => {
    let wrapper: any = null;

    function setupTestContext(): void {
        wrapper = shallow(<App />);
    }

    it("should render properly", () => {
        setupTestContext();
    });
});