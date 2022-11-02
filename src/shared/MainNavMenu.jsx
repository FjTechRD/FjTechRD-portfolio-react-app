import React from "react";
import { Link } from "react-router-dom";
import LightMode from "../components/header/LightMode";
import "./style/mainNavMenu.css";

const MainNavMenu = () => {
  return (
    <nav className="nav-menu__desktop">
      <div className="light-mode">
        <LightMode />
      </div>
      <div className="menu__desktop">
        <ul className="menu__desktop__container-links">
          <li className="menu__desktop__item link__home">
            <Link to="/">
              <i className="fa-solid fa-house"></i>{" "}
            </Link>
          </li>
          <li className="menu__desktop__item link__services">
            <Link to="/services">
              <i className="fa-solid fa-code"></i>
            </Link>
          </li>

          <li className="menu__desktop__item link__education">
            <Link to="/education">
              <i className="fa-solid fa-book"></i>
            </Link>
          </li>

          <li className="menu__desktop__item link__projects">
            <Link to="/projects">
              <i className="fa-solid fa-diagram-project"></i>
            </Link>
          </li>

          <li className="menu__desktop__item link__contact">
            <Link to="/contact">
              <i className="fa-sharp fa-solid fa-address-book"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavMenu;
