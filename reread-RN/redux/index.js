import { combineReducers, createStore } from "redux";
import { addToStore } from "./reducers/addToStore";

const reducer = combineReducers({ addToStore, todos });
export const store = createStore(reducer);
