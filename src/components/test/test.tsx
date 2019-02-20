import * as React from "react";
import ButtonComponent from "../button/button.component";

export default class TestComponent extends React.Component<{}, {}> {
  render() {
    const framework: string = "react";
    
    return (
      <React.Fragment>
        <div>Awesome app created with {framework}</div>
        <button>Change frameworks</button>
        <ButtonComponent text="Components Viewer" isInfo={true} />
      </React.Fragment>
    );
  }
}
