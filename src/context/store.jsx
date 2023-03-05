

import React, { createContext, useReducer } from "react";
import { useActions } from "./actions/actions";
import { generalStates } from "./reducer";
import { reducer } from "./reducer/reducer";

const StoreContext = createContext(generalStates);
const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, generalStates);
    const actions = useActions(state, dispatch); // custom hooks
    console.log('store' , state , "actions==>" , actions)
    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    );

};

export { StoreContext, StoreProvider };





// arcitecture 
