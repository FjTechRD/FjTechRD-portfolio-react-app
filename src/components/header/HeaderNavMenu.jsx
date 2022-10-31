import React from "react";
import { Link } from "react-router-dom";
import "../../shared/style/header.css";

const HeaderNavMenu = ({ navMenuOpen, setNavMenuOpen }) => {
  return (
    <div
      className="nav-menu__container"
      style={{ right: navMenuOpen ? "0" : "-100%" }}
    >
      <h3>Navigation Menu</h3>
      <nav className="nav__menu">
        <ul className="nav-menu__container-links">
          <li className="nav-link__item">
            <Link to="/">
              <i className="fa-solid fa-house"></i>{" "}
            </Link>
          </li>
          <li className="nav-link__item">
            <Link to="/services">
              <i className="fa-solid fa-code"></i>
            </Link>
          </li>
          <li className="nav-link__item">
            <Link to="/education">
              <i className="fa-solid fa-book"></i>
            </Link>
          </li>
          <li className="nav-link__item">
            <Link to="/projects">
              <i className="fa-solid fa-diagram-project"></i>
            </Link>
          </li>
          <li className="nav-link__item">
            <Link to="/contact">
              <i className="fa-sharp fa-solid fa-address-book"></i>
            </Link>
          </li>
          <button
            className="btn__menu-close"
            onClick={() => setNavMenuOpen(!navMenuOpen)}
          >
            x
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavMenu;
