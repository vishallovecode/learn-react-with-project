import Button from "../../Home/component/Button";
import './card.css'
const ProductCard = (props)=> {
    const {items} = props;
    return  (
        <div className="product">
            <img src= {items.thumbnail} alt = "picture"/>
            <div className="title">{items.title}</div>
            <div className="footer1">
                <span>{"Rs." + items.price}</span>
                <Button buttonText = "ADD"/>
            </div>
        </div>
    )
}

export default ProductCard;