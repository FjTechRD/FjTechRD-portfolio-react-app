import React from "react";
import "./style/education.css";

const Education = ({ t }) => {
  const translateObj = {
    title: t("education.education-title"),
    webDevelopment: t("education.web-development-fundaments"),
    reactJs: t("education.react-js"),
    hacking: t("education.cibersecurity"),
    socialEng: t("education.social-engineering"),
  };

  return (
    <main className="education">
      <h2 className="page__title">{translateObj.title}</h2>
      <section className="education__certificates">
        {/** Certificaciones Desarollo web */}
        <div className="web__development">
          <article className="education__container">
            <div className="edu-fundaments__box">
              <h2 className="certificated__title">
                {translateObj.webDevelopment}
              </h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/fundaments_certificate.webp"
                  alt="web Developer Fundaments certification"
                />
              </div>
            </div>
            <div className="edu-fundaments__box">
              <h2>{translateObj.reactJs}</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/react_certificate.webp"
                  alt="graduated-title"
                />
              </div>
            </div>
          </article>
        </div>

        {/* Inicio certificaciones ciberseguridad */}
        <div className="cibersecurity">
          <article className="education__container">
            <div className="edu-fundaments__box">
              <h2 className="certificated__title">{translateObj.hacking}</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/cibersecurity_certificate.webp"
                  alt="web Developer Fundaments certification"
                />
              </div>
            </div>
            <div className="edu-fundaments__box">
              <h2 className="certificated__title">{translateObj.socialEng}</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/ingenieriaSocial_certificate.webp"
                  alt="web Developer Fundaments certification"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Education;
