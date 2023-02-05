import './button.css';
const Button  = (props)=>{
    const {decrement , clickHandler, count, buttonText} = props;
    return  (
        <div>
       {!count ? <button onClick={clickHandler} className= "button">{buttonText }</button>:
       <div className='button'>
          <span onClick={decrement} className = "span-text">-</span>
        <span className = "span-text">{count}</span>
        <span onClick={clickHandler} className = "span-text">+</span>
        </div>}
        </div>
    )
}

Button.defaultProps  = {
    buttonText: "Submit"
}


export default Button;


