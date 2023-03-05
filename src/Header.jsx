
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LInput from './component/input/input';
import { AppContext } from './context/context';
import { StoreContext } from './context/store';
import './header.css'
 const Header = (props) => {
  const {cartCount , searchProduct} = props; 
  const {actions} = useContext(StoreContext)

  const themeHandler = (e) => {
    console.log("Theme update 1: " , e.target.value )
    actions.generalActions.updateTheme(e.target.value)
  }
   return (
    <div className='header-cont'>
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
        <Link to = 'state'>UseStateVsUseReducer</Link>
        <Link to = 'chooks'>CustomHooks</Link>
        {/* We will create this input box as reusable */}
       <LInput title = "Search Products" onchange= {searchProduct} />
        <li style = {{height:"40px" ,width:"40px"}}>
          <img src= '/cart.png' height={"100%"} width = {"100%"}/>
        <div className='count'>{cartCount?.data?.value}</div>
        </li>
      </ul>
   <select onChange={themeHandler}>
   <option value = {'white'}>Light</option>
    <option value = {'black'}>Dark</option>
    <option value = {'red'}>Red</option>
    <option value = "gray">Gray</option>
   </select>
    </header>
    </div>
  );
};

export default Header


