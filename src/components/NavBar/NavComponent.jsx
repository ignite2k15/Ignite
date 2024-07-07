import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./navbar.css";
import { FaTimes } from 'react-icons/fa';
import img1 from '../../assets/ignite.png';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavComponent = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true);
  const location = useLocation();

  // Hide menu on route change
  useEffect(() => {
    setShowMediaIcons(true); // or false if you want to close it by default on route change
  }, [location]);

  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/home">
          <img className="logo" src={img1} alt="logo" />
        </Link>
      </div>

      <div className={`menu-link ${showMediaIcons ? "mobile-menu-link" : ""}`}>
        <ul className="for-list">
          <li><Link className="for-list-items" to="/home">Home</Link></li>
          <li><Link className="for-list-items" to="/activities">Activities</Link></li>
          <li><Link className="for-list-items" to="/teams">Teams</Link></li>
          <li><Link className="for-list-items" to="/contact">Contact</Link></li>
          <li><Link className="for-list-items" to="/gallery">Gallery</Link></li>
          <li><Link className="for-list-items" to="/register">Register</Link></li>
        </ul>
      </div>

      <div className="social-media">
        <ul className="social-media-desktop">
          <li><a href="#" target="_blank"><FaTwitterSquare className="twitter" /></a></li>
          <li><a href="https://www.instagram.com/ignite_svuce/?hl=en" target="_blank"><FaInstagramSquare className="instagram" /></a></li>
          <li><a href="https://www.linkedin.com/company/ignite-svuce/" target="_blank"><FaLinkedin className="linkedin" /></a></li>
        </ul>

        <div className="hamburger-menu">
          <a href="#" className="hamburger-icon" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            {showMediaIcons ? <GiHamburgerMenu /> : <FaTimes />}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
