export const addToStore = (state = { reflect: { added: false } }, action) => {
  console.log('ACTION TYPE', action.type);
  switch (action.type) {
    case "ADD_REFLECTION":
      return {
        added: true
      };
    default:
      return state;
  }
}
