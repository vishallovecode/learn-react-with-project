
import './App.css';
import Cart from './Home/component/Cart';
import Home from './Home/component/Home';
// import Home from './Home/component/Home'
import LifeCycle from './Home/LifeCycle';


function App() {
  return (
    <div className="App">
  {/* <LifeCycle/> */}
 <Home title = {"I am home"}/>
 <Cart header = {'I am cart'}/>
    </div>
  );
}

export default App;




