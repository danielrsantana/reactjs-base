import * as React from "react";
import { TestComponent } from "../../components/test/test";

export interface WelcomePageProps {
  compiler: string,
  framework: string,
  bundler: string,
}

class WelcomePage extends React.Component<WelcomePageProps, {}> {
  render() {
    const { compiler, framework, bundler } = this.props;

    return (
      <React.Fragment>
        <h1>
          This is THE {framework} application using {compiler} with {bundler}
        </h1>
      </React.Fragment>
    );
  }
}

export default WelcomePage;