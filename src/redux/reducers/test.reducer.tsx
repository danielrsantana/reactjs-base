import { testActions } from '../../common/constants/actionTypes.constants';

export interface TestState {
  readonly framework: string,
};

const initialState: TestState = {
  framework: 'React',
};

export const testReducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case testActions.TEST_ACTION_TYPE:
      return Object.assign({}, state, {
        framework: action.payload,
      });

    default:
      return state;
  }
}