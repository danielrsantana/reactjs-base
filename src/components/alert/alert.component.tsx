import * as React from "react";
import classnames from "classnames";
import * as shortid from 'shortid';
import { AlertModel } from "./alert.model";
require("./alert.component.scss");

export interface AlertComponentProps {
    alert: AlertModel;
    onClick?: Function;
    onTimeElapsed?: Function;
}

export default class AlertComponent extends React.Component<
    AlertComponentProps,
    {}
    > {
    constructor(props) {
        super(props);

        this.onAlertClick = this.onAlertClick.bind(this);
    }

    componentDidMount(): void {
        const { alert } = this.props;

        if (alert.interval != null && alert.interval > 0) {
            setTimeout(() => {
                if (this.props.onTimeElapsed != null) {
                    this.props.onTimeElapsed(alert);
                }
            }, alert.interval);
        }
    }

    onAlertClick(event): void {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        const { alert } = this.props;

        return (
            <div className="alertComponent" onClick={this.onAlertClick}>
                <div
                    className={classnames({
                        alertComponentMessage: true,
                        "is-danger": alert.type === 'error',
                        "is-info": alert.type === 'info',
                        "is-warning": alert.type === 'warning',
                        "is-success": alert.type === 'success'
                    })}
                >
                    {alert.text}
                </div>
            </div>
        );
    }
}
