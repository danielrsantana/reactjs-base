import * as React from "react";
import classnames from "classnames";
import * as shortid from "shortid";

const LEFT_POSITION: string = "left";

export interface DropDownComponentProps {
    label: string;
    labelPosition: string;
    data: Array<any>;
    selectText: string;
    selectedValue?: string;
    onSelectedItemChanged?: Function;
}

export interface DropDownComponentState {
    isActive: boolean;
    selectedValue?: string;
    selectText: string;
}

export default class DropDownComponent extends React.Component<
    DropDownComponentProps,
    DropDownComponentState
    > {
    constructor(props) {
        super(props);

        const { selectText, selectedValue } = this.props;

        this.state = {
            isActive: false,
            selectedValue: selectedValue,
            selectText: selectText,
        };
    }

    onOpenCloseDropDown = () => {
        this.setState((prevState: DropDownComponentState) => ({
            isActive: !prevState.isActive
        }));
    };

    onSelectedItemChanged = (item: any) => {
        this.setState({
            selectedValue: item.value,
            isActive: false,
            selectText: item.text
        });

        if (this.props.onSelectedItemChanged) {
            this.props.onSelectedItemChanged(item);
        }
    };

    renderDropdownLeftLabel = () => {
        const { label } = this.props;

        return (
            <div className="inputTextComponent field is-horizontal">
                <div className="field-label is-normal">{this.renderDropdownLabel(label)}</div>
                <div className="field-body">{this.renderDropdown(true)}</div>
            </div>
        );
    };

    renderDropdownLabel = (label?: string): React.ReactNode => {
        if (label) {
            return <label className="label">{label}</label>;
        }
    };

    renderDropdown(isLabelAtLeft: boolean) {
        const { selectText, isActive } = this.state;

        return (
            <div
                className={classnames({
                    inputTextComponent: !isLabelAtLeft,
                    field: true,
                })}
            >
                {!isLabelAtLeft ? this.renderDropdownLabel() : null}
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
                        onClick={() => this.onSelectedItemChanged(item)}
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
