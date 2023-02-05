import Button from "../../Home/component/Button";
import './card.css'
const ProductCard = (props)=> {
    const {product , increment , productClicked} = props;
    return  (
        <div className="product" onClick={()=>productClicked(product)}>
            <img src= {product.thumbnail} alt = "thumnail"/>
            <div className="title">{product.title}</div>
            <div className="footer1">
                <span>{"Rs." + product.price}</span>
                <Button buttonText = "ADD" count  = {product.count} clickHandler = {(e)=>increment(e, product)} />
            </div>
        </div>
    )
}

export default ProductCard;

// triggering by default the browser call that function with event as parameters