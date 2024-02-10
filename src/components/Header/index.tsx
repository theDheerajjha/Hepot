import React from "react";
import './index.scss'
import logo from "../../logo.svg"; // Import your logo image
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
      </header>
    </>
  );
};

export default Header;
