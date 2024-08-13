import React, { useState } from "react";
import Logo from "../../assets/logo_meza.jpg";
import { Link } from "react-router-dom";
import { VscMail } from "react-icons/vsc";
import { IoIosPhonePortrait, IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import classNames from "classnames";
import "./Navbar.css";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setMenuVisible(false);
  };

  return (
    <nav className="Navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>
          <Link onClick={handleLinkClick} to="/meza">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/safety">
            Safety
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to="/contact">
            Contact
          </Link>
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
      <button className="toggle-menu" onClick={handleMenuToggle}>
        {menuVisible ? <IoMdClose size={24} /> : <IoMenu size={24} />}
      </button>
      <div className={classNames("hamburger-menu", { show: menuVisible })}>
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="hamburger-links">
          <li>
            <Link onClick={handleLinkClick} to="/meza">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/safety">
              Safety
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={handleLinkClick} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
