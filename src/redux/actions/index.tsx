import { testAction } from './test.actions';
import * as actionTypes from '../constants/actionTypes';

interface IReduxAction {
  type: string,
  payload: any,
};

export {
  testAction,
  IReduxAction,
};

export function addMessage(payload:any) {
    return { type: actionTypes.ADD_MESSAGE, payload };
}

export function removeMessage(payload:any) {
    return { type: actionTypes.REMOVE_MESSAGE, payload };
}