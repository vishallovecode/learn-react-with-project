
import LInput from './component/input/input';
import './header.css'
 const Header = () => {
  return (
    <div className='header-cont'>
    <header>
      <ul className="header-items">
        <li>Logo</li>
        <li>Adress</li>
        {/* We will create this input box as reusable */}
       <LInput title = "Search Products"/>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </header>
    </div>
  );
};

export default Header
