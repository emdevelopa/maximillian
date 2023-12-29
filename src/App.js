import React, { Component } from "react";
import "./App.css";
import logo from "./logo.png";
import Home from "./home";
import image1 from "../src/images/Maximillian1.png";
import image2 from "../src/images/Maximillian2.png";
import image3 from "../src/images/Maximillian2.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home
          logo={logo}
          imageOne={image1}
          imageTwo={image2}
          imageThree={image3}
        />
      </div>
    );
  }
}

export default App;
