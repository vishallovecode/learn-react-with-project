
import LInput from './component/input/input';
import './header.css'
 const Header = (props) => {
  const {cartCount , searchProduct} = props; 
  return (
    <div className='header-cont'>
    <header>
      <ul className="header-items">
        <li >WitViper</li>
        <li>Adress</li>
        {/* We will create this input box as reusable */}
       <LInput title = "Search Products" onchange= {searchProduct} />
        <li>Login</li>
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
