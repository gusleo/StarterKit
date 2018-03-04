import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import helloWorld from "./helloWord";

export default combineReducers( {
    form: formReducer, // dont forget add this as redux-form reducer default
    helloWorld
} );
