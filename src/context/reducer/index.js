import { UPDATE_THEME, UPDATE_USER_INFO ,UPDATE_HEADER_THEME} from "../actions/constant";

export const generalStates = {
  theme: 'black',
  userInfo: {},
  headerTheme:'white'
};

export const generalReducer = (state, action) => {
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
    case UPDATE_HEADER_THEME:
      return {
        ...state,
        headerTheme: action.value,
      };
    default:
      throw new Error("Unexpected action");
  }
};
