import { useState } from "react";

const useCounter = (value) => {
    const [timer , setTimer] = useState(value);
    return  [timer , setTimer];
}

export default useCounter;