import * as React from "react";
import classnames from "classnames";

export interface ButtonComponentProps {
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
  text: string;
  onClick?: Function;
}

export default class ButtonComponent extends React.Component<
  ButtonComponentProps,
  {}
> {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const {
      isPrimary,
      isInfo,
      isSuccess,
      isWarning,
      isDanger,
      isRounded,
      isLoading,
      isDisabled,
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
      isActive,
      isFocused,
      isPulledRight,
      text
    } = this.props;

    return (
      <button
        className={classnames({
          buttonComponent: true,
          button: true,
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
        onClick={this.onClick}
        disabled={isDisabled ? true : false}
      >
        {text}
      </button>
    );
  }
}
