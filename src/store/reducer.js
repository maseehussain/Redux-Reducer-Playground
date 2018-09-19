const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.asign({}, state);
      newState.counter = state.counter.val;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.val
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.val
      };
    case "STORE_RESULT":
      return {
        results: state.counter
      };
    default:
      return state;
  }
};

export default reducer;
