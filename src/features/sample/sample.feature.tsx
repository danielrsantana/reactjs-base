import * as React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/actions/actions";
import InputTextComponent from "../../components/inputText/inputText.component";
import ButtonComponent from "../../components/button/button.component";
import DropDownComponent from "../../components/dropdown/dropdown.component";

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
  notificationTypes: Array<any>;
}

export class SampleFeature extends React.Component<
  SampleFeatureProps,
  SampleFeatureState
> {
  constructor(props) {
    super(props);

    this.state = {
      notificationMessage: "",
      notificationTypes: this.getNotificationTypes()
    };
  }

  getNotificationTypes = (): Array<any> => {
    return [
      { id: 0, text: "Success", isActive: true },
      { id: 1, text: "Info", isActive: true },
      { id: 2, text: "Warning", isActive: true },
      { id: 3, text: "Error", isActive: true }
    ];
  };

  returnTrueFunction(): boolean {
    return true;
  }

  onAlertParent = (): void => {
    this.props.onAlertParent();
  };

  onShowNotification = (): void => {
    const { notificationMessage } = this.state;

    if (notificationMessage) {
      this.props.addMessage(notificationMessage);
      this.setState({ notificationMessage: "" });
    }
  };

  onNotificationMessageChanged = (event): void => {
    this.setState({ notificationMessage: event.target.value });
  };

  renderNotificationArea = (): React.ReactNode => {
    const { notificationTypes } = this.state;
    return (
      <div className="columns notification is-multiline">
        <div className="column is-6">
          <InputTextComponent
            type="text"
            placeHolder="Teste 1234"
            label="Teste"
            hasLabel={true}
            labelPosition="top"
            isHorizontal={true}
            iconLeft="fas fa-user"
            isNormal={true}
            onChange={() => {}}
          />
        </div>
        <div className="column is-3">
          <InputTextComponent
            type="text"
            placeHolder="Notification Message"
            label="message to show"
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
        <div className="column is-3">
          <DropDownComponent
            label="Notification Type"
            labelPosition="top"
            selectText="Select"
            data={notificationTypes}
            onSelectedItemChanged={() => {}}
          />
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
          <div className="column is-10">
            <ButtonComponent
              isLink={true}
              isOutlined={true}
              onClick={this.onAlertParent}
              text="Open Modal"
            />
          </div>
          <div className="column is-6">
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
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleFeature);
