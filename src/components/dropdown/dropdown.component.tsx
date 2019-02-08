import * as React from "react";
import classnames from "classnames";
import * as shortid from "shortid";

const LEFT_POSITION: string = "left";

export interface DropDownComponentProps {
  label: string;
  labelPosition: string;
  data: Array<any>;
  selectText: string;
  onSelectedItemChanged?: Function;
}

export interface DropDownComponentState {
  isActive: boolean;
  selectedValue: string;
}

export default class DropDownComponent extends React.Component<
  DropDownComponentProps,
  DropDownComponentState
> {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      selectedValue: ""
    };
  }
  onClick = () => {
    if (this.props.onSelectedItemChanged) {
      this.props.onSelectedItemChanged();
    }
  };

  onOpenCloseDropDown = () => {
    this.setState((prevState: DropDownComponentState) => ({
      isActive: !prevState.isActive
    }));
  };

  renderLabel = (): React.ReactNode => {
    const { label, labelPosition } = this.props;

    if (label) {
      const isLabelAtLeft: boolean =
        label && labelPosition && labelPosition.toLowerCase() === LEFT_POSITION
          ? true
          : false;

      if (isLabelAtLeft) {
        return <label className="label">{label}</label>;
      } else {
        return <label className="label">{label}</label>;
      }
    }
  };

  renderDropdownLeftLabel = () => {
    const { label } = this.props;

    return (
      <div className="inputTextComponent field is-horizontal">
        <div className="field-label is-normal">{this.renderDropdownLabel}</div>
        <div className="field-body">{this.renderDropdown(true)}</div>
      </div>
    );
  };

  renderDropdownLabel = (): React.ReactNode => {
    const { label } = this.props;

    if (label) {
      return <label className="label">{label}</label>;
    }
  };

  renderDropdown(isLabelAtLeft: boolean) {
    const { isActive } = this.state;
    const { selectText } = this.props;

    return (
      <div
        className={classnames({
          inputTextComponent: !isLabelAtLeft,
          field: true,
          "is-expanded": true
        })}
      >
        {this.renderDropdownLabel()}
        <div className="control is-fullwidth">
          <div
            className={classnames({
              dropdown: true,
              "is-active": isActive
            })}
          >
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={this.onOpenCloseDropDown}
              >
                <span>{selectText}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              {this.renderDropdownItems()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSelectedItemChanged = (item: any) => {
    this.setState({
      selectedValue: item.value
    });
  };

  renderDropdownItems = (): React.ReactNode => {
    const { data } = this.props;
    const { selectedValue } = this.state;

    const dropdownItems: Array<React.ReactNode> = [];

    if (data) {
      data.forEach(item => {
        dropdownItems.push(
          <a
            href="#"
            className={classnames({
              "dropdown-item": true,
              "is-active": selectedValue === item.value
            })}
            key={shortid.generate()}
            onClick={item => this.onSelectedItemChanged(item)}
          >
            {item.text}
          </a>
        );
      });
    }

    return <div className="dropdown-content">{dropdownItems}</div>;
  };

  render() {
    const { label, labelPosition } = this.props;

    const isLabelAtLeft: boolean =
      label && labelPosition && labelPosition.toLowerCase() === LEFT_POSITION
        ? true
        : false;

    if (isLabelAtLeft) {
      return this.renderDropdownLeftLabel();
    } else {
      return this.renderDropdown(false);
    }
  }
}
