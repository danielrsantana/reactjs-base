import * as React from "react";
import classnames from "classnames";
import * as common from "../common/constants.common";

/**
 * DropDownComponent props interface representation
 * @interface
 * @param {string} label - (optional) Label to be displayed for the component
 * @param {string} labelPosition - (optional) Position of the label (top/left)
 * @param {string} type - Type of the textbox (number, text, email, etc)
 * @param {string} value - (optional) Initial value of the component
 * @param {boolean} isPrimary - (optional) True/false representing if the component have primary style
 * @param {boolean} isInfo - (optional) True/false representing if the component have info style
 * @param {boolean} isSuccess - (optional) True/false representing if the component have success style
 * @param {boolean} isWarning - (optional) True/false representing if the component have warning style
 * @param {boolean} isDanger - (optional) True/false representing if the component have danger style
 * @param {boolean} isRounded - (optional) True/false representing if the component be rounded
 * @param {boolean} isLoading - (optional) True/false representing if the component have loading animation
 * @param {boolean} isDisabled - (optional) True/false representing if the component is disabled
 * @param {boolean} isWhite - (optional) True/false representing if the component is white
 * @param {boolean} isLight - (optional) True/false representing if the component is light
 * @param {boolean} isDark - (optional) True/false representing if the component is dark
 * @param {boolean} isBlack - (optional) True/false representing if the component is black
 * @param {boolean} isText - (optional) True/false representing if the component is text
 * @param {boolean} isLink - (optional) True/false representing if the component is link
 * @param {boolean} isSmall - (optional) True/false representing if the component is small
 * @param {boolean} isNormal - (optional) True/false representing if the component is normal
 * @param {boolean} isMedium - (optional) True/false representing if the component is medium
 * @param {boolean} isLarge - (optional) True/false representing if the component is large
 * @param {boolean} isFullwidtdh - (optional) True/false representing if the component will occupy the full width available
 * @param {boolean} isOutlined - (optional) True/false representing if the component is outlined
 * @param {boolean} isInverted - (optional) True/false representing if the component is inverted
 * @param {boolean} isHovered - (optional) True/false representing if the component is hovered
 * @param {boolean} isActive - (optional) True/false representing if the component is active
 * @param {boolean} isFocused - (optional) True/false representing if the component is focused
 * @param {boolean} isPulledRight - True/false representing if the component will be float right
 * @param {boolean} isIconSmall - (optional) True/false representing if the component icon is small
 * @param {boolean} isIconMedium - (optional) True/false representing if the component icon is medium
 * @param {boolean} isIconLarge - (optional) True/false representing if the component icon is large
 * @param {boolean} isHorizontal - (optional) True/false representing if the component is horizontal (label at left)
 * @param {boolean} isVertical - (optional) True/false representing if the component is vertical (label at right)
 * @param {string} iconLeft - (optional) String representing the componenet class to be used as icon positioned at left
 * @param {string} iconRight - (optional) String representing the componenet class to be used as icon positioned at right
 * @param {boolean} placeHolder - (optional) String representing the text to appear as placeHolder
 * @param {boolean} isValid - (optional) True/false representing if the component is valid
 * @param {boolean} validationMessage - (optional) Message to be displayed bellow the component
 * @param {boolean} isValidationCritical - (optional) True/false representing if the validation should be displayed as critical
 */
export interface InputTextComponentProps {
  label?: string;
  labelPosition?: string;
  type: string;
  value?: string;
  isPrimary?: boolean;
  isInfo?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDanger?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isWhite?: boolean;
  isLight?: boolean;
  isDark?: boolean;
  isBlack?: boolean;
  isText?: boolean;
  isLink?: boolean;
  isSmall?: boolean;
  isNormal?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  isFullwidtdh?: boolean;
  isOutlined?: boolean;
  isInverted?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  isFocused?: boolean;
  isPulledRight?: boolean;
  isIconSmall?: boolean;
  isIconMedium?: boolean;
  isIconLarge?: boolean;
  isHorizontal?: boolean;
  isVertical?: boolean;
  iconLeft?: string;
  iconRight?: string;
  placeHolder?: string;
  isValid?: boolean;
  validationMessage?: string;
  isValidationCritical?: boolean;
  onChange?: Function;
}

/**  InputTextComponent state interface representation
 * @param {string} value - (optional) Currentt component text
 */
export interface InputTextComponentState {
  value?: string;
}

/** InputTextComponent class */
export default class InputTextComponent extends React.Component<
  InputTextComponentProps,
  InputTextComponentState
> {
  constructor(props: InputTextComponentProps) {
    super(props);

    const { value } = this.props;
    this.state = {
      value: value
    };
  }

  onInputTextChanged = (event:any): void => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  renderInputControlLeftLabel = (): React.ReactNode => {
    const { label } = this.props;

    return (
      <div className="inputTextComponent field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">{this.renderInputControl(true)}</div>
      </div>
    );
  };

  renderInputControlTip = (): React.ReactNode => {
    const {
      isValid,
      validationMessage,
      isDanger,
      isInfo,
      isSuccess,
      isPrimary
    } = this.props;

    return (
      <p
        className={classnames({
          help: true,
          "is-invisible": !isValid,
          "is-danger": isDanger,
          "is-primary": isPrimary,
          "is-info": isInfo,
          "is-success": isSuccess
        })}
      >
        {validationMessage}
      </p>
    );
  };

  renderInputControlIcon = (
    iconPosition?: string,
    iconClass?: string
  ): React.ReactNode => {
    const { isIconLarge, isIconMedium, isIconSmall } = this.props;
    if (iconPosition) {
      return (
        <span
          className={`${iconPosition} ${classnames({
            icon: true,
            "is-small": isIconSmall,
            "is-medium": isIconMedium,
            "is-large": isIconLarge
          })}`}
        >
          <i className={iconClass} />
        </span>
      );
    }
  };

  renderInputControlTopLabel = (isLabelAtLeft: boolean): React.ReactNode => {
    const { label } = this.props;

    if (!isLabelAtLeft) {
      return <label className="label">{label}</label>;
    }
  };

  renderInputControl = (isLabelAtLeft: boolean): React.ReactNode => {
    const {
      iconLeft,
      iconRight,
      placeHolder,
      type,
      isDanger,
      isDisabled,
      isInfo,
      isLoading,
      isPrimary,
      isRounded,
      isSuccess,
      value
    } = this.props;

    return (
      <div
        className={classnames({
          inputTextComponent: !isLabelAtLeft,
          field: true
        })}
      >
        {this.renderInputControlTopLabel(isLabelAtLeft)}
        <div
          className={classnames({
            control: true,
            "has-icons-left": iconLeft ? true : false,
            "has-icons-right": iconRight ? true : false
          })}
        >
          <input
            className={classnames({
              input: true,
              "is-danger": isDanger,
              "is-primary": isPrimary,
              "is-info": isInfo,
              "is-success": isSuccess,
              "is-loading": isLoading,
              "is-disabled": isDisabled,
              "is-rounded": isRounded
            })}
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={this.onInputTextChanged}
          />
          {this.renderInputControlIcon(iconLeft ? "is-left" : "", iconLeft)}
          {this.renderInputControlIcon(iconRight ? "is-right" : "", iconRight)}
        </div>
        {this.renderInputControlTip()}
      </div>
    );
  };

  render() {
    const { label, labelPosition } = this.props;

    const isLabelAtLeft: boolean =
      label &&
      labelPosition &&
      labelPosition.toLowerCase() === common.default.LEFT
        ? true
        : false;

    if (isLabelAtLeft) {
      return this.renderInputControlLeftLabel();
    } else {
      return this.renderInputControl(false);
    }
  }
}
