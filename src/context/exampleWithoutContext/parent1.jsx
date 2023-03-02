import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { StoreContext } from "../store";



const Parent1 = (props)=> {

    const {actions}  = useContext(StoreContext);
    useEffect(()=>{
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'kminchelle',
              password: '0lelplR',
              // expiresInMins: 60, // optional
            })
          })
          .then(res => res.json())
          .then((data)=>{
            console.log(data , 'data')
            actions.generalActions.updateUserInfo(data);
          });
    }, [])

return  (
    <div>This is Parent1</div>
)
}


export default Parent1;
