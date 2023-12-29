import React, { Component } from "react";
import "../src/css/App.css";
import logo from "./logo.png";
import Home from "./components/home";
import image0 from "../src/images/Maximillian0.png";
import image1 from "../src/images/Maximillian1.png";
import image2 from "../src/images/Maximillian2.png";
import image3 from "../src/images/Maximillian3.png";
import image4 from "../src/images/Maximillian4.png";
import image5 from "../src/images/Maximillian5.png";
import image6 from "../src/images/Maximillian6.png";
import image7 from "../src/images/Maximillian7.png";
import image8 from "../src/images/Maximillian8.png";
import image9 from "../src/images/Maximillian9.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home
          logo={logo}
          imageZero={image0}
          imageOne={image1}
          imageTwo={image2}
          imageThree={image3}
          imageFour={image4}
          imageFive={image5}
          imageSix={image6}
          imageSeven={image7}
          imageEight={image8}
          imageNine={image9}
        />
      </div>
    );
  }
}

export default App;
