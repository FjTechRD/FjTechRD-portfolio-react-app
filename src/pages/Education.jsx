import React from "react";
import "./style/education.css";

const Education = () => {
  return (
    <main className="education">
      <h2 className="page__title">Education</h2>
      <section className="education__certificates">
        {/** Certificaciones Desarollo web */}
        <div className="web__development">
          <article className="education__container">
            <div className="edu-fundaments__box">
              <h2 className="certificated__title">Web Developer Fundaments</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/fundaments_certificate.png"
                  alt="web Developer Fundaments certification"
                />
              </div>
            </div>
            <div className="edu-fundaments__box">
              <h2>React Js</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/react_certificate.png"
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
              <h2 className="certificated__title">Cibersecurity</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/cibersecurity_certificate.jpg"
                  alt="web Developer Fundaments certification"
                />
              </div>
            </div>
            <div className="edu-fundaments__box">
              <h2 className="certificated__title">Social engineering</h2>
              <div className="certificated__education">
                <img
                  src="/img/certificates/ingenieriaSocial_certificate.jpg"
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
