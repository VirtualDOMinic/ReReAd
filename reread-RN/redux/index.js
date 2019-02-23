import { combineReducers, createStore } from "redux";
import { addToStore } from "./reducers/addToStore";

const reducer = combineReducers({ reflect: addToStore });
export const store = createStore(reducer);
