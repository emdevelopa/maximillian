import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/css/App.css";
import logo from "./logo.png";
import Home from "./components/home";
import cto from "../src/images/CTO.jpg";
import ceo from "../src/images/CEO.jpg";
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
                cto={cto}
                ceo={ceo}
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
