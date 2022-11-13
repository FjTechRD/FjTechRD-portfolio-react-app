import React from "react";
import "./style/myServices.css";

const MyServices = ({ t }) => {
  return (
    <main className="my__services">
      <h2 className="page__title">{t("my-services.my-services-title")}</h2>
      <section className="services__primary">
        <article className="service__box">
          <i className="fa-solid fa-code"></i>
          <div className="header__srv-box">
            <h3>{t("my-services.web-development")}</h3>
            <p>{t("my-services.web-development-description")}</p>
          </div>
          <div className="service__image-box">
            <img src="/img/webDevelopment.webp" alt="" />
          </div>
        </article>
        <article className="service__box">
          <i className="fa-solid fa-compass-drafting"></i>
          <div className="header__srv-box">
            <h3>{t("my-services.ui-ux")}</h3>
            <p>{t("my-services.ui-ux-description")}</p>
          </div>
          <div className="service__image-box">
            <img src="/img/ui-ux.webp" alt="" />
          </div>
        </article>
        <article className="service__box">
          <i className="fa-sharp fa-solid fa-photo-film"></i>
          <div className="header__srv-box">
            <h3>{t("my-services.video-editor")}</h3>
            <p>{t("my-services.video-editor-description")}</p>
          </div>
          <div className="service__image-box">
            <img src="/img/videoEditor.webp" alt="" />
          </div>
        </article>
        <article className="service__box">
          <i className="fa-solid fa-comments-dollar"></i>
          <div className="header__srv-box">
            <h3>{t("my-services.marketing-seo")}</h3>
            <p>{t("my-services.marketing-seo-description")}</p>
          </div>
          <div className="service__image-box">
            <img src="/img/seo.webp" alt="" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default MyServices;
