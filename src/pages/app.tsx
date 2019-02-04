import * as React from "react";
import SampleFeature from "../features/sample/sample.feature";
import ModalComponent from "../components/modal/modal.component";

export interface ModalState {
    isModalVisible: boolean;
}

export default class App extends React.Component<{}, ModalState> {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        };
    }

    onAlertParent = (): void => {
        console.log("it should open modal....");
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

    render() {
        const { isModalVisible } = this.state;

        return (
            <div className="app">
                <SampleFeature
                    title="Flex Payment"
                    message="welcome to stylished react+typescript+bulma app v2.0"
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