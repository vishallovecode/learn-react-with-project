import { generalActions } from './generalActions'

export const useActions = (state, dispatch) => {
    console.log('this is my useActions' ,state , dispatch)
    return {
        generalActions: generalActions({ state, dispatch }),
    }
};