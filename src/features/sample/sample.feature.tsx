import * as React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/actions/actions";
import InputTextComponent from "../../components/inputText/inputText.component";
import ButtonComponent from "../../components/button/button.component";
import DropDownComponent from "../../components/dropdown/dropdown.component";
import RadioButtonComponent from "../../components/radiobutton/radiobutton.component";

const mapStateToProps = state => {
    return { messages: state.messages };
};

function mapDispatchToProps(dispatch) {
    return {
        addMessage: message => dispatch(addMessage(message))
    };
}

export interface SampleFeatureProps {
    title: string;
    subTitle: string;
    onAlertParent: Function;
    messages: Array<string>;
    addMessage: Function;
}

export interface SampleFeatureState {
    notificationMessage: string;
    notificationType: number;
    notificationTypes: Array<any>;
    notificationSides: Array<any>;
    notificationSide: string;
    notificationPositions: Array<any>;
    notificationPosition: string;
}

export class SampleFeature extends React.Component<
    SampleFeatureProps,
    SampleFeatureState
    > {
    constructor(props) {
        super(props);

        this.state = {
            notificationMessage: "",
            notificationType: 0,
            notificationTypes: this.getNotificationTypes(),
            notificationSides: this.getNotificationSide(),
            notificationSide: 'right',
            notificationPositions: this.getNotificationPositions(),
            notificationPosition: 'bottom',
        };
    }

    getNotificationTypes = (): Array<any> => {
        return [
            { value: 'success', text: "Success", isActive: true },
            { value: 'info', text: "Info", isActive: false },
            { value: 'warning', text: "Warning", isActive: false },
            { value: 'error', text: "Error", isActive: false }
        ];
    };

    getNotificationSide = (): Array<any> => {
        return [
            { value: 'right', text: "Right", name: "notificationSide", isChecked: true },
            { value: 'left', text: "Left", name: "notificationSide", isChecked: false },
        ];
    };

    getNotificationPositions = (): Array<any> => {
        return [
            { value: 'top', text: "Top", name: "notificationPosition", isChecked: true },
            { value: 'bottom', text: "Bottom", name: "notificationPosition", isChecked: false },
        ];
    };

    onAlertParent = (): void => {
        this.props.onAlertParent();
    };

    onShowNotification = (): void => {
        const {
            notificationMessage,
            notificationType,
            notificationPosition,
            notificationSide
        } = this.state;

        if (notificationMessage) {
            const message: any = {
                message: notificationMessage,
                type: notificationType,
                position: notificationPosition,
                side: notificationSide
            };

            this.props.addMessage(message);
            this.setState({ notificationMessage: "" });
        }
    };

    onNotificationMessageChanged = (event): void => {
        this.setState({
            notificationMessage: event.target.value
        });
    };

    onSelectedNotificationTypeChanged = (event: any): void => {
        this.setState({
            notificationType: event.value
        });
    }

    onSelectedNotificationPositionChanged = (event: any): void => {
        this.setState({
            notificationPosition: event.value
        });
    }

    onSelectedNotificationSideChanged = (event: any): void => {
        this.setState({
            notificationSide: event.value
        });
    }

    renderNotificationArea = (): React.ReactNode => {
        const {
            notificationTypes,
            notificationSides,
            notificationPositions
        } = this.state;

        return (
            <div className="columns notification is-multiline">
                <div className="column is-12">
                    <InputTextComponent
                        type="text"
                        placeHolder="Teste 1234"
                        label="Teste"
                        hasLabel={true}
                        labelPosition="top"
                        isHorizontal={true}
                        iconLeft="fas fa-user"
                        isNormal={true}
                        onChange={() => { }}
                    />
                </div>
                <div className="column is-12">
                    <InputTextComponent
                        type="text"
                        placeHolder="Notification Message"
                        label="text"
                        hasLabel={true}
                        labelPosition="top"
                        isHorizontal={true}
                        iconLeft="fas fa-envelope"
                        iconRight="fas fa-check"
                        isSuccess={true}
                        isValid={true}
                        onChange={this.onNotificationMessageChanged}
                    />
                </div>
                <div className="column is-4">
                    <DropDownComponent
                        label="Type"
                        labelPosition="left"
                        selectText="Select"
                        data={notificationTypes}
                        onSelectedItemChanged={this.onSelectedNotificationTypeChanged}
                    />
                </div>
                <div className="column is-4">
                    <RadioButtonComponent
                        data={notificationSides}
                        labelPosition="left"
                        label="Side"
                        onSelectedItemChanged={this.onSelectedNotificationSideChanged} />
                </div>
                <div className="column is-4">
                    <RadioButtonComponent
                        data={notificationPositions}
                        labelPosition="left"
                        label="Position"
                        onSelectedItemChanged={this.onSelectedNotificationPositionChanged} />
                </div>
            </div>
        );
    };

    render() {
        const { title, subTitle } = this.props;

        return (
            <div className="sampleFeature container">
                <div className="notificationArea" />
                <div className="columns is-multiline has-text-centered">
                    <div className="column is-12">
                        <div className="sampleFeatureTitle title">{title}</div>
                    </div>
                    <div className="column is-12">
                        <div className="sampleFeatureMessage">{subTitle}</div>
                    </div>
                </div>
                {this.renderNotificationArea()}
                <div className="columns">
                    <div className="column is-6">
                        <ButtonComponent
                            isLink={true}
                            isOutlined={true}
                            onClick={this.onAlertParent}
                            text="Open Modal"
                        />
                    </div>
                    <div className="column is-6">
                        <div className="control is-pulled-right">
                            <ButtonComponent
                                isLink={true}
                                isOutlined={true}
                                onClick={this.onShowNotification}
                                isPulledRight={true}
                                text="Show Notification"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SampleFeature);
