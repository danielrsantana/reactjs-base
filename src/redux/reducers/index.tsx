import * as actionTypes from "../constants/actionTypes";
import * as shortid from 'shortid';

export type RootState = Readonly<{
    messages: Array<any>;
}>;

const initialState: RootState = {
    messages: new Array<any>()
};

export const reducer = (state = initialState, action: any = {}): RootState => {
    if (action.type === actionTypes.ADD_MESSAGE) {
        action.payload.id = shortid.generate();
        return Object.assign({}, state, {
            messages: state.messages.concat(action.payload)
        });
    } else if (action.type === actionTypes.REMOVE_MESSAGE) {
        console.log(action.payload);
        return Object.assign({}, state, {
            messages: state.messages.filter(item => item.id !== action.payload.id)
        });
    }
    return state;
};
