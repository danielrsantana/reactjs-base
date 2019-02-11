import React from "react";
import { shallow } from "enzyme";
import * as shortid from "shortid";
import AlertComponent from "./alert.component";
import * as alertUtils from "./alert.utils";
import { AlertModel } from "./alert.model";

describe("Sample Feature Test", () => {
    let wrapper: any = null;
    let SAMPLE_MESSAGE: string = "this is a sample message";

    function setupTestContext(): void {
        const message: AlertModel = alertUtils.generateMessage(SAMPLE_MESSAGE);
        wrapper = shallow(<AlertComponent alert={message} />);
    }

    it("should render properly", () => {
        setupTestContext();
    });
});
