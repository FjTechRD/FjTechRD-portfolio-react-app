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
            <span> Available</span>
          </li>
          <li className="me-info__element">
            <p>Address:</p>
            <span> Sosua, Puerto Plata</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="lenguages">
        <h2 className="lenguages__title">Lenguages</h2>
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
        <h2>Skills</h2>
        <div className="skill__items-container">
          <div className="skills__items">
            <h3>HTML</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}>
                <span className="progress-bar-text">90%</span>
              </div>
            </div>
          </div>
          <div className="skills__items">
            <h3>CSS</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}>
                <span className="progress-bar-text">85%</span>
              </div>
            </div>
          </div>
          <div className="skills__items">
            <h3>JS</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "75%" }}>
                <span className="progress-bar-text">75%</span>
              </div>
            </div>
          </div>
          <div className="skills__items">
            <h3>REACT </h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "60%" }}>
                <span className="progress-bar-text">60%</span>
              </div>
            </div>
          </div>
          <div className="skills__items">
            <h3>WordPress</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}>
                <span className="progress-bar-text">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="extra__skills">
        <p>
          <i className="fa-solid fa-code"></i>Bootstrap, Material UI
        </p>
        <p>
          <i className="fa-solid fa-code"></i>Gulp, SASS
        </p>
        <p>
          <i className="fa-solid fa-code"></i>Elementor
        </p>
        <p>
          <i className="fa-solid fa-code"></i>Shell Bash & Zsh
        </p>
      </div>
    </article>
  );
};

export default ScrollContainer;
