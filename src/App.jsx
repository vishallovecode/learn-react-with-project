
import './App.css';
import Product from './Product/product';
import {Routes , Route}  from 'react-router-dom';
import Cart from './Home/component/Cart';
import Home from './Home/component/Home';
import ProductDetailPage from './Product/ProductDetails';
import About from './About';
import Contact from './Conatct';
import Header from './Header';
import DynamicStyle from './DynamicCss/dynamiccss';
import Filter from './filter';
import Register from './Register/register';
// import Login from './Form/Login';
import Login from  './Form/Login'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import TimerContainer from './component/timer';
import Parent from './context/exampleWithoutContext';
import { createContext } from 'react';
// top level
// you want to make global css than import css file here

// context 

export const  AppContext  = createContext();

function App() {

const  object = { 
  isAuthenticate: true,
  token: 'asvdhgavsghcvsahgcvsgjhdvc'
}
  return (
    <AppContext.Provider value = {object}>
    <div className="App">
      <ErrorBoundary>
      <Header/> 
      </ErrorBoundary>
      <Routes>
        <Route path= "/product" element  = { <Product/> }/>
        <Route path= "/cart" element  = {<Cart/>}/>
        <Route path= "/" element  = {<Home/>}/>
        {/* /product/12334446789 */}
        <Route path= "/product/:productId" element  = {<ProductDetailPage/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>

        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path = '/dynamicStyle' element = {<DynamicStyle/>}/>
        <Route path = '/filter' element = {<Filter/>}/>
        <Route path = '/timer' element = {<TimerContainer/>}/>
        <Route path = '/wcontext' element = {<Parent/>}/>
     
      </Routes>
      {/* <Footer>
     <Cart/>
      </Footer> */}
  
      </div>
      </AppContext.Provider>
  )

}

export default App;

// // webpack create the bundle of js  , html and css webpack only =understand the js and json 










