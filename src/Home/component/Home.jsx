import { useState } from "react";

const Home = () => {
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
    <div>
      <button onClick={fetchProduct}>Fetch Data</button>
      {loader ? (
        <div>
          <img src="/Loading_icon.gif" />
        </div>
      ) : (
        products.map((pr) => {
          console.log(pr); //
          return (
            <div>
              <h6>{pr.title}</h6>
              <div>
                <span>Brand::</span> <span>{pr.brand}</span>
              </div>
              <div>
                <span>Price::</span> <span>{pr.price}</span>
              </div>
              <a href="/cart" > Unmount
                </a>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;

// Dom =>  HTML dOM  + CSS DOM  => dom => browser painting
// Updating  => re-rendering 
 
// unmouting state
