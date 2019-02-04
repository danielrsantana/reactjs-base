import * as React from "react";
import classnames from "classnames";

export interface ModalComponentProps {
  button1Class?: string;
  button1Text?: string;
  button1Visible?: boolean;
  button2Class?: string;
  button2Text?: string;
  button2Visible?: boolean;
  isVisible: boolean;
  title: string;
  onModalClose?: Function;
  onButton1Clicked?: Function;
  onButton2Clicked?: Function;
  children?: React.ReactNode;
}

export interface ModalComponentState {
  isVisible: boolean;
}

export default class ModalComponent extends React.Component<
  ModalComponentProps,
  ModalComponentState
> {
  constructor(props: ModalComponentProps) {
    super(props);

    const { isVisible } = this.props;
    this.state = {
      isVisible: isVisible
    };
  }

  componentDidUpdate = (prevProps: ModalComponentProps): void => {
    const { isVisible: isVisiblePrevProps } = prevProps;
    const { isVisible: isVisibleProps } = this.props;
    const { isVisible } = this.state;
    if (isVisiblePrevProps !== isVisibleProps && isVisibleProps !== isVisible) {
      this.setState({ isVisible: isVisibleProps });
    }
  };

  onButton1Clicked = (event: any): void => {
    if (this.props.onButton1Clicked) {
      this.props.onButton1Clicked();
    }
  };

  onButton2Clicked = (event: any): void => {
    if (this.props.onButton2Clicked) {
      this.props.onButton2Clicked();
    }
  };

  onModalCloseRequested = (event: any): void => {
    this.setState({ isVisible: false });
    if (this.props.onModalClose) {
      this.props.onModalClose();
    }
  };

  render() {
    const {
      title,
      button1Class,
      button1Text,
      button1Visible,
      button2Class,
      button2Text,
      button2Visible
    } = this.props;

    const { isVisible } = this.state;

    return (
      <div
        className={classnames({
          modalComponent: true,
          modal: true,
          "is-active": isVisible
        })}
      >
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modalHeader modal-card-head">
            <p className="modalHeaderTitle modal-card-title">{title}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.onModalCloseRequested}
            />
          </header>
          <section className="modal-card-body">{this.props.children}</section>
          <footer className="modal-card-foot">
            <button
              className={`button buttonOne ${button1Class} ${
                button1Visible ? "" : "is-invisible"
              }`}
              onClick={this.onButton1Clicked}
            >
              {button1Text}
            </button>
            <button
              className={`button buttonTwo ${button2Class} ${
                button2Visible ? "" : "is-invisible"
              }`}
              onClick={this.onButton2Clicked}
            >
              {button2Text}
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
