import React, { useContext } from 'react';
import { AppContext } from '../context';



const Parent2 = (props)=> {
    console.log(props.message)
    const {userInfo} =  useContext(AppContext); // this is behaving like the consumer accessing the context
    console.log(userInfo , 'UserInfo')
     return (
    <div>{userInfo?.token ? 'SuccessFully Login': 'Please Login' }</div>
     )
}

export default Parent2;