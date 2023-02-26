import { useState } from "react";
import Timer from "./timer";

 const TimerContainer = () => {
    const [list , setList] = useState([]);
    const [reset , setReset] = useState(false);
    const AddTimer = ()=> {
        const  list1  = [...list];
        list1.push(Math.random()*10);
        setList(list1);
    }

     const resetAllTimer = ()=> {
        setReset(true);
     }

return (
<div style={{padding: '40px'}}>
<button onClick={AddTimer}>Add Button</button>
<button onClick={resetAllTimer}>Reset All TIMER</button>
{list.map(()=>{
    return (
        <Timer reset = {reset} setReset={setReset}/>
    )
})}
<div style = {{padding:'30px'}}>

</div>
</div>
)

}


export default TimerContainer;




// named export 

