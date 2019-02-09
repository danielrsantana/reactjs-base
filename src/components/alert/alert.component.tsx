import * as React from "react";
import classnames from "classnames";
require("./alert.component.scss");

export interface AlertComponentProps {
    isPrimary?: boolean;
    isInfo?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    isDanger?: boolean;
    isRounded?: boolean;
    isLoading?: boolean;
    message: string;
    onClick?: Function;
}

export default class AlertComponent extends React.Component<
    AlertComponentProps,
    {}
    > {

    onAlertClick = (event): void => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }
    render() {
        const {
            isPrimary,
            isInfo,
            isSuccess,
            isWarning,
            isDanger,
            isRounded,
            isLoading,
            message
        } = this.props;

        return (
            <div className="alertComponent" onClick={this.onAlertClick}>
                <div
                    className={classnames({
                        alertComponentMessage: true,
                        "is-danger": isDanger,
                        "is-primary": isPrimary,
                        "is-info": isInfo,
                        "is-warning": isWarning,
                        "is-rounded": isRounded,
                        "is-loading": isLoading,
                        "is-success": isSuccess
                    })}
                >
                    {message}
                </div>
            </div>
        );
    }
}
