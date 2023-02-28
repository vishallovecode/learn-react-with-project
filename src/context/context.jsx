import { createContext, useState } from "react"

export const AppContext = createContext();
export const AppContextProvider = (props)=> {
    const [userInfo , setUserInfo] = useState();
   
    
    const [theme , setTheme] =  useState('white');

    const value = {userInfo , setUserInfo , theme , setTheme} ;
return  (
    <AppContext.Provider value = {value}>
        {props.children}
    </AppContext.Provider>
)
}


// create one more state and the state setter and access that inside the
// theme setter