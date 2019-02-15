import * as React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../redux/actions";
import InputTextComponent from "../../components/inputText/inputText.component";
import ButtonComponent from "../../components/button/button.component";
import DropDownComponent from "../../components/dropdown/dropdown.component";
import RadioButtonComponent from "../../components/radiobutton/radiobutton.component";
import * as alertUtils from "../../components/alert/alert.utils";
import * as common from "../../components/common/constants.common";

const mapStateToProps = (state:SampleFeatureProps) => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch:any) {
  return {
    addMessage: (message:Array<string>) => dispatch(addMessage(message))
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
  notificationType: string;
  notificationTypes: Array<any>;
  notificationSides: Array<any>;
  notificationSide: string;
  notificationPositions: Array<any>;
  notificationPosition: string;
  notificationTimedOptions: Array<any>;
  notificationTimedOption: string;
  notificationDuration: number;
}

export class SampleFeature extends React.Component<
  SampleFeatureProps,
  SampleFeatureState
> {
  constructor(props:SampleFeatureProps) {
    super(props);

    this.state = {
      notificationMessage: "",
      notificationType: common.default.SUCCESS,
      notificationTypes: alertUtils.getNotificationTypes(),
      notificationSides: alertUtils.getNotificationSide(),
      notificationSide: common.default.RIGHT,
      notificationPositions: alertUtils.getNotificationPositions(),
      notificationPosition: common.default.TOP,
      notificationTimedOptions: alertUtils.getNotificationTimedOptions(),
      notificationTimedOption: common.default.YES,
      notificationDuration: 5000
    };
  }

  onAlertParent = (): void => {
    const { notificationMessage } = this.state;

    if (notificationMessage) {
      this.props.onAlertParent(notificationMessage);
    }
  };

  onShowNotification = (): void => {
    const {
      notificationMessage,
      notificationType,
      notificationSide,
      notificationPosition,
      notificationTimedOption,
      notificationDuration
    } = this.state;

    if (notificationMessage) {
      const message: any = alertUtils.generateMessage(
        notificationMessage,
        notificationPosition,
        notificationSide,
        notificationType,
        notificationTimedOption === common.default.YES ? notificationDuration : 0
      );

      this.props.addMessage(message);
    }
  };

  onNotificationMessageChanged = (event: any): void => {
    this.setState({
      notificationMessage: event.target.value
    });
  };

  onNotificationDurationChanged = (event: any): void => {
    const duration: number = Number(event.target.value);
    this.setState({
      notificationDuration: duration
    });
  };

  onSelectedNotificationTypeChanged = (value: any): void => {
    this.setState({
      notificationType: value
    });
  };

  onSelectedNotificationPositionChanged = (event: any): void => {
    this.setState({
      notificationPosition: event.value
    });
  };

  onSelectedNotificationSideChanged = (event: any): void => {
    this.setState({
      notificationSide: event.value
    });
  };

  onSelectedNotificationTimedOptionChanged = (event: any): void => {
    this.setState({
      notificationTimedOption: event.value
    });
  };

  renderNotificationControls = (): React.ReactNode => {
    const {
      notificationType,
      notificationTypes,
      notificationSide,
      notificationSides,
      notificationPosition,
      notificationPositions,
      notificationTimedOption,
      notificationTimedOptions
    } = this.state;

    return (
      <div className="columns box is-multiline ">
        <div className="column is-6">
          <InputTextComponent
            type={common.default.TYPE_TEXT}
            placeHolder="Notification Message"
            label="Text"
            labelPosition={common.default.TOP}
            iconLeft="fas fa-envelope"
            iconRight="fas fa-check"
            isSuccess={true}
            onChange={this.onNotificationMessageChanged}
          />
        </div>
        <div className="column is-3">
          <DropDownComponent
            label="Type"
            labelPosition={common.default.TOP}
            selectedValue={notificationType}
            data={notificationTypes}
            onSelectedItemChanged={this.onSelectedNotificationTypeChanged}
          />
        </div>
        <div className="column is-3">
          <RadioButtonComponent
            data={notificationSides}
            labelPosition={common.default.TOP}
            label="Side"
            selectedValue={notificationSide}
            onSelectedItemChanged={this.onSelectedNotificationSideChanged}
          />
        </div>
        <div className="column is-3">
          <RadioButtonComponent
            data={notificationPositions}
            labelPosition={common.default.TOP}
            label="Position"
            selectedValue={notificationPosition}
            onSelectedItemChanged={this.onSelectedNotificationPositionChanged}
          />
        </div>
        <div className="column is-3">
          <RadioButtonComponent
            data={notificationTimedOptions}
            labelPosition={common.default.TOP}
            label="Timed"
            selectedValue={notificationTimedOption}
            onSelectedItemChanged={
              this.onSelectedNotificationTimedOptionChanged
            }
          />
        </div>
        {this.renderTimerField()}
      </div>
    );
  };

  renderTimerField = (): React.ReactNode => {
    const { notificationTimedOption, notificationDuration } = this.state;

    if (notificationTimedOption === "yes") {
      return (
        <div className="column is-5">
          <InputTextComponent
            type={common.default.TYPE_NUMBER}
            placeHolder="Duration"
            label="Duration"
            labelPosition={common.default.TOP}
            iconLeft="fas fa-clock"
            isSuccess={true}
            value={notificationDuration.toString()}
            onChange={this.onNotificationDurationChanged}
          />
        </div>
      );
    }
  };

  render() {
    const { title, subTitle } = this.props;

    return (
      <div className="sampleFeature">
        <div className="notificationArea" />
        <div className="box columns is-multiline has-text-centered has-background-white-ter is-unselectable">
          <div className="column is-12 is-paddingless">
            <div className="sampleFeatureTitle title has-text-link">
              {title}
            </div>
          </div>
          <div className="column is-12 is-paddingless">
            <div className="sampleFeatureMessage subtitle">{subTitle}</div>
          </div>
        </div>
        {this.renderNotificationControls()}
        <div className="columns">
          <div className="column is-6">
            <ButtonComponent
              isLink={true}
              isOutlined={true}
              onClick={this.onAlertParent}
              text="Show on Modal"
            />
          </div>
          <div className="column is-6">
            <div className="control is-pulled-right">
              <ButtonComponent
                isLink={true}
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
