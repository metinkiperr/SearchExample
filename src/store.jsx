import {combineReducers, createStore} from "redux";
import UserReducer from "./Reducers/UserReducer";

let store = createStore(
    combineReducers({
        UserReducer
    })
);

export default store;