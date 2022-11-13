import React from "react";
import "./style/homeServices.css";

const HomeServices = ({ trans }) => {
  return (
    <section className="services">
      <h2 className="services__title">{trans("home.my-services")}</h2>
      <p className="services__description">
        {trans("home.my-services-description")}
      </p>
      <div className="service__container">
        <article className="svc-box services__web-develpment">
          <div className="services-icon__container">
            <i className="fa-solid fa-code"></i>
          </div>
          <h3 className="services__name">{trans("home.web-development")}</h3>
          <h4 className="service__description">
            {trans("home.web-service-description")}
          </h4>
        </article>
        <article className="svc-box services__UI-UX">
          <div className="services-icon__container">
            <i className="fa-solid fa-compass-drafting"></i>
          </div>
          <h3 className="services__name">{trans("home.desing-ux-ix")}</h3>
          <h4 className="service__description">
            {trans("home.ui-ux-service-description")}
          </h4>
        </article>
        <article className="svc-box services__video-editor">
          <div className="services-icon__container">
            <i className="fa-sharp fa-solid fa-photo-film"></i>
          </div>
          <h3 className="services__name"> {trans("home.video-editor")}</h3>
          <h4 className="service__description">
            {trans("home.editor-service-description")}
          </h4>
        </article>
        <article className="svc-box services__marketing-seo">
          <div className="services-icon__container">
            <i className="fa-solid fa-comments-dollar"></i>
          </div>
          <h3 className="services__name">{trans("home.marketing-seo")}</h3>
          <h4 className="service__description">
            {trans("home.seo-service-description")}
          </h4>
        </article>
      </div>
    </section>
  );
};

export default HomeServices;
