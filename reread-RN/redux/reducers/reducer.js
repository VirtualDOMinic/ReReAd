import { combineReducers } from "redux";

const INITIAL_STATE = {};

const reflectReducer = (state = INTIIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  reflections: reflectReducer
});
