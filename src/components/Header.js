import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='outer-container'>
        <nav className='nav-container'>
          <a id='site-logo' className='site-logo transition-link' href='/'>
            <span className='text-logo'>JD</span>
          </a>
          <ul className='nav'>
            <li className='nav-text'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-text'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='nav-text'>
              <a href='mailto:jarededrake@yahoo.com'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
