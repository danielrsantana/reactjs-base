import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import { testAction, IReduxAction } from "../../redux/actions";
import ButtonComponent from "../button/button.component";

interface Props extends StateProps, DispatchProps {
  somePropFromParent?: string;
  history?: any;
}

interface StateProps {
  framework: string;
}

interface DispatchProps {
  testAction: typeof testAction;
}
export class TestComponent extends React.Component<Props, StateProps> {
  onOpenComponentsViewerClick = () => {
    const { history } = this.props;
    history.push("/componentsViewer");
  };

  render() {
    const { framework, testAction } = this.props;
    console.log("framework", framework);

    return (
      <React.Fragment>
        <div>Awesome app created with {framework}</div>
        <button onClick={testAction}>Change frameworks</button>
        <ButtonComponent
          text="Components Viewer"
          isInfo={true}
          onClick={this.onOpenComponentsViewerClick}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  const {
    testReducer: { framework = "bla bla" }
  } = state;

  return {
    framework
  };
};

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<IReduxAction>
): DispatchProps => {
  const { bindActionCreators } = Redux;

  return bindActionCreators(
    {
      testAction
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);
