import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './style.css'
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Explore from './Explore';
export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Link to="/navbar" className="navbar-brand" style={{ fontSize: "50px", }}>
        
          TravelX
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/explore" className="nav-link">Explore</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/explore" element={<Explore/>} exact />
        
        <Route path="/contact" element={<Contact/>} exact />
      </Routes>
    </div>
  )
}
