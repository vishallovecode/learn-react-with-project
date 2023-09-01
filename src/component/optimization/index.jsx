
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from 'react-dom'
import Child from "./child";

const Optimization = ()=> {
    const ref = useRef(0);
const [c1, setC1]= useState(0);
const [c2, setC2]= useState(0);
const [c3, setC3]= useState(0);
const [c4, setC4]= useState(0);
const [c5, setC5]= useState(0);
const [c6, setC6]= useState(0);
const [c7, setC7]= useState(0);
const [name  , setName] = useState('')

const updateState = ()=>{

  flushSync(()=>{
    setC1((c1)=>c1+1)
  }) 
  flushSync(()=>{
    setC2((c2)=>c2+1)
    setC3((c3)=>c3+1)
  })
  setC4((c4)=>c4+1)
  setC5((c5)=>c5+1)
  setC6((c6)=>c6+1)
  setC7((c7)=>c7+1)
}

const nameUpdate =()=> {
    setName("Vishal")

}




// useMemo  => it is used to memoized value 

// useCallback => it is used to memoize the functions reference itself
const displayName  =  useMemo(()=>{
        return `${c4==3 ? name+'heyc4': name}`
        // big calcualtions it taking longer time
        //  meoize
}, [name , c4])


// refernce of the functions
const cacheFunctions  = useCallback((id)=>{
    console.log('cache functions' ,id);
} ,[name])


ref.current = ref.current +1;
console.log('render' ,ref.current)
return (
<div>
    <div>{c1 + "," + c2  + "," + c3 + "," + c4 + "," + c5  + "," +c6 + "," + c7}</div>
    <button onClick={updateState}>
        update
    </button>
    <Child counter  = {displayName}/>
    <button onClick={nameUpdate}>Child State Update</button>
</div>
)
}

export default Optimization;

