import * as React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SampleFeature from "../../features/sample/sample.feature";
import ModalComponent from "../../components/modal/modal.component";
import AlertComponent from "../../components/alert/alert.component";
import { removeMessage } from "../../redux/actions";
import { AlertModel } from "../../components/alert/alert.model";

import "./componentsViewer.page.scss";

export interface ComponentsViewerPageProps {
  messages: Array<AlertModel>;
  removeMessage: Function;
  history: any;
  location: any;
  match: any;
}

export interface ComponentsViewerPageState {
  isModalVisible: boolean;
  modalMessage: string;
}

const mapStateToProps = (state: any) => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch: any) {
  return {
    removeMessage: (message: Array<AlertModel>) =>
      dispatch(removeMessage(message))
  };
}

class ComponentsViewerPage extends React.Component<
  ComponentsViewerPageProps,
  ComponentsViewerPageState
> {
  constructor(props: ComponentsViewerPageProps) {
    super(props);

    this.state = {
      isModalVisible: false,
      modalMessage: ""
    };
  }

  onAlertParent = (modalMessage: string): void => {
    this.setState({
      isModalVisible: true,
      modalMessage
    });
  };

  onAlertClicked = (message: AlertModel): void => {
    this.props.removeMessage(message);
  };

  onAlertTimeElapsed = (message: AlertModel): void => {
    this.props.removeMessage(message);
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

  renderAlerts = (): React.ReactNode => {
    const { messages } = this.props;
    
    const alertList: Array<React.ReactNode> = [];
    let position: string = "";
    let side: string = "";

    if (messages && messages.length > 0) {
      messages.forEach((item: AlertModel) => {
        position = item.position;
        side = item.side;
        alertList.push(
          <AlertComponent
            alert={item}
            key={item.id}
            onClick={() => this.onAlertClicked(item)}
            onTimeElapsed={() => this.onAlertTimeElapsed(item)}
          />
        );
      });
    }

    return (
      <div
        className={classnames({
          alertContainer: true,
          alertTop: position === "top",
          alertBottom: position === "bottom",
          alertLeft: side === "left",
          alertRight: side === "right"
        })}
      >
        {alertList}
      </div>
    );
  };

  render() {
    const { isModalVisible, modalMessage } = this.state;
    return (
      <div className="componentsViewer">
        {this.renderAlerts()}
        <SampleFeature
          title="Components Viewer"
          subTitle=""
          onAlertParent={this.onAlertParent}
        />
        <ModalComponent
          title="Alert on Modal"
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
          <div>{modalMessage}</div>
        </ModalComponent>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentsViewerPage)
);
