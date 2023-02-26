import { useEffect, useState } from "react";
import LInput from "../component/input/input";

const Register = ()=> {
    let [message , setMessage] = useState();
    const [obj , setObj] = useState({
        name : "Vishal" , 
        lastName: "Sharma" , 
        message: "Hey !!"
    })


    useEffect(()=>{
        const data =  localStorage.getItem("MESSAGE");
        setMessage(data)
    } , [])


    const fixedHandler = () => {
        console.log("Hello")
        // const newObj =  {...obj}; // deep copy 
        const newObj = obj; // shallow copy 
        newObj.message = `Hey !! ${newObj.name} ${newObj.lastName}`
        setObj(newObj)
        // message = 'This is the register page' // this case react if creating the shallow copy of pre-updated virtual dom with the virtual dom //
        setMessage('This is the register page')
      
    }

    const handlerInput = (e)=> {
        setMessage(e.target.value)
        localStorage.setItem("MESSAGE"  , e.target.value) ; // SIDE EFFECTS
    }
    return (
        <div>
           <h2> {message}</h2>
           
           <LInput title = {"User Name"} onchange = {handlerInput}/>
           <span>{message}</span>
        </div>
    )
}

export default Register;



// let  name  = "Vishal";
//  name  = "Sharma"



let name  = {name :"Vishal" , lastName : "SHARMA"};
let copyName  =  name;


// virtual  => obj

// pre updated  => newObj


// if there ia no change of virtual and pre-updated virtual dom ui will be not reflected // who is responbsible  for updating the ui that IS real dom

// what is side-effects in react ??
// anything outside of the react is called the side-effects


// network  call or api call 

// if any document api 
// local storage  , sessionStorage

// multi state 

// z