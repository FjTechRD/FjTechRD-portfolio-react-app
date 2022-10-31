import React from "react";
import "./style/homeServices.css";

const HomeServices = () => {
  return (
    <section className="services">
      <h2 className="services__title">my services</h2>
      <p className="services__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
      </p>
      <div className="service__container">
        <article className="svc-box services__web-develpment">
          <div className="services-icon__container">
            <i className="fa-solid fa-code"></i>
          </div>
          <h3 className="services__name">Web Development</h3>
          <h4 className="service__description">
            Responsive Web Desing using Html, Css, js and React
          </h4>
        </article>
        <article className="svc-box services__UI-UX">
          <div className="services-icon__container">
            <i className="fa-solid fa-compass-drafting"></i>
          </div>
          <h3 className="services__name">UI/UX Desing</h3>
          <h4 className="service__description">
            Desing the best user interface of market!
          </h4>
        </article>
        <article className="svc-box services__video-editor">
          <div className="services-icon__container">
            <i className="fa-sharp fa-solid fa-photo-film"></i>
          </div>
          <h3 className="services__name">Video Editor</h3>
          <h4 className="service__description">
            all you want with premiere pro, After Effects, photoshop and
            illustrator
          </h4>
        </article>
        <article className="svc-box services__marketing-seo">
          <div className="services-icon__container">
            <i className="fa-solid fa-comments-dollar"></i>
          </div>
          <h3 className="services__name">Marketing & SEO</h3>
          <h4 className="service__description">
            We put your page and bussines in the best position!
          </h4>
        </article>
      </div>
    </section>
  );
};

export default HomeServices;
