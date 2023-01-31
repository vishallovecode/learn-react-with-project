// class Componnent

import { Component } from "react";
import  './App.css';
class Footer extends Component {
  constructor() {
    super();
    this.list1 = "List1";
  }

  render() {
   let list2 = "Cache";
   let list3 = "Cache1";
   let list4 = "Cache2";
    
    return (
      <div className="footer">
        <h3> I am footer</h3>
        <ul>
          <li>{this.list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
      </div>
    );
  }
}

export default Footer;


// Memoization   => closure 
// How to cache the api call  => diffe between get and post 