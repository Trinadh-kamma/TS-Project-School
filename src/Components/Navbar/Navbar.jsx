import  {useState, React} from 'react'
import school from "../../assets/education.png"
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";

const Navbar = () => {
  
  return (
    <>
      <header 
      className="header"> 
        <div className="header-container">
          <div>
            <Link to="/" className="logo-container">
              <img src={school} alt="logo" className="logo"/>
              <h3 className="logo-name">School <br/> Finder</h3>
            </Link>
        </div>

        <nav className="navbar">
          <ul className="navlinks">
            <li>
              <NavLink to="/" className="nav-items">Home</NavLink>
            </li>
            <li><NavLink to="/about" className="nav-items">About Us</NavLink></li>
            <li><NavLink to="/academics" className="nav-items">Academics</NavLink></li>
            <li><NavLink to="/contact" className="nav-items">Contact Us</NavLink></li>
            <li><NavLink to= "login" className="nav-items login">Login</NavLink></li>
          </ul>
        </nav>
        </div>

      </header>
    </>
  )
}

export default Navbar
