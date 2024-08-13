import React from "react";
import Logo from "../../assets/logo_meza.jpg";
import { Link } from "react-router-dom";
import { VscMail } from "react-icons/vsc";
import { IoIosPhonePortrait } from "react-icons/io";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <Link to="/meza">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/safety">Safety</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-center">
        <div className="email">
          <VscMail size={18} />
          <a href="mailto:your@email.com">your@email.com</a>
        </div>
        <div className="phone">
          <IoIosPhonePortrait size={18} />
          <a href="tel:123-456-7890">123-456-7890</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
