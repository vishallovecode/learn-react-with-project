import React, { useContext } from 'react';
import { AppContext } from '../../App';


const Parent2 = (props)=> {
    const context =  useContext(AppContext);
    console.log(context , 'contexs')
     return (
    <div>{context?.isAuthenticate ? 'SuccessFully Login': 'Please Login' }</div>
     )
}

export default Parent2;