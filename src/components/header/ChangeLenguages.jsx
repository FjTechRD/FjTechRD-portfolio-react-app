import React from "react";
import spanishFlag from "../../assets/spanish_flag.svg";
import englishFlag from "../../assets/english_flasg.svg";
import { useTranslation } from "react-i18next";
import "../../shared/style/mainNavMenu.css";

const ChangeLenguages = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="lenguages-changer">
      <button
        className="btn_lenguage"
        onClick={() => i18n.changeLanguage("es")}
      >
        <img src={spanishFlag} alt={t("change-lenguages.spanish-flag")} />
      </button>
      <button
        className="btn_lenguage american_flag"
        onClick={() => i18n.changeLanguage("en")}
      >
        <img src={englishFlag} alt={t("change-lenguages.american-flag")} />
      </button>
    </div>
  );
};

export default ChangeLenguages;
