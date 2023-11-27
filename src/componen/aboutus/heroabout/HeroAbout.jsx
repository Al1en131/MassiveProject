import React from "react";
import "./HeroAboutStyle.css";
import Placeholder from "react-bootstrap/Placeholder";

export const HeroAbout = () => {
  return (
    <>
      <div className="wrapper_about">
        <div className="wrapper_about_left">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            condimentum lectus nec orci convallis facilisis. Ut tincidunt
            sodales nisi nec tincidunt. Praesent sit amet lobortis nunc. Morbi
            euismod lorem vel auctor tincidunt. Etiam posuere metus ut urna
            maximus, sit amet lobortis lacus bibendum. Integer sodales, mauris
            vitae pharetra ultrices, dui dui scelerisque dolor, euismod aliquam
            massa odio ut metus.
          </p>
        </div>
        <div className="wrapper_about_right">
          <img src="../../public/img/heroAbout2.png" alt=""></img>
        </div>
      </div>
      <Placeholder
        as="p"
        animation="glow"
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <Placeholder
          className="rounded-pill"
          xs={1}
          size="sm"
          style={{ color: "#34C76F" }}
        />
      </Placeholder>
    </>
  );
};

export default HeroAbout;
