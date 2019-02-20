import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { AlertModel } from "../../components/alert/alert.model";
import { addMessage } from "../../redux/actions";
import ButtonComponent from "../../components/button/button.component";
import * as alertUtils from "../../components/alert/alert.utils";

export interface TestAreaProps {
  compiler: string;
  framework: string;
  bundler: string;
  messages: Array<AlertModel>;
  history: any;
  location: any;
  match: any;
  addMessage: Function;
}

const mapStateToProps = (state: any) => {
  return {
    compiler: state.compiler,
    framework: state.framework,
    bundler: state.bundler,
    messages: state.messages
  };
};

function mapDispatchToProps(dispatch: any) {
  return {
    addMessage: (message: Array<AlertModel>) => dispatch(addMessage(message))
  };
}

class TestAreaPage extends React.Component<TestAreaProps, {}> {
  onAddMessage = () => {
    const alert: AlertModel = alertUtils.generateMessage(
      "just a test",
      "top",
      "right",
      "success",
      5000
    );

    this.props.addMessage(alert);
  };

  renderMessages = () => {
    const { messages } = this.props;
    const list: Array<any> = [];
    messages.forEach(item => {
      list.push(<div>{item.text}</div>);
    });

    return <div>{list}</div>;
  };

  render() {
    const { compiler } = this.props;
    return (
      <div className="sampleFeature">
        Test Area.... {compiler}
        {this.renderMessages()}
        <ButtonComponent text="add message" onClick={this.onAddMessage} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TestAreaPage)
);
