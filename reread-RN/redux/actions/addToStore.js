import { bindActionCreators } from "redux";

export const ADD_REFLECTION = "ADD_REFLECTION";

export const addReflection = (reflection) => {
  return { type: ADD_REFLECTION, payload: reflection };
}
