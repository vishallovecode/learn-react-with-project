import { useEffect, useState } from "react";



const Parent1 = (props)=> {

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
            props.setUserAuth(true)
          });
    }, [])

return  (
    <div>This is Parent1</div>
)
}


export default Parent1;
