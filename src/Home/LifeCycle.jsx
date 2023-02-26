import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      products: [],
      counter: 0,
    };
  }

  fetchProductData = async () => {
    const state = { ...this.state }; // state reference now it the value copy
    try {
    
      this.loader = true; // updating state directly no diff found by the diffing algo b/w the pre-updated cirtual dom and virtual dom
      state.loader = true;
      this.setState(state);

      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      state.products = result?.products;
      state.loader = false;
      this.setState(state); // this.setState behave like async
    } catch (error) {
      state.loader = false;
      this.setState(state);
      alert("Something went wrong!!! Please try Again!!");
    }
  };
  componentWillMount() {
    // deprceated
  }
  componentDidMount() {
    this.fetchProductData();
  }
  // optimize perspective everutime we donot want to render the ui

  manipulateProducst = (products) => {
    const updatedProducts = products.map((pr) => {
      console.log(pr)
      return {
        ...pr,
        price: "RS." + pr.price,
      };
    });
    console.log(updatedProducts)
    const updatedState = { ...this.state };
    updatedState.products = updatedProducts;
    this.setState(updatedState);
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState=>>", prevState, "current state=>", this.state);
    if (prevState.counter != this.state.counter) {
      this.manipulateProducst(this.state.products);
    }
  }

  shouldComponentUpdate(nexprops , nextstate) {
    if(nextstate.counter %2===0) {
      return true;
    } else {
      return false;
    }
}


// if shouldComponentUpdate return the true than only  componentDidUpdate get called and  after  componentDidUpdate render function get called

  updateCounter = () => {
    const updatedState = { ...this.state };
    updatedState.counter = updatedState.counter + 1;
    this.setState(updatedState);
  };
  componentWillUnmount() {
    // this will call once the component unmount from the dom => remove from the dom tree 
    // mainly this used a for unsubscribe the thing and cleaning perspective
  }
  // anything get updaTED
   
  render() {
    console.log("render", this.state);
    return (
      <div>
        <button onClick={this.updateCounter}>Update Counter</button>
        {this.state.loader ? (
          <div>
            <img src="/Loading_icon.gif" />
          </div>
        ) : (
          this.state.products.map((pr) => {
            // console.log(pr); //
            return (
              <div>
                <h6>{pr.title}</h6>
                <div>
                  <span>Brand::</span> <span>{pr.brand}</span>
                </div>
                <div>
                  <span>Price::</span> <span>{pr.price}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default LifeCycle;

// Initialiozation  => constructor();
//Mounting =>  componentWillUnmount called jsut before the component mounts on the dom or render function called
//    => componenntDidMount  => this method called after the component mount on the dom

// api => mounting  , intialize , unmonting , update
