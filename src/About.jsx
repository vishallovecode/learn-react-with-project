import React from "react";
import useFetch from "./hooks/useFetch";

const About  = () => {
    const  [data, setData , callApi] = useFetch();
    console.log(data)
    return (
        <div>
            <span>{data?.title}</span>
                <button onClick={()=>callApi("https://jsonplaceholder.typicode.com/todos/1")}>Call Api</button>
        </div>
    )
}

export default About;