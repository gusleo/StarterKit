// @flow
import { RECEIVE_HELLO_WORLD } from "./action";

type ActionType = {
    type: string,
    text: string
};

export default ( state: string = "", { type, text = "" }: ActionType ) => {
    switch ( type ) {
    case RECEIVE_HELLO_WORLD:
        return text;
    default:
        return state;
    }
};
