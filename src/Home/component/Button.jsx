const Button  = (props)=>{
    console.log('PROPS' , props )
    return  (
        <button onClick={props.clickHandler}>{props.buttonText }</button>
    )
}

Button.defaultProps  = {
    buttonText: "Submit"
}


export default Button;

