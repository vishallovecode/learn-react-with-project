import Button from "../../Home/component/Button";
import './card.css'
const ProductCard = ()=> {
    return  (
        <div className="product">
            <img src= 'https://i.dummyjson.com/data/products/1/1.jpg'/>
            <div className="title">Title</div>
            <div className="footer1">
                <span>Rupees</span>
                <Button buttonText = "ADD"/>
            </div>
        </div>
    )
}

export default ProductCard;