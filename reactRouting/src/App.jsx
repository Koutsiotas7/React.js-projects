import React from "react"
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Details from "./components/Details";
import AboutUs from "./components/AboutUs";
import ContactInfo from "./components/ContactInfo";

function App() {

  return (
       <Router>
        <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
      </div>

      <nav className="Links">
        <Link to="/">Home</Link>
        <Link to="/details">Details</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Info</Link>
      </nav>
    </Router>
  );
}

export default App
