import React from "react";
import Greetings from "../components/home/Greetings";
import HomeRecomendations from "../components/home/HomeRecomendations";
import HomeServices from "../components/home/HomeServices";
import ParticlesBg from "../components/home/ParticlesBg";
import "./style/home.css";

const Home = ({ t, i18n }) => {
  return (
    <div className="home">
      <section className="about-me">
        <ParticlesBg />
        <div className="about-me__info-cont">
          <Greetings />
        </div>
      </section>
      <main className="home__container">
        <section className="home-services__content">
          <HomeServices trans={t} />
        </section>
        <section className="home-recomendations-content">
          <HomeRecomendations trans={t} />
        </section>
      </main>
    </div>
  );
};

export default Home;
