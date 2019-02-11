import * as React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import SampleFeature from "../features/sample/sample.feature";
import ModalComponent from "../components/modal/modal.component";
import AlertComponent from "../components/alert/alert.component";
import { removeMessage } from "../redux/actions/actions";
import { setInterval, clearInterval } from "timers";
import { AlertModel } from "../components/alert/alert.model";
require("./app.scss");

export interface AppPageState {
    isModalVisible: boolean;
    modalMessage: string;
}

export interface AppPageProps {
    messages: Array<AlertModel>;
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
    private alertRemovalQueue: Array<any> = [];
    private isServiceRunning: boolean = false;
    private serviceTimeout: NodeJS.Timeout;

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            modalMessage: ""
        };

        this.onAlertParent = this.onAlertParent.bind(this);
        this.onAlertClicked = this.onAlertClicked.bind(this);
        this.onAlertTimeElapsed = this.onAlertTimeElapsed.bind(this);
        this.onButton1Clicked = this.onButton1Clicked.bind(this);
        this.onButton2Clicked = this.onButton2Clicked.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
        this.renderAlerts = this.renderAlerts.bind(this);
    }

    onAlertParent(modalMessage: string): void {
        this.setState({
            isModalVisible: true,
            modalMessage
        });
    };

    onAlertClicked(message): void {
        this.props.removeMessage(message);
    }

    onAlertTimeElapsed(message): void {
        this.props.removeMessage(message);
    }

    onButton1Clicked(): void {
        this.setState({ isModalVisible: false });
    };

    onButton2Clicked(): void {
        this.setState({ isModalVisible: false });
    };

    onModalClose(): void {
        this.setState({ isModalVisible: false });
    };

    renderAlerts() {
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
                        onTimeElapsed={() => this.onAlertTimeElapsed(item)} />
                );
            });
        }

            //console.log(position);
            //console.log(side);

        return (
            <div
                className={classnames({
                    alertContainer: true,
                    alertTop: position === 'top',
                    alertBottom: position === 'bottom',
                    alertLeft: side === 'left',
                    alertRight: side === 'right'
                })}
            >
                {alertList}
            </div>
        );
    };

    render() {
        const { isModalVisible, modalMessage } = this.state;
        return (
            <div className="app">
                {this.renderAlerts()}
                <SampleFeature
                    title="Flex Payment"
                    subTitle="welcome to mercury system"
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
