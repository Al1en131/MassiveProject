import React from "react";
import Button from "react-bootstrap/Button";
import "./StyleHero.css";

export const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="hero_left">
          <img src="../../public/img/Hero.png" alt=""></img>
        </div>
        <div className="hero_right">
          <h1>PAPER</h1>
          <h1>WASTE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="variasi">
        <img src="../../public/img/Variasi.png" alt=""></img>
      </div>
    </>
  );
};

export default Hero;
