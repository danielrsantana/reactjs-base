import { testReducer, TestState } from "./test.reducer";
import * as actionTypes from "../constants/actionTypes";
import update from "immutability-helper";
import { AlertModel } from "../../components/alert/alert.model";

export { testReducer, TestState };

export type RootState = Readonly<{
  messages: Array<AlertModel>;
  testReducer: TestState;
}>;

const initialState: RootState = {
  messages: new Array<AlertModel>(),
  testReducer: {
    framework: "React"
  }
};

export const reducer = (state = initialState, action: any = {}): RootState => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return update(state, {
        messages: { $push: [action.payload] }
      });
    case actionTypes.REMOVE_MESSAGE:
      return update(state, {
        messages: {
          $set: state.messages.filter(item => !item.id.match(action.payload.id))
        }
      });
  }

  return state;
};
