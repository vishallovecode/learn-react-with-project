import { useState } from "react";
import useFetch from "../custom-hooks/useFetch";


const  convertToString =(s) => {

const  [data] = useFetch();
    // hooks inside normal function

    const [state  , setState] = useState(''); 
    return s.toString();
}