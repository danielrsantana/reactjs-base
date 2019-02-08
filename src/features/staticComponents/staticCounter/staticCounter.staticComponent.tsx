import * as React from "react";
import classnames from "classnames";

export interface StaticCounterComponentState {
  count: number;
}

export default class StaticCounterComponent extends React.Component<
  {},
  StaticCounterComponentState
> {
  constructor(props: StaticCounterComponentState) {
    super(props);

    this.state = {
      count: 0
    };
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
    const { count } = this.state;

    return (
      <div className="control">
        <div className="tags has-addons is-unselectable is-narrow">
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
    );
  }
}
