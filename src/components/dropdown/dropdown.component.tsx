import * as React from "react";
import classnames from "classnames";
import * as shortid from "shortid";
require("./dropdown.component.scss");

const LEFT_POSITION: string = "left";

export interface DropDownComponentProps {
    label: string;
    labelPosition: string;
    data: Array<any>;
    selectedValue?: string;
    onSelectedItemChanged?: Function;
    isFullWidth?: boolean;
}

export interface DropDownComponentState {
    isActive: boolean;
    selectedValue?: string;
}

export default class DropDownComponent extends React.Component<
    DropDownComponentProps,
    DropDownComponentState
    > {
    constructor(props) {
        super(props);

        const { selectedValue } = this.props;

        this.state = {
            isActive: false,
            selectedValue: selectedValue,
        };

        this.onOpenCloseDropDown = this.onOpenCloseDropDown.bind(this);
        this.onSelectedItemChanged = this.onSelectedItemChanged.bind(this);
        this.renderDropdownLeftLabel = this.renderDropdownLeftLabel.bind(this);
        this.renderDropdown = this.renderDropdown.bind(this);
        this.renderDropdownItems = this.renderDropdownItems.bind(this);
    }

    onOpenCloseDropDown() {
        this.setState((prevState: DropDownComponentState) => ({
            isActive: !prevState.isActive
        }));
    };

    onSelectedItemChanged(event: any) {
        this.setState({
            selectedValue: event.target.value,
            isActive: false,
        });

        if (this.props.onSelectedItemChanged) {
            this.props.onSelectedItemChanged(event.target.value);
        }
    };

    renderDropdownLeftLabel() {
        const { label } = this.props;

        return (
            <div className="inputTextComponent field is-horizontal">
                <div className="field-label is-normal">{this.renderDropdownLabel(label)}</div>
                <div className="field-body">{this.renderDropdown(true)}</div>
            </div>
        );
    };

    renderDropdownLabel(label?: string): React.ReactNode {
        if (label) {
            return <label className="label">{label}</label>;
        }
    };

    renderDropdown(isLabelAtLeft: boolean) {
        const { isActive } = this.state;
        const { label, isFullWidth } = this.props;

        return (
            <div
                className={classnames({
                    dropdownComponent: !isLabelAtLeft,
                    field: true,
                })}
            >
                {!isLabelAtLeft ? this.renderDropdownLabel(label) : null}
                <div className={classnames({
                    control: true,
                    select: true,
                    'is-fullwidth': (isFullWidth !== false)
                })}>
                    {this.renderDropdownItems()}
                </div>
            </div>
        );
    }

    renderDropdownItems(): React.ReactNode {
        const { data } = this.props;
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

        return <select
            value={selectedValue}
            onChange={this.onSelectedItemChanged}>
            {dropdownItems}
        </select>;
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
