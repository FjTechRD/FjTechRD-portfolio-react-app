import React, { useState } from "react";
import HeaderNavMenu from "../components/header/HeaderNavMenu";
import LightMode from "../components/header/LightMode";
import "./style/header.css";

const Header = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleNavMenu = (e) => {
    e.preventDefault();
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__btn-menu">
        <button className="btn header__btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <LightMode />
        {navMenuOpen ? (
          <button className="btn header__navMenu-btn" onClick={handleNavMenu}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        ) : (
          <button className="btn header__navMenu-btn" onClick={handleNavMenu}>
            <i className="fa-sharp fa-solid fa-ellipsis-vertical"></i>
          </button>
        )}
      </div>
      <HeaderNavMenu
        navMenuOpen={navMenuOpen}
        setNavMenuOpen={setNavMenuOpen}
      />
    </header>
  );
};

export default Header;
