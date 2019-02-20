import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

export interface WelcomePageProps {
  compiler: string;
  framework: string;
  bundler: string;
  messages: Array<any>;
  history: any;
  location: any;
  match: any;
}

const mapStateToProps = (state: WelcomePageProps) => {
  return {
    compiler: state.compiler,
    framework: state.framework,
    bundler: state.bundler,
    messages: state.messages
  };
};

class WelcomePage extends React.Component<WelcomePageProps, {}> {
  renderAlerts = (): React.ReactNode => {
    const { messages } = this.props;

    const alertList: Array<React.ReactNode> = [];

    if (messages && messages.length > 0) {
      messages.forEach((item: any) => {
        alertList.push(<div>{item.text}</div>);
      });
    }

    return <div>{alertList}</div>;
  };

  render() {
    const { compiler, framework, bundler } = this.props;

    return (
      <React.Fragment>
        <h1>
          This is the {framework} application using {compiler} with {bundler}...
        </h1>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(WelcomePage));
