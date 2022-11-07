import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navs from "./Components/Navs";
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import Rout from "./Components/Rout";
import Photos from "./Components/Photos";

class App extends Component{
  render(){
    return(
      <div className="app">
        <Router>
            <Navs />
            <Routes>
              <Route path="/" element = {<Home/>} />
              <Route path="/about" element = {<About/>} />
              <Route path="/contact" element = {<Contact/>} />
              <Route path="/blog" element = {<Blog/>} />
              <Route path="/:auto_path" element = {<Rout/>} />
              <Route path="/photos" element = {<Photos/>} />
            </Routes>
        </Router>
      </div>

    );
  }
}

export default App;
