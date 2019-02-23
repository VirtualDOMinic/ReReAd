export const ADD_REFLECTION = "ADD_REFLECTION";

export function addReflection(textArr) {
  console.log("addreflectionerino");
  return { type: ADD_REFLECTION, textArr };
}
