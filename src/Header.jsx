
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LInput from './component/input/input';
import { AppContext } from './context/context';
import { StoreContext } from './context/store';
import './header.css'
 const Header = (props) => {
  const {cartCount , searchProduct} = props; 
  const {actions,state} = useContext(StoreContext)

  const themeHandler1 = (e) => {
    let a='white'
    if(!e.target.checked){
      a='white'
    }else {
      a='yellow'
    }
    actions.generalActions.updateHeaderTheme(a)
  }
  
 
   return (
    <div className='header-cont' style={{background:state.generalStates?.headerTheme}}>
    <header>
      <ul className="header-items">
        <Link to= "/" >WitViper</Link>
        <Link to = '/about'>ABOUT</Link>
        <Link to = '/login'>Login</Link>
        <Link to = '/contact'>contact</Link>
        <Link to = '/dynamicStyle'>Dynamic Style</Link>
        <Link to = '/filter'>Dropdown Example</Link>
        <Link to =  '/login'>Login</Link>
        <Link to =  '/register'>Register</Link>
        <Link to = '/timer'>Stop Watch</Link>
        <Link to = '/wcontext'>WithOut Context</Link>
        {/* We will create this input box as reusable */}
       <LInput title = "Search Products" onchange= {searchProduct} />
        <li style = {{height:"40px" ,width:"40px"}}>
          <img src= '/cart.png' height={"100%"} width = {"100%"}/>
        <div className='count'>{cartCount?.data?.value}</div>
        </li>
      </ul>
   {/* <select onChange={themeHandler}>
   <option value = {'white'}>Light</option>
    <option value = {'black'}>Dark</option>
    <option value = {'red'}>Red</option>
    <option value = "gray">Gray</option>
   </select> */}
   <div className='toggleBtn'>
   <div className="div1">White</div>
   <label class="switch">
  <input type="checkbox" onChange={themeHandler1}/>
  <span class="slider round"></span>
</label>
<div className="div1">Yellow</div>
   </div>
    </header>
    </div>
  );
};

export default Header


