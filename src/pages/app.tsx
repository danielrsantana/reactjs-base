import * as React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import * as shortid from "shortid";
import SampleFeature from "../features/sample/sample.feature";
import ModalComponent from "../components/modal/modal.component";
import AlertComponent from "../components/alert/alert.component";
import { removeMessage } from "../redux/actions/actions";
require("./app.scss");

export interface AppPageState {
    isModalVisible: boolean;
}

export interface AppPageProps {
    messages: Array<string>;
    removeMessage: Function;
}

function mapDispatchToProps(dispatch) {
    return {
        removeMessage: message => dispatch(removeMessage(message))
    };
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

    onAlertClicked = (message): void => {
        console.log(message);
        this.props.removeMessage(message);
    }

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
            messages.forEach((item: any) => {
                alertList.push(
                    <AlertComponent
                        isSuccess={item.type === 'success'}
                        isDanger={item.type === 'error'}
                        isInfo={item.type === 'info'}
                        isWarning={item.type === 'warning'}
                        message={item.message}
                        key={item.id}
                        onClick={() => this.onAlertClicked(item)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
