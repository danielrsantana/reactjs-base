import * as React from 'react';
// import { RootState } from '../../reducers/index'
import { connect } from 'react-redux';
import { string } from 'prop-types';

interface OwnProps {
  somePropFromParent?: string,
};

interface StateProps {
  framework: string,
};

interface DispatchProps {
  onSomeEvent?: () => void,
};

type ITestProps = OwnProps & StateProps & DispatchProps;

const TestComponent: React.SFC<ITestProps> = (props: ITestProps) => {
  const { framework } = props;
  console.log('framework', framework);

  return (
    <div>Awesome app created with {framework}</div>
  );
}

// const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
//   const { framework = 'bla bla' } = state;

//   return {
//     framework,
//   };
// };

export default connect<StateProps, DispatchProps, OwnProps>(null)(TestComponent);
