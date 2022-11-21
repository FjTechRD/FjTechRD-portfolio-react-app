import React from "react";
import useTitle from "../hooks/useTitle";
import "./style/contact.css";

const Contact = ({ t }) => {
  useTitle({ title: `${t("seo.services")}` });

  return (
    <main className="contact">
      <h2>{t("contact.title")}</h2>
      <section className="contact__info">
        <div className="contact__info-personal">
          <div className="personal__info-content">
            <h2>{t("contact.address")}</h2>
            <p>
              c/ Pula, #13, 2da Planta, <br /> Los Castillos, Sosúa, RD
            </p>
          </div>
          <div className="personal__info-content">
            <h2>{t("contact.phone")}</h2>
            <p>+1 (829) 829-7479 </p>
          </div>
          <div className="personal__info-content">
            <h2>{t("contact.email")}</h2>
            <p>FjTechnologyRD@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="contact__options">
        <article className="form__contact-container">
          <h2 className="form__title">{t("contact.form-title")}</h2>
          <form className="form__contact">
            <div className="form__content">
              <label htmlFor="">{t("contact.form-name")}</label>
              <input type="text" />
            </div>
            <div className="form__content">
              <label htmlFor="">{t("contact.form-lastname")}</label>
              <input type="text" />
            </div>
            <div className="form__content">
              <label htmlFor="">{t("contact.form-email")}</label>
              <input type="text" />
            </div>
            <div className="form__content">
              <label htmlFor="">{t("contact.form-phone")}</label>
              <input type="text" />
            </div>
            <label htmlFor="">Mensaje</label>
            <textarea
              className="form__textarea"
              name=""
              id=""
              cols="10"
              rows="8"
            ></textarea>
            <button className="btn__form">{t("contact.form-btn")}</button>
          </form>
        </article>
      </section>

      <div className="contact-maps"></div>
    </main>
  );
};

export default Contact;
