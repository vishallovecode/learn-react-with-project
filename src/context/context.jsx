import { createContext, useState } from "react"

export const AppContext = createContext();
export const AppContextProvider = (props)=> {
    const [userInfo , setUserInfo] = useState();

   const value = {userInfo , setUserInfo} ;
return  (
    <AppContext.Provider value = {value}>
        {props.children}
    </AppContext.Provider>
)
}

