import { Component } from "react";


class LifeCycle extends Component {

    constructor(props){
        super(props);
        this.state = {
            loader: false,
            products: []
        }
    }

fetchProductData = async()=> {
    const state = {...this.state};  // state reference now it the value copy
    try  {
        state.loader = true;
        console.log('state=>' , state);

       this.setState(state)
       console.log('state after loader set=>' , this.state);
        const res = await fetch("https://dummyjson.com/products");
        const result = await res.json();
        // console.log(result)
        state.products = result?.products;
        state.loader = false 
        this.setState(state) ; // this.setState behave like async

    } catch(error) {
     state.loader = false;
     this.setState(state);
     alert("Something went wrong!!! Please try Again!!")
    }
}
    componentWillMount() {
   
    }
    componentDidMount() {
        this.fetchProductData();
    }
    render() {
        return (
            <div>
    
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
        )
    }

}


export default LifeCycle;


// Initialiozation  => constructor();
//Mounting =>  componentWillUnmount called jsut before the component mounts on the dom or render function called
        //    => componenntDidMount  => this method called after the component mount on the dom


        // api => mounting  , intialize , unmonting , update
