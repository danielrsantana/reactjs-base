import * as React from "react";
import classnames from "classnames";
import * as shortid from "shortid";
import * as common from "../common/constants.common";
import { DataItemModel } from "../common/dataItem.model";
import "./dropdown.component.scss";
// require("./dropdown.component.scss");

/**
 * DropDownComponent props interface representation
 * @interface
 * @param {string} label - (optional) Label to be displayed for the component
 * @param {string} labelPosition - (optional) Position of the label (top/left)
 * @param {Array<DataItemModel>} data - Data content of the component
 * @param {string} selectedValue - (optional) Initial selected item
 * @param {boolean} isPrimary - True/false representing if the component have primary style
 * @param {boolean} isInfo - True/false representing if the component have info style
 * @param {boolean} isSuccess - True/false representing if the component have success style
 * @param {boolean} isWarning - True/false representing if the component have warning style
 * @param {boolean} isDanger - True/false representing if the component have danger style
 * @param {boolean} isRounded - True/false representing if the component be rounded
 * @param {boolean} isLoading - True/false representing if the component have loading animation
 * @param {boolean} isDisabled - True/false representing if the component is disabled
 * @param {boolean} isWhite - True/false representing if the component is white
 * @param {boolean} isLight - True/false representing if the component is light
 * @param {boolean} isDark - True/false representing if the component is dark
 * @param {boolean} isBlack - True/false representing if the component is black
 * @param {boolean} isText - True/false representing if the component is text
 * @param {boolean} isLink - True/false representing if the component is link
 * @param {boolean} isSmall - True/false representing if the component is small
 * @param {boolean} isNormal - True/false representing if the component is normal
 * @param {boolean} isMedium - True/false representing if the component is medium
 * @param {boolean} isLarge - True/false representing if the component is large
 * @param {boolean} isFullwidtdh - True/false representing if the component will occupy the full width available
 * @param {boolean} isOutlined - True/false representing if the component is outlined
 * @param {boolean} isInverted - True/false representing if the component is inverted
 * @param {boolean} isHovered - True/false representing if the component is hovered
 * @param {boolean} isActive - True/false representing if the component is active
 * @param {boolean} isFocused - True/false representing if the component is focused
 * @param {boolean} isPulledRight - True/false representing if the component will be float right
 * @param {string} onSelectedItemChanged - Callback for the onSelectedItemChanged event
 */
export interface DropDownComponentProps {
  label?: string;
  labelPosition?: string;
  data: Array<DataItemModel>;
  selectedValue?: string;
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
  onSelectedItemChanged?: Function;
}

/**  DropDownComponent state interface representation
 * @param {string} selectedValue - (optional) Currently selected item
 */
export interface DropDownComponentState {
  isActive: boolean;
  selectedValue?: string;
}

/** CheckBoxComponent class */
export default class DropDownComponent extends React.Component<
  DropDownComponentProps,
  DropDownComponentState
> {
  constructor(props) {
    super(props);

    const { selectedValue } = this.props;

    this.state = {
      isActive: false,
      selectedValue: selectedValue
    };
  }

  onOpenCloseDropDown = (): void => {
    this.setState((prevState: DropDownComponentState) => ({
      isActive: !prevState.isActive
    }));
  };

  onSelectedItemChanged = (event: any): void => {
    this.setState({
      selectedValue: event.target.value,
      isActive: false
    });

    if (this.props.onSelectedItemChanged) {
      this.props.onSelectedItemChanged(event.target.value);
    }
  };

  renderDropdownLeftLabel = (): React.ReactNode => {
    const { label } = this.props;

    return (
      <div className="dropdownComponent field is-horizontal">
        <div className="field-label is-normal">
          {this.renderDropdownLabel(label)}
        </div>
        <div className="field-body">{this.renderDropdown(true)}</div>
      </div>
    );
  };

  renderDropdownLabel = (label?: string): React.ReactNode => {
    if (label) {
      return <label className="label">{label}</label>;
    }
  };

  renderDropdown = (isLabelAtLeft: boolean) => {
    const { isActive } = this.state;
    const {
      isPrimary,
      isInfo,
      isSuccess,
      isWarning,
      isDanger,
      isRounded,
      isLoading,
      isWhite,
      isLight,
      isDark,
      isBlack,
      isText,
      isLink,
      isSmall,
      isNormal,
      isMedium,
      isLarge,
      isFullwidtdh,
      isOutlined,
      isInverted,
      isHovered,
      isFocused,
      isPulledRight,
      label
    } = this.props;

    return (
      <div
        className={classnames({
          dropdownComponent: !isLabelAtLeft,
          field: true
        })}
      >
        {!isLabelAtLeft ? this.renderDropdownLabel(label) : null}
        <div
          className={classnames({
            control: true,
            select: true,
            "is-danger": isDanger,
            "is-primary": isPrimary,
            "is-info": isInfo,
            "is-warning": isWarning,
            "is-rounded": isRounded,
            "is-loading": isLoading,
            "is-success": isSuccess,
            "is-white": isWhite,
            "is-light": isLight,
            "is-dark": isDark,
            "is-black": isBlack,
            "is-text": isText,
            "is-link": isLink,
            "is-small": isSmall,
            "is-normal": isNormal,
            "is-medium": isMedium,
            "is-large": isLarge,
            "is-fullwidth": isFullwidtdh,
            "is-outlined": isOutlined,
            "is-inverted": isInverted,
            "is-hovered": isHovered,
            "is-active": isActive,
            "is-focused": isFocused,
            "ís-pulled-right": isPulledRight
          })}
        >
          {this.renderDropdownItems()}
        </div>
      </div>
    );
  };

  renderDropdownItems = (): React.ReactNode => {
    const { data, isDisabled } = this.props;
    const { selectedValue } = this.state;
    const dropdownItems: Array<React.ReactNode> = [];

    if (data) {
      data.forEach(item => {
        dropdownItems.push(
          <option value={item.value} key={shortid.generate()}>
            {item.text}
          </option>
        );
      });
    }

    return (
      <select
        value={selectedValue}
        onChange={this.onSelectedItemChanged}
        disabled={isDisabled}
      >
        {dropdownItems}
      </select>
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
      return this.renderDropdownLeftLabel();
    } else {
      return this.renderDropdown(false);
    }
  }
}
