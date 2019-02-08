import * as React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import * as shortid from "shortid";
import SampleFeature from "../features/sample/sample.feature";
import ModalComponent from "../components/modal/modal.component";
import AlertComponent from "../components/alert/alert.component";
require("./app.scss");

export interface AppPageState {
  isModalVisible: boolean;
}

export interface AppPageProps {
  messages: Array<string>;
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

export class App extends React.Component<AppPageProps, AppPageState> {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  onAlertParent = (): void => {
    this.setState({ isModalVisible: true });
  };

  onButton1Clicked = (): void => {
    this.setState({ isModalVisible: false });
  };

  onButton2Clicked = (): void => {
    this.setState({ isModalVisible: false });
  };

  onModalClose = (): void => {
    this.setState({ isModalVisible: false });
  };

  renderAlerts = () => {
    const { messages } = this.props;
    const alertList: Array<React.ReactNode> = [];
    if (messages && messages.length > 0) {
      messages.forEach(element => {
        alertList.push(
          <AlertComponent isSuccess={true} message={element} key={shortid.generate()} />
        );
      });
    }
    return (
      <div
        className={classnames({
          alertContainer: true,
          alertTopLeft: false,
          alertTopRight: true,
          alertBottomLeft: false,
          alertBottomRight: false
        })}
      >
        {alertList}
      </div>
    );
  };

  testToastr = () => {
    return (
      <div className="alertContainer alertTopRigh">
        <div className="toast toast-success">
          <div className="toast-message">
            I do not think that means what you think it means.
          </div>
        </div>
        <div className="toast toast-success">
          <div className="toast-message">Have fun storming the castle!</div>
        </div>
        <div className="toast toast-success">
          <div className="toast-message">
            My name is Inigo Montoya. You killed my father. Prepare to die!
          </div>
        </div>
      </div>
    );
  };
  render() {
    const { isModalVisible } = this.state;
    return (
      <div className="app">
        {this.renderAlerts()}
        <SampleFeature
          title="Flex Payment"
          subTitle="welcome to mercury system"
          onAlertParent={this.onAlertParent}
        />
        <ModalComponent
          title="Consuming Component Modal"
          button1Class="is-info"
          button1Visible={true}
          button1Text="Ok"
          button2Class=""
          button2Text="Cancel"
          button2Visible={false}
          isVisible={isModalVisible}
          onButton1Clicked={this.onModalClose}
          onButton2Clicked={this.onModalClose}
          onModalClose={this.onModalClose}
        >
          <div className="container">This is a modal </div>
        </ModalComponent>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
