import * as React from "react";
import classnames from "classnames";
import InputTextComponent from "../../components/inputText/inputText.component";

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

    onAlertParent = (): void => {
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
                <div className="columns">
                    <div className="column is-12">
                        <div className="sampleFeatureTitle title">{title}</div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12">
                        <div className="sampleFeatureMessage notification">{message}</div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12">
                        <div className="notification has-text-left">
                            <InputTextComponent type="text"
                                placeHolder="Teste 1234"
                                label="Teste"
                                hasLabel={true}
                                hasIconLeft={true}
                                isHorizontal={true}
                                isInfo={true}
                                iconLeft="fas fa-envelope" />
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12 has-text-centered">
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
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-12 has-text-centered">
                        <a className="button is-link is-outlined" onClick={this.onAlertParent}>Alert Parent</a>
                    </div>
                </div>
            </div>
        );
    }
}