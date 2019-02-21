import * as actionTypes from "../constants/actionTypes";
import update from "immutability-helper";
import { AlertModel } from "../../components/alert/alert.model";

export type RootState = Readonly<{
  messages: Array<AlertModel>;
  compiler: string;
  framework: string;
  bundler: string;
}>;

const initialState: RootState = {
  messages: [],
  compiler: 'compiler',
  framework: '[framework]',
  bundler: 'bundler'
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
