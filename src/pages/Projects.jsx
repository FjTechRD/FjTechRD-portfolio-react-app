import React from "react";
import Technologies from "../components/projects/Technologies";
import "./style/projects.css";

const Projects = ({ t }) => {
  return (
    <main className="projects">
      <h2>{t("projects.projects-title")}</h2>
      <section className="projects__container">
        <article className="project__box pokeapi">
          <header className="project__image">
            <img src="/img/thumnails/pokeapi.webp" alt="" />
          </header>
          <div className="project__body">
            <h2>Poke Api</h2>
            <h5>{t("projects.projects-hover")}</h5>
          </div>
          <Technologies />
          <div className="btn-section">
            <button className="btn-demo">
              <a
                target="_blank"
                href="https://elegant-cranachan-3bd160.netlify.app/"
              >
                Demo <i class="fa-brands fa-codepen"></i>
              </a>
            </button>
            <button className="btn-code">
              <a
                target="_blank"
                href="https://github.com/FjTechRD/poke-api-app-gen18aca"
              >
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            </button>
          </div>
        </article>
        <article className="project__box eCommerce">
          <header className="project__image">
            <img src="/img/thumnails/e-coomerce__react.webp" alt="" />
          </header>
          <Technologies />
          <div className="project__body">
            <h2>E-Commerce</h2>
            <h5>{t("projects.projects-hover")}</h5>
          </div>
          <div className="btn-section">
            <button className="btn-demo">
              <a
                target="_blank"
                href="https://stately-peony-b8bde4.netlify.app/"
              >
                Demo <i class="fa-brands fa-codepen"></i>
              </a>
            </button>
            <button className="btn-code">
              <a
                target="_blank"
                href="https://github.com/FjTechRD/ecoomerce-app-react-gen18"
              >
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            </button>
          </div>
        </article>
        <article className="project__box rick-and-morty">
          <header className="project__image rick__image">
            <img src="/img/thumnails/rick_and_morty.webp" alt="" />
          </header>
          <Technologies />
          <div className="project__body">
            <h2>Rick & Morty App</h2>
            <h5>{t("projects.projects-hover")}</h5>
          </div>
          <div className="btn-section">
            <button className="btn-demo">
              <a
                target="_blank"
                href="https://elegant-rolypoly-c8750f.netlify.app/"
              >
                Demo <i class="fa-brands fa-codepen"></i>
              </a>
            </button>
            <button className="btn-code">
              <a
                target="_blank"
                href="https://github.com/FjTechRD/rick-and-morty-app-react"
              >
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projects;
