import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Home from "./home";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Home logo={logo} />
      </div>
    );
  }
}

export default App;
