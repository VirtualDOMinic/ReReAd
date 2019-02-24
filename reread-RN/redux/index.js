import { combineReducers } from "redux";
import { addToStore } from "./reducers/addToStore";

export const reducer = combineReducers({ reflect: addToStore });