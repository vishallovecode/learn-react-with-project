
import './App.css';
import Product from './Product/product';
import {Routes , Route}  from 'react-router-dom';
import Cart from './Home/component/Cart';
import Home from './Home/component/Home';
import ProductDetailPage from './Product/ProductDetails';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/product" element  = { <Product/> }/>
        <Route path= "/cart" element  = {<Cart/>}/>
        <Route path= "/" element  = {<Home/>}/>
        <Route path= "/product/:id" element  = {<ProductDetailPage/>}/>
      </Routes>
      
      </div>
  )

}

export default App;




