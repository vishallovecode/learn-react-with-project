import { UPDATE_THEME, UPDATE_USER_INFO ,UPDATE_HEADER_THEME} from "./constant";

export const generalActions = (props) => {
  console.log("Hey this is the props:" ,props)
  return {
    updateUserInfo: (data) => {
      props.dispatch({ type: UPDATE_USER_INFO, data });
    }, 
    updateTheme: (theme)=> {
        props.dispatch({type:UPDATE_THEME ,theme})
    },
    updateHeaderTheme:(value)=>{
      props.dispatch({type:UPDATE_HEADER_THEME,value})
    }
  };
};


