import * as actionTypes from '../constants/actionTypes';

export function addMessage(payload) {
  return { type: actionTypes.ADD_MESSAGE, payload };
}
