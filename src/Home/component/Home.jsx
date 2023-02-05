import { useState } from "react";
import Button from "./Button";
import {Link}  from 'react-router-dom';

const Home = (props) => {
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try  {
        setLoader(true);
        const res = await fetch("https://dummyjson.com/products");
        const result = await res.json();
        console.log(result)
        setProducts(result?.products);
        setLoader(false);
    } catch(error) {
        setLoader(false);
    }
  };

  return (
    <div  style={{display:'flex' , flexDirection: 'column'}}>

    <Link to  ='/cart'>
      Cart
    </Link>
    <Link to  ='/product'>
      Product
    </Link>
    </div>
  );
};

export default Home;


// Dom =>  HTML dOM  + CSS DOM  => dom => browser painting
// Updating  => re-rendering 
 
// unmouting state

// props  => props immutable props cannot be changed 
// props are read only 
// this is used for tranfering data from one component to another component  
// most of the cases parent to child and it one way binding
// props are object which is the key value pair wahatever is passed through the parent component that is added as a key value pair on the props object
