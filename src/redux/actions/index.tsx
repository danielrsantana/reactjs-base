import * as actionTypes from "../constants/actionTypes";

export function addMessage(payload: any) {
  return { type: actionTypes.ADD_MESSAGE, payload };
}

export function removeMessage(payload: any) {
  return { type: actionTypes.REMOVE_MESSAGE, payload };
}