export const addToStore = (state = {}, action) => {
  console.log('ACTION TYPE', action.type);
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
