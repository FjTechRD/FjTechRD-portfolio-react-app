import React from "react";
import HomeRecomendations from "../components/home/HomeRecomendations";
import HomeServices from "../components/home/HomeServices";
import ParticlesBg from "../components/home/ParticlesBg";
import "./style/home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="about-me">
        <ParticlesBg />
        <div className="about-me__info-cont">
          <div className="greeting__content">
            <h1 className="about-me__greetings">
              Greetings!
              <br /> I'm <span>Javier</span> Gonzalez
              <br /> <span>Front-End </span>
              Developer
            </h1>
            <p className="about-me__greetings-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              aut vitae nam, deleniti quibusdam quod sequi debitis accusamus
              molestiae
            </p>
            <button className="about-me__btn">Contact Me!</button>
          </div>
        </div>
      </section>
      <main className="home__container">
        <section className="home-services__content">
          <HomeServices />
        </section>
        <section className="home-recomendations-content">
          <HomeRecomendations />
        </section>
      </main>
    </div>
  );
};

export default Home;
