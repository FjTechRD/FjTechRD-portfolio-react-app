import React from "react";
import { useState } from "react";
import RatingStar from "./RatingStar";
import "./style/homeRecomendations.css";

const HomeRecomendations = () => {
  return (
    <section className="recomendations">
      <div className="recomendations__header">
        <h2>Recommendations</h2>
        <p className="recomen__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          reprehenderit facilis, tempore consequuntur nemo reiciendis molestias
          rem?
        </p>
      </div>
      <div className="recomendations__container">
        <article className="recomendations__box">
          <div className="recomendations__star-valoration">
            <RatingStar />
          </div>
          <p className="recomendations__quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            architecto quisquam nostrum similique voluptatem facilis, mollitia
            consequatur
          </p>
          <h3 className="recomendations__name">Author</h3>
        </article>
        <article className="recomendations__box">
          <div className="recomendations__star-valoration">
            <RatingStar />
          </div>

          <p className="recomendations__quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            architecto quisquam nostrum similique voluptatem facilis, mollitia
            consequatur
          </p>
          <h3 className="recomendations__name">Author</h3>
        </article>
        <article className="recomendations__box">
          <div className="recomendations__star-valoration">
            <RatingStar />
          </div>
          <p className="recomendations__quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            architecto quisquam nostrum similique voluptatem facilis, mollitia
            consequatur
          </p>
          <h3 className="recomendations__name">Author</h3>
        </article>
      </div>
    </section>
  );
};

export default HomeRecomendations;
