import * as React from "react";
import classnames from "classnames";

export interface SampleFeatureProps {
  title: string;
  message: string;
  onAlertParent: Function;
}

export interface SampleFeatureState {
  count: number;
}

export default class SampleFeature extends React.Component<SampleFeatureProps, SampleFeatureState> {
  constructor(props: SampleFeatureProps) {
    super(props);

    this.state = {
      count: 0
    };
  }
  returnTrueFunction(): boolean {
    return true;
  }

  onAlertParent = ():void => {
    this.props.onAlertParent();
  }

  onIncrement = (): void => {
    this.setState((prevState: any) => {
      const { count } = prevState;
      return {
        count: count + 1
      };
    });
  };

  render() {
    const { title, message } = this.props;
    const { count } = this.state;

    return (
      <div className="sampleFeature container has-text-centered">
        <div className="is-12">
          <div className="sampleFeatureTitle title">{title}</div>
        </div>
        <div className="is-12">
          <div className="sampleFeatureMessage notification">{message}</div>
        </div>
        <div className="is-4" />
        <div className="is-1">
          <div className="control">
            <div className="tags has-addons is-unselectable">
              <span
                className={classnames({
                  tag: true,
                  "is-invisible": count === 0
                })}
              >
                {count}
              </span>
              <a className="tag is-success" onClick={this.onIncrement}>
                Increment
              </a>
            </div>
          </div>
        </div>
        <div className="is-7" />
        <div className="is-1">
          <a className="button is-link is-outlined" onClick={this.onAlertParent}>Alert Parent</a>
        </div>
      </div>
    );
  }
}