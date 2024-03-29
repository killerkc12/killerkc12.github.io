import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./components/Contact/Contact";
import Designs from "./components/Designs/Designs";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* <Navbar /> */}
        <Home />
        <About />
        <Projects />
        <Designs />
        {/* <Contact /> */}
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/design" component={Designs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
