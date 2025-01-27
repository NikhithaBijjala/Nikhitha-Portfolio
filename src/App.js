import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import About from "./components/About";

import Profile from "./img/Nikhitha.jpg";
import Testimonials from "./components/Testimonals";

function App() {
  const isProduction = process.env.NODE_ENV === "production";
  const basename = isProduction ? "/Nikhitha-Portfolio" : "/";
  return (
    <Router> 
      <div>
        <div className="mainNav">
          <nav className="navbar" id="myLinks">
            <div className="imgSection nav-logo-wrapper">
              <div>
                <img className="profile" src={Profile} alt="profile" />
              </div>
              <div>
                <p>Nikhitha Bijjala</p>
                <div className="logo-tagline">
                  Full Stack Developer | Programmer
                </div>
              </div>
            </div>
            <div>
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/experience" className="navbar-link">
                Experience
              </Link>
              <Link to="/testimonials" className="navbar-link">
                Testimonials
              </Link>
              <Link to="/contact" className="touch-btn">
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
        <Routes className="section1">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;