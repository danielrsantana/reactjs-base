import * as React from "react";
import classnames from "classnames";

/**
 * ButtonComponent interface representation
 * @interface
 * @param {boolean} isPrimary - True/false representing if the button have primary style
 * @param {boolean} isInfo - True/false representing if the button have info style
 * @param {boolean} isSuccess - True/false representing if the button have success style
 * @param {boolean} isWarning - True/false representing if the button have warning style
 * @param {boolean} isDanger - True/false representing if the button have danger style
 * @param {boolean} isRounded - True/false representing if the button be rounded
 * @param {boolean} isLoading - True/false representing if the button have loading animation
 * @param {boolean} isDisabled - True/false representing if the button is disabled
 * @param {boolean} isWhite - True/false representing if the button is white
 * @param {boolean} isLight - True/false representing if the button is light
 * @param {boolean} isDark - True/false representing if the button is dark
 * @param {boolean} isBlack - True/false representing if the button is black
 * @param {boolean} isText - True/false representing if the button is text
 * @param {boolean} isLink - True/false representing if the button is link
 * @param {boolean} isSmall - True/false representing if the button is small
 * @param {boolean} isNormal - True/false representing if the button is normal
 * @param {boolean} isMedium - True/false representing if the button is medium
 * @param {boolean} isLarge - True/false representing if the button is large
 * @param {boolean} isFullwidtdh - True/false representing if the button will occupy the full width available
 * @param {boolean} isOutlined - True/false representing if the button is outlined
 * @param {boolean} isInverted - True/false representing if the button is inverted
 * @param {boolean} isHovered - True/false representing if the button is hovered
 * @param {boolean} isActive - True/false representing if the button is active
 * @param {boolean} isFocused - True/false representing if the button is focused
 * @param {boolean} isPulledRight - True/false representing if the button will be float right
 * @param {string} text - Button text
 * @param {boolean} onClick - Callback for the onClick event
 */
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

/** Button component */
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
