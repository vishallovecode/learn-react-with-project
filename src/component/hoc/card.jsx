import withClickEvent from "./hoc"

const Card  = (props)=> {
    return  (
         <div style = {{border:"3px solid red" , width:'300px' , height: '30px'}} onClick = {props.onClick}></div>
    )
}

const CardWithClickLogic = withClickEvent(Card);
export default CardWithClickLogic;
