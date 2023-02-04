import './button.css';
const Button  = (props)=>{
    return  (
        <button onClick={props.clickHandler} className= "button">{props.buttonText }</button>
    )
}

Button.defaultProps  = {
    buttonText: "Submit"
}


export default Button;

