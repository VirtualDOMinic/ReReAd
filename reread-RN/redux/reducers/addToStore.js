export function addToStore(state = {}, action) {
  switch (action.type) {
    case "ADD_REFLECTION":
      return {
        ...state,
        added: true
      };
    default:
      return state;
  }
}
