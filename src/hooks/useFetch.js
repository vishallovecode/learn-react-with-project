import { useState } from "react";

const useFetch  = () => {
const [data , setData] = useState("hey");

const callData = (url , payload)=> {
    console.log("hey ")
    fetch(url).then((res)=>res.json().then((res)=>{
        setData(res.data)
    }))
}

return [data , setData , callData];
}




export default useFetch;



