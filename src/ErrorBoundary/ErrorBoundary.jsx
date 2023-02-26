import { Component } from "react";

class ErrorBoundary extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          error: false
        };
      }
    
      componentDidCatch(error ) {
        console.log("Checking" , error) 
        // any error
        // this.setState({error: error})
        // logiing thing i can i here
        // some error comes you can call your api telling that error ocurtred
        // monitor
    }
    
    static getDerivedStateFromError(error) {
            return {error: true};
    } 
    render() {
        if(this.state.error) {
            return (
                <div>Some thing went wrong {this.state.error}</div> 
                //  error ui 
            )
        } else {
            return this.props.children; 

        }
        
    }
}

export default ErrorBoundary;