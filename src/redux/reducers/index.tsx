import * as actionTypes from "../constants/actionTypes";

export type RootState = Readonly<{
  messages: Array<string>;
}>;

const initialState: RootState = {
  messages: new Array<string>()
};

export const reducer = (state = initialState, action: any = {}): RootState => {
  if (action.type === actionTypes.ADD_MESSAGE) {
    return Object.assign({}, state, {
      messages: state.messages.concat(action.payload)
    });
  }
  return state;
};
