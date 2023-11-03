import React from 'react'
import school from "../../assets/education.png"
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div>
            <Link to="/" className="logo-container">
              <img src={school} alt="logo" className="logo"/>
              <h3 className="logo-name">School <br/> Finder</h3>
            </Link>
        </div>

        <nav className="navbar">
          <ul>
            <li><Link to="/" className="nav-items">Home</Link></li>
            <li><Link className="nav-items">About Us</Link></li>
            <li><Link className="nav-items">Academics</Link></li>
            <li><Link className="nav-items">Admissions</Link></li>
            <li><Link className="nav-items">Infrastructure</Link></li>
            <li><Link className="nav-items">Contact Us</Link></li>
            <li><Link to="/login"className="nav-items">Login</Link></li>
          </ul>
        </nav>
        </div>

      </header>
    </>
  )
}

export default Navbar
