import Button from "./buttons";
import Card from "./card";

const HocContainerExample = ()=> {

    const clickMe = ()=>{
        console.log('Click mee')
    }

    const clickMe1 = ()=>{
        console.log('Click mee12')
    }

    const clickMe2 = ()=>{
        console.log('Click mee123')
    }

    const divClick = ()=> {
          // some data analytics event triggere
        //   console.log("Logging the user event to the event service");
          // bigger logic
        console.log('div click mee123')
    }
    return (
   <div>
        <Button text= "click me" onClick = {clickMe}/>
        <Button text= "click me1" onClick = {clickMe2}/>
        <Button text= "click me2" onClick = {clickMe1}/>
        <Card onClick = {divClick}/>
         </div>
        
    )
}


export default HocContainerExample;


// CUSTOM  
// ONCLICK  => EVENTY