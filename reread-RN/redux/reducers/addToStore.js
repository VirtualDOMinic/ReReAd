const userReflection = {
  version: 0,
  title: "",
  type: "bad",
  questionsAnswers: {
    shortTerm: [],
    later: [],
    longTerm: [],
    alternatives: []
  }
};

export const addToStore = (state = [], action) => {
  console.log('state', state)
  switch (action.type) {
    case "ADD_REFLECTION":
      return [...state, action.payload]
    default:
      return state;
  }
}
