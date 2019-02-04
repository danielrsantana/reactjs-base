import * as React from "react";
import classnames from "classnames";

export interface InputTextComponentProps {
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
    hasIconLeft?: boolean;
    hasIconRight?: boolean;
    iconLeft?: string;
    iconRight?: string;
    hasLabel?: boolean;
    label: string;
    placeHolder?: string;
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

    renderInputLabel() {
        const {
            isHorizontal,
            isNormal,
            isVertical,
            hasLabel,
            label,
        } = this.props;

        if (hasLabel) {
            return (
                <div className={classnames({
                    'field-label': true,
                    'is-normal': true,
                })} >
                    <label className="label">{label}</label>
                </div>);
        }
    }

    render() {
        const {
            isHorizontal,
            isNormal,
            isVertical,
            hasIconLeft,
            hasIconRight,
            iconLeft,
            iconRight,
            hasLabel,
            isPrimary,
            isInfo,
            isSuccess,
            isWarningy,
            isDanger,
            isSmally,
            isMedium,
            isLarge,
            isRounded,
            isLoading,
            isDisabled,
            isIconSmall,
            isIconMedium,
            isIconLarge,
            isLeft,
            isRight,
            label,
            placeHolder,
            type,
        } = this.props;

        const { value } = this.state;

        return (
            <div className={classnames({
                inputText: true,
                'field': true,
                'is-horizontal': isHorizontal,
                'is-normal': isNormal,
                'is-vertical': isVertical,
                'has-icons-left': hasIconLeft,
                'is-has-icons-right': hasIconRight
            })}>
                {this.renderInputLabel()}
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className={classnames({
                                input: true,
                                'is-primary': isPrimary,
                                'is-info': isInfo,
                                'is-success': isSuccess,
                                'is-warning': isWarningy,
                                'is-danger': isDanger,
                                'is-small': isSmally,
                                'is-medium': isMedium,
                                'is-large': isLarge,
                                'is-rounded': isRounded,
                                'is-loading': isLoading,
                                'is-disabled': isDisabled,
                            })}
                                type={type}
                                placeholder={placeHolder}
                                value={value}
                            />
                            <span className={classnames({
                                icon: true,
                                'is-small': isIconSmall,
                                'is-medium': isIconMedium,
                                'is-large': isIconLarge,
                                'is-left': isLeft,
                            })} >
                                <i className={iconLeft}></i>
                            </span>
                            <span className={classnames({
                                icon: true,
                                'is-small': isIconSmall,
                                'is-medium': isIconMedium,
                                'is-large': isIconLarge,
                                'is-right': isRight,
                            })} >
                                <i className={iconRight}></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div >
        );
    }
}
