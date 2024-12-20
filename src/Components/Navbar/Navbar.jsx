import React, { useState } from "react";
import "./Navbar.css"; // Assuming you have a separate CSS file for styling
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control navbar visibility

  // Function to toggle the navbar visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the styles based on the state
  const navbarStyle = {
    background: isOpen ? "linear-gradient(to right, red, purple)" :"linear-gradient(to right, purple, red)",
    color: isOpen ? "#fff" : "#000",
    transition: "all 0.3s ease",
  };

  return (
    <div className="navbar-container">
      <nav style={navbarStyle}>
        <div className="navbar-logo">
          <h1>ShaluYadav.</h1>
        </div>

        {/* Close Icon (appears when menu is open) */}
        {isOpen && (
          <div className="close-icon-div" onClick={toggleMenu}>
            <IoClose id="closeIcon" className="icon" />
            
            {/* Navbar Links */}
            <div id="navbar-links">
              <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        )}

        {/* Menu Icon (appears when menu is closed) */}
        {!isOpen && (
          <div className="menu-icon-div" onClick={toggleMenu}>
            <IoMenu id="menuIcon" className="icon" />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
