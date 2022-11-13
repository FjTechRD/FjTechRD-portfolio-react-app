import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../../pages/style/home.css";

const Greetings = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  const [t, i18n] = useTranslation("global");
  return (
    <div className="greeting__content">
      <h1 className="about-me__greetings">
        {t("home.header-greetings")}
        <br /> {t("home.header-verb")} <span>Javier</span> Gonzalez
        <br />{" "}
        <h4>
          {t("home.header-developer")} <span>{t("home.header-front-end")}</span>
        </h4>
      </h1>
      <p className="about-me__greetings-description">
        {t("home.header-description")}
      </p>
      <button onClick={handleContact} className="about-me__btn">
        {t("home.header-btn")}
      </button>
    </div>
  );
};

export default Greetings;
