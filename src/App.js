import React, { Component } from "react";
import "./App.css";
import Signature from "./container/Signature";



class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row mt-3 p-5">
            <div className="col">
              <h2 className="text-center">Email Signature Generator</h2>
            </div>
          </div>
          <Signature />          
        </div>
    );
  }
}

export default App;
