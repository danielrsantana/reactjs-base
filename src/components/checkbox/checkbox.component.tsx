import * as React from "react";
import classnames from "classnames";
import * as common from "../common/constants.common";

/**
 * CheckBoxComponent props interface representation
 * @interface
 * @param {string} label - (optional) Label to be displayed for the checkbox
 * @param {string} labelPosition - (optional) Position of the label (top/left)
 * @param {string} text - (optional) Text of the checkbox / Text can also be an HTML. In that case put the code inside the component
 * @param {string} isChecked - (optional) Checked state (on/off) of the checkbox
 * @param {string} isDisabled - (optional) Disable state (on/off) of the checkbox
 * @param {string} onCheckedChanged - Callback for the onCheckedChanged event
 */
export interface CheckBoxComponentProps {
  label?: string;
  labelPosition?: string;
  text?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onCheckedChanged?: Function;
}

/**  CheckBoxComponent state interface representation
 * @param {boolean} isChecked - (optional) Checked state (on/off) of the checkbox
 */
export interface CheckBoxComponentState {
  isChecked?: boolean;
}

/** CheckBoxComponent class */
export default class CheckBoxComponent extends React.Component<
  CheckBoxComponentProps,
  CheckBoxComponentState
> {
  constructor(props) {
    super(props);

    const { isChecked } = this.props;

    this.state = {
      isChecked: isChecked
    };
  }

  onCheckedChanged = () => {
    let newCheckedState: boolean = false;
    this.setState((prevProps: CheckBoxComponentProps) => {
      newCheckedState = !prevProps.isChecked;
      return { isChecked: newCheckedState };
    });

    if (this.props.onCheckedChanged) {
      this.props.onCheckedChanged(newCheckedState);
    }
  };

  renderComponentLeftLabel = (): React.ReactNode => {
    const { label } = this.props;

    return (
      <div className="checkBoxComponent field is-horizontal">
        <div className="field-label is-normal">{this.renderComponentLabel}</div>
        <div className="field-body">{this.renderCheckbox(true)}</div>
      </div>
    );
  };

  renderComponentLabel = (): React.ReactNode => {
    const { label } = this.props;

    if (label) {
      return <label className="label">{label}</label>;
    }
  };

  renderCheckbox(isLabelAtLeft: boolean) {
    const { text } = this.props;
    const { isChecked } = this.state;

    return (
      <div
        className={classnames({
          checkBoxComponent: !isLabelAtLeft,
          field: true,
          "is-expanded": true
        })}
      >
        {this.renderComponentLabel()}
        <label className="checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.onCheckedChanged}
          />
          {text ? text : this.props.children}
        </label>
      </div>
    );
  }

  render() {
    const { label, labelPosition } = this.props;

    const isLabelAtLeft: boolean =
      label &&
      labelPosition &&
      labelPosition.toLowerCase() === common.default.LEFT
        ? true
        : false;

    if (isLabelAtLeft) {
      return this.renderComponentLeftLabel();
    } else {
      return this.renderCheckbox(false);
    }
  }
}
