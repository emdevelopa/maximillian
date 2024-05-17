import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import cto from "../src/images/CTO.jpg";
import founder from "../src/images/founder.jpg";
import journalImage from "../src/images/walls.jpeg";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
                cto={cto}
                founder={founder}
                journalImage={journalImage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
