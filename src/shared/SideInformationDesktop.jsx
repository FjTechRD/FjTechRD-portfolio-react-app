import React from "react";
import ScrollContainer from "../components/shared/ScrollContainer";
import "./style/sideInformation.css";
import curriculum from "../assets/cv-fjtechrd.pdf";

const SideInformationDesktop = ({ t }) => {
  return (
    <section className="side-information__desktop">
      <article className="personal__info">
        <div className="personal__img">
          <img src="/img/personal_photo.webp" alt="" />
        </div>
        <h3>Javier Gonzalez</h3>
        <h5>{t("side-information.developer")}</h5>
        <div className="personal__social-media">
          <ul className="personal__social-media">
            <li className="social-media__item">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100087280723773"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a
                target="_blank"
                href="https://www.instagram.com/fjtechnologyrdrd/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a target="_blank" href="https://twitter.com/?lang=es">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/francisco-javier-gonz%C3%A1lez-s%C3%A1nchez-b1808324b/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="social-media__item">
              <a target="_blank" href="https://github.com/FjTechRD">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </article>
      <hr />
      <ScrollContainer />
      <hr />
      <div className="btn__side-info">
        <button className="btn-side">
          <a href={curriculum} download={curriculum}>
            {t("side-information.btn-download")}
          </a>
        </button>
      </div>
    </section>
  );
};

export default SideInformationDesktop;
