import { testActions } from '../../common/constants/actionTypes.constants';
import { IReduxAction } from './index';


export const testAction = (payload: object): IReduxAction => {
  return {
    type: testActions.TEST_ACTION_TYPE,
    payload: 'React with typescript',
  };
};
