import { generalReducer, generalStates } from ".";
const reducer = (state = generalStates, action) => {
    return {
        generalStates: generalReducer(state, action)
    }
};

export { generalStates, reducer };