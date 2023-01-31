import React  from "react";
import Button from "./Button";
import Home from "./Home";

const Cart =(props)=>{
    const cartClicked = ()=>{
        alert('Cart SuccessFully Clicked')
    }
    return (
        <div style = {{height:'400px' , width:'500px' , background: 'blue' , margin: 'auto' , marginTop: '40px'}}>
            <h2>{props.header}</h2>
            <Button clickHandler = {cartClicked} buttonText = {'Click me'}/>
    
        </div>
    )
}

export default Cart;


// state vs props  

// state store or hold the data which can be changed
// state can be used in class component only earlier to react 16 version but after react 16 state can be used in functional
// state is used to store data , where we need to re-render the ui on updating that  data
// state is corresponding to own component


// props
// this are used to pass the data and action to the child components
// props cannot be changed it is immutable
// from starting of react props can used in both functional and class componnent
// we can set the props from parent to child component
// props is the data coming from anopther component 


// Life Cycle 