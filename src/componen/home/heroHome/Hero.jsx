import React from "react";
import Button from "react-bootstrap/Button";
import "./StyleHero.css";

export const Hero = () => {
  return (
    <>
      <div className="container-home">
        <div className="hero_left">
          <img src="../../public/img/Hero.png" alt=""></img>
        </div>
        <div className="hero_right">
          <h1>PAPER</h1>
          <h1>WASTE</h1>
          <p style={{ paddingRight: "20px" }}>
            Paper waste or what is called the accumulation of paper waste that
            is not managed properly and eventually accumulates into garbage.
          </p>
          <button className="hero">READ MORE</button>
        </div>
      </div>
      <div className="variasi">
        <img src="../../public/img/Variasi.png" alt=""></img>
      </div>
    </>
  );
};

export default Hero;
