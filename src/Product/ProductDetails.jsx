import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../component/productCard/card";

const ProductDetailPage = (props) => {
    let {productId} = useParams();
    console.log(productId)
    // const routerParamas =useParams(); 
    // console.log(routerParamas.productId)

    const [loader , setLoader] = useState(false);
    const[productDetails , setProductDetails] = useState({});

    const fetchProductData = async (id) => {
        setLoader(true);
        try {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const result = await res.json();
          setLoader(false);
    
          setProductDetails(result);

        } catch (error) {
          setLoader(false);
          alert("Something went wrong!!! Please try Again!!");
        }
      };

      useEffect(()=>{
        if(productId) {
            fetchProductData(productId)
        }
      } ,[])
    
    return  (
        <div>
            {loader ? <div>Loading</div> :<ProductCard  product = {productDetails}/>}
        </div>
    )
}

export default ProductDetailPage;


