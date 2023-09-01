import { generalReducer, generalStates } from ".";

const reducer = (state = generalStates, action) => {
  return {
    generalStates: generalReducer(state, action),
  };
};

export { generalStates, reducer };

// useReducer and useState are same both use for state management
// useReducer use for complex logic calcualtions  it stop un neccessary renddering
// it used for performance optimization c
