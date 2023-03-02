import { UPDATE_THEME, UPDATE_USER_INFO } from "./constant";

export const generalActions = (props) => {
  return {
    updateUserInfo: (data) => {
      props.dispatch({ type: UPDATE_USER_INFO, data });
    }, 
    updateTheme: (theme)=> {
        props.dispatch({type:UPDATE_THEME ,theme})
    }
  };
};


