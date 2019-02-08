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
}

export default class AlertComponent extends React.Component<
  AlertComponentProps,
  {}
> {
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
      <div className="alertComponent">
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
