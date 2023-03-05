import { useEffect, useState } from "react";


// inside the custom hooks we can use the hooks
const useFetch  =(url) => {
    const [data , setData] = useState({});


    useEffect(()=>{
        getData();
    } , [])
    // triggered on specific scenario
        const getData = ()=> {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  
                  username: 'kminchelle',
                  password: '0lelplR',
                  // expiresInMins: 60, // optional
                })
              }).then((res)=> res.json().then(result=> {
                setData(result)
             }))
        }

    return  [data , getData];

}


export  default useFetch  ;