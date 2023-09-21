import React from "react";
import "./styles.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="app-header-title">Vendor CMS</p>
      </header>
    </div>
  );
};

export default Header;
