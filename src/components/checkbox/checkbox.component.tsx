import * as React from "react";
import classnames from "classnames";
import * as shortid from "shortid";

const LEFT_POSITION: string = "left";

export interface CheckBoxComponentProps {
    label?: string;
    labelPosition?: string;
    text?: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    onCheckedChanged?: Function;
}

export interface CheckBoxComponentState {
    isChecked?: boolean;
}

export default class CheckBoxComponent extends React.Component<
    CheckBoxComponentProps,
    CheckBoxComponentState
    > {
    constructor(props) {
        super(props);

        const { isChecked } = this.props;

        this.state = {
            isChecked: isChecked,
        };
    }

    onCheckedChanged = () => {
        let newCheckedState: boolean = false;
        this.setState((prevProps: CheckBoxComponentProps) => {
            newCheckedState = !prevProps.isChecked;
            return { isChecked: newCheckedState }
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
            <div className={classnames({
                checkBoxComponent: !isLabelAtLeft,
                field: true,
                "is-expanded": true
            })}
            >
                {this.renderComponentLabel()}
                <label className="checkbox">
                    <input type="checkbox" />
                    {text ? text : this.props.children}
                </label>
            </div>
        );
    }

    render() {
        const { label, labelPosition } = this.props;

        const isLabelAtLeft: boolean =
            label && labelPosition && labelPosition.toLowerCase() === LEFT_POSITION
                ? true
                : false;

        if (isLabelAtLeft) {
            return this.renderComponentLeftLabel();
        } else {
            return this.renderCheckbox(false);
        }
    }
}
