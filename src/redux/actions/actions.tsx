import * as actionTypes from '../constants/actionTypes';

export function addMessage(payload) {
  return { type: actionTypes.ADD_MESSAGE, payload };
}

export function removeMessage(payload) {
    return { type: actionTypes.REMOVE_MESSAGE, payload };
}
