import * as React from "react";
import classnames from "classnames";

const LEFT_POSITION: string = "left";

export interface InputTextComponentProps {
  inputClass?: string;
  isPrimary?: boolean;
  isIconSmall?: boolean;
  isIconMedium?: boolean;
  isIconLarge?: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  isInfo?: boolean;
  isSuccess?: boolean;
  isWarningy?: boolean;
  isDanger?: boolean;
  isSmally?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isHorizontal?: boolean;
  isNormal?: boolean;
  isVertical?: boolean;
  iconLeft?: string;
  iconRight?: string;
  iconSize?: string;
  hasLabel?: boolean;
  label?: string;
  labelPosition?: string;
  placeHolder?: string;
  isValid?: boolean;
  validationMessage?: string;
  isValidationCritical?: boolean;
  type: string;
  value?: string;
}

export interface InputTextComponentState {
  value?: string;
}

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

  renderAdvancedInputLabel() {
    const { label } = this.props;

    return (
      <div className="inputTextComponent field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">{label}</label>
        </div>
        <div className="field-body">{this.renderInputControl(true)}</div>
      </div>
    );
  }

  renderInputControlTip() {
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
  }

  renderInputControlIcon = (
    iconSize?: string,
    iconPosition?: string,
    iconClass?: string
  ): React.ReactNode => {
    if (iconPosition) {
      return (
        <span className={`icon ${iconSize} ${iconPosition}`}>
          <i className={iconClass} />
        </span>
      );
    }
  };

  renderInputControlTopLabel = (isLabelAtLeft): React.ReactNode => {
    const { label } = this.props;

    if (!isLabelAtLeft) {
      return <label className="label">{label}</label>;
    }
  };

  renderInputControl(isLabelAtLeft) {
    const {
      iconLeft,
      iconRight,
      iconSize,
      placeHolder,
      type,
      isDanger,
      isDisabled,
      isInfo,
      isLoading,
      isPrimary,
      isRounded,
      isSuccess
    } = this.props;

    return (
      <div
        className={classnames({
          inputTextComponent: !isLabelAtLeft,
          field: true
        })}
      >
        {this.renderInputControlTopLabel(isLabelAtLeft)}
        <div className="control has-icons-left has-icons-right">
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
          />
          {this.renderInputControlIcon(
            iconSize,
            iconLeft ? "is-left" : "",
            iconLeft
          )}
          {this.renderInputControlIcon(
            iconSize,
            iconRight ? "is-right" : "",
            iconRight
          )}
        </div>
        {this.renderInputControlTip()}
      </div>
    );
  }

  render() {
    const { label, labelPosition, hasLabel } = this.props;

    const isLabelAtLeft: boolean =
      hasLabel &&
      label &&
      labelPosition &&
      labelPosition.toLowerCase() === LEFT_POSITION
        ? true
        : false;

    if (isLabelAtLeft) {
      return this.renderAdvancedInputLabel();
    } else {
      return this.renderInputControl(false);
    }
  }
}
