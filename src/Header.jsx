
import { Link } from 'react-router-dom';
import LInput from './component/input/input';
import './header.css'
 const Header = (props) => {
  const {cartCount , searchProduct} = props; 
  return (
    <div className='header-cont'>
    <header>
      <ul className="header-items">
        <Link to= "/" >WitViper</Link>
        <Link to = '/about'>ABOUT</Link>
        <Link to = '/login'>Login</Link>
        <Link to = '/contact'>contact</Link>
        <Link to = '/dynamicStyle'>Dynamic Style</Link>
        {/* We will create this input box as reusable */}
       <LInput title = "Search Products" onchange= {searchProduct} />
        <li style = {{height:"40px" ,width:"40px"}}>
          <img src= '/cart.png' height={"100%"} width = {"100%"}/>
        <div className='count'>{cartCount}</div>
        </li>
      </ul>
    </header>
    </div>
  );
};

export default Header
