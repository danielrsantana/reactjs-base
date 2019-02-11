import * as React from "react";
import classnames from "classnames";
import * as shortid from "shortid";
require("./radiobutton.component.scss");

const LEFT_POSITION: string = "left";

export interface RadioButtonComponentProps {
    label?: string;
    labelPosition?: string;
    data?: Array<any>;
    selectedValue?: string;
    onSelectedItemChanged?: Function;
}

export interface RadioButtonComponentState {
    selectedValue?: string;
}

export default class RadioButtonComponent extends React.Component<
    RadioButtonComponentProps,
    RadioButtonComponentState
    > {
    constructor(props) {
        super(props);

        const { selectedValue } = this.props;

        this.state = {
            selectedValue: selectedValue,
        };
    }

    onSelectedItemChanged = (item: any) => {
        this.setState({
            selectedValue: item.value,
        });

        if (this.props.onSelectedItemChanged) {
            this.props.onSelectedItemChanged(item);
        }
    };

    renderComponentLeftLabel = (): React.ReactNode => {
        const { label } = this.props;

        return (
            <div className="radioButtonComponent field is-horizontal">
                <div className="field-label">{this.renderComponentLabel(label)}</div>
                <div className="field-body">{this.renderRadioButton(true)}</div>
            </div>
        );
    };

    renderComponentLabel = (label?: string): React.ReactNode => {
        if (label) {
            return <label className="label">{label}</label>;
        }
    };

    renderRadioButton(isLabelAtLeft: boolean) {
        const radioButtonList: Array<React.ReactNode> = [];
        const { label, data } = this.props;
        const { selectedValue } = this.state;

        if (data && data.length > 0) {
            data.forEach(item => {
                radioButtonList.push(
                    <label className="radio" key={shortid.generate()}>
                        <input type="radio" name={item.name}
                            checked={item.value === selectedValue}
                            disabled={item.isDisabled}
                            onChange={() => this.onSelectedItemChanged(item)} />
                        <span>{item.text}</span>
                    </label>
                );
            });
        }

        return (
            <div
                className={classnames({
                    radioButtonComponent: !isLabelAtLeft,
                    field: true
                })}
            >
                {!isLabelAtLeft ? this.renderComponentLabel(label) : null}
                <div className="control">
                    {radioButtonList}
                </div>
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
            return this.renderRadioButton(false);
        }
    }
}
