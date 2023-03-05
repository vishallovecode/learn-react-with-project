import { UPDATE_THEME, UPDATE_USER_INFO } from "../actions/constant";

export const generalStates = {
  theme: 'black',
  userInfo: {},
};

export const generalReducer = (state, action) => {
  console.log("This is generalReducer" , state , 'action==>' , action)
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.data,
      };
    case UPDATE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      throw new Error("Unexpected action");
  }
};
