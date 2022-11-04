import React from "react";
import "./styles/scrollContainer.css";

const ScrollContainer = () => {
  return (
    <article className="scroll__container">
      <div className="me-info">
        <ul className="me-info__list">
          <li className="me-info__element">
            <p>Age:</p>
            <span> 29</span>
          </li>
          <li className="me-info__element">
            <p>Residence:</p>
            <span> RD</span>
          </li>
          <li className="me-info__element">
            <p>Freelancer:</p>
            <span className="me__available"> Available</span>
          </li>
          <li className="me-info__element">
            <p>Address:</p>
            <span> Sosua, Puerto Plata</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="lenguages">
        <h2 className="lenguages__title">Languages</h2>
        <div className="lenguages__elements">
          <h4>Spanish</h4>
          <div className="progress">
            <div className="progress-bar" style={{ width: "100%" }}>
              <span className="progress-bar-text">100%</span>
            </div>
          </div>
        </div>
        <div className="lenguages__elements">
          <h4>English</h4>
          <div className="progress">
            <div className="progress-bar" style={{ width: "55%" }}>
              <span className="progress-bar-text">55%</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="skills__info">
        <h2 className="skills-info__name">Skills</h2>
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
        <h2>Extra Skills</h2>
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
