
import './App.css';
import Product from './Product/product';
import {Routes , Route}  from 'react-router-dom';
import Cart from './Home/component/Cart';
import Home from './Home/component/Home';
import ProductDetailPage from './Product/ProductDetails';
import Login from './Login';
import About from './About';
import Contact from './Conatct';
import Header from './Header';
import Footer from './Footer';
import DynamicStyle from './DynamicCss/dynamiccss';
// top level
// you want to make global css than import css file here

function App() {
  console.log("Code in appps") // this will re-render everytime when the dependecny or statc change
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path= "/product" element  = { <Product/> }/>
        <Route path= "/cart" element  = {<Cart/>}/>
        <Route path= "/" element  = {<Home/>}/>
        <Route path= "/product/:productId" element  = {<ProductDetailPage/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/dynamicStyle' element = {<DynamicStyle/>}/>
      </Routes>
      <Footer>
     <Cart/>
      </Footer>
  
      </div>
  )

}

export default App;

// webpack create the bundle of js  , html and css webpack only =understand the js and json 







