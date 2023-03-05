import { useEffect, useReducer, useState } from "react"


const reducer = (state ,action)=> {
    switch(action.type) {
        case 'inc':
        return {
            ...state ,
            counter: state.counter+1,
        }
        case 'desc': 
            return {
                ...state ,
                counter: state.counter-1,
            }
        default: {
            return  {
                ...state
            }
        }
    }
}

const UseStateVsUseReducer = () => {

    const [state , dispatchCounter] = useReducer(reducer ,  {counter:0})

    return (
<div>
    <h1>Counter: {state.counter}</h1>
    <button onClick={()=> dispatchCounter({type: 'inc'})}>Increase</button>
    <button onClick={()=> dispatchCounter({type: 'desc'})}>Decrease</button>
</div>
    )
}

export default  UseStateVsUseReducer;





// hooks

// // functional components
// useState 
// useEffect
// useReducer 
// useContext




// custom hooks
// useCallback 
// useMemo 