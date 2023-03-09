import withClickEvent from "./hoc"

const Button  = (props)=> {
    return (
        <button style = {{border:"2px solid green" , padding:'10px'}} onClick= {props.onClick}>
             {props.text}
            </button>
    )
}

export default withClickEvent(Button);

// any where