import React from "react";
import "./style/myServices.css";

const MyServices = () => {
  return (
    <main className="my__services">
      <h2 className="page__title">My Services</h2>
      <section className="services__primary">
        <article className="service__box">
          <i className="fa-solid fa-code"></i>
          <div className="header__srv-box">
            <h3>Web Development</h3>
            <p>
              The best way to build your platform or web app that you were
              looking for
            </p>
          </div>
          <div className="service__image-box">
            <img src="/img/webDevelopment.webp" alt="" />
          </div>
        </article>
        <article className="service__box">
          <i className="fa-solid fa-compass-drafting"></i>
          <div className="header__srv-box">
            <h3>UI/UX Design</h3>
            <p>
              We don't want to force our ideas on customers, just do what they
              want
            </p>
          </div>
          <div className="service__image-box">
            <img src="/img/ui-ux.webp" alt="" />
          </div>
        </article>
        <article className="service__box">
          <i className="fa-sharp fa-solid fa-photo-film"></i>
          <div className="header__srv-box">
            <h3>Video Editor</h3>
            <p>
              All you want with premiere pro, After Effects, photoshop and
              illustrator
            </p>
          </div>
          <div className="service__image-box">
            <img src="/img/videoEditor.webp" alt="" />
          </div>
        </article>
        <article className="service__box">
          <i className="fa-solid fa-comments-dollar"></i>
          <div className="header__srv-box">
            <h3>Marketing & Seo</h3>
            <p>We put your page and bussines in the best position!</p>
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
