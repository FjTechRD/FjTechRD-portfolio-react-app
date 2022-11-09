import React from "react";
import { useNavigate } from "react-router-dom";
import HomeRecomendations from "../components/home/HomeRecomendations";
import HomeServices from "../components/home/HomeServices";
import ParticlesBg from "../components/home/ParticlesBg";
import "./style/home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

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
              I am a front-end developer with a high desire to learn, I'm
              fascinated by learning about new platforms and making a mark in
              the world of development!
            </p>
            <button onClick={handleContact} className="about-me__btn">
              Contact Me!
            </button>
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
