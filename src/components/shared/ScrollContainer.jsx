import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/scrollContainer.css";

const ScrollContainer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <article className="scroll__container">
      <div className="me-info">
        <ul className="me-info__list">
          <li className="me-info__element">
            <p>{t("side-information.age")}</p>
            <span> 29</span>
          </li>
          <li className="me-info__element">
            <p>{t("side-information.residence")}:</p>
            <span> RD</span>
          </li>
          <li className="me-info__element">
            <p>Freelancer:</p>
            <span className="me__available">
              {" "}
              {t("side-information.available")}
            </span>
          </li>
          <li className="me-info__element">
            <p>{t("side-information.address")}</p>
            <span> Sosua, Puerto Plata</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="lenguages">
        <h2 className="lenguages__title">{t("side-information.lenguages")}</h2>
        <div className="lenguages__elements">
          <h4>{t("side-information.spanish")}</h4>
          <div className="progress">
            <div className="progress-bar" style={{ width: "100%" }}>
              <span className="progress-bar-text">100%</span>
            </div>
          </div>
        </div>
        <div className="lenguages__elements">
          <h4>{t("side-information.english")}</h4>
          <div className="progress">
            <div className="progress-bar" style={{ width: "55%" }}>
              <span className="progress-bar-text">55%</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="skills__info">
        <h2 className="skills-info__name">{t("side-information.skills")}</h2>
        <div className="skill__items-container">
          <div className="skills__items">
            <h3>HTML</h3>
            <i className="fa-brands fa-html5"></i>
          </div>
          <div className="skills__items">
            <h3>CSS</h3>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="skills__items">
            <h3>JS</h3>
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="skills__items">
            <h3>REACT </h3>
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="skills__items">
            <h3>WordPress</h3>
            <i className="fa-brands fa-wordpress"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="extra__skills">
        <h2>{t("side-information.extra-skills")}</h2>
        <p className="ex-skill__parraf">
          <i className="fa-solid fa-code"></i>Bootstrap, Material UI
        </p>
        <p className="ex-skill__parraf">
          <i className="fa-solid fa-code"></i>Gulp, SASS
        </p>
        <p className="ex-skill__parraf">
          <i className="fa-solid fa-code"></i>Elementor
        </p>
        <p className="ex-skill__parraf">
          <i className="fa-solid fa-code"></i>Linux, shell Bash and Zsh
        </p>
      </div>
    </article>
  );
};

export default ScrollContainer;
