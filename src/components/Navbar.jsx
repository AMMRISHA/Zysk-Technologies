import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger and Cross icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
      
        <div className='navlogo'>
            <img src="public/logo.JPG" alt="Right Logo" />
          </div>
        <div  className={isMenuOpen ? "menu open" : "menu"}>
          <ul className='navlist'>
          <li>Home</li>
          <li>Products <RiArrowDropDownLine /></li>
          <li>Resources <RiArrowDropDownLine /></li>
          <li>Pricing</li>
          </ul>
          <li className="rightlogo">
            <img src="public/logo2.JPG" alt="Logo" />
          </li>
        </div>


        {/* Dropdown Button for smaller screens */}
        <div className="dropdown-button" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
