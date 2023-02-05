import './button.css';
const Button  = (props)=>{
    return  (
        <div>
       {!props.count ? <button onClick={props.clickHandler} className= "button">{props.buttonText }</button>:
       <div>
        <span>+</span>
        <span>-</span>
        </div>}
        </div>
    )
}

Button.defaultProps  = {
    buttonText: "Submit"
}


export default Button;


