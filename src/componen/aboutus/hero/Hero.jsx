import React from "react";
import "./HeroStyle.css";
import Placeholder from "react-bootstrap/Placeholder";

const Hero = () => {
  return (
    <>
      <div className="wrapper">
        <div className="wrapper_left">
          <img
            src="../../public/img/heroAbout.png"
            alt=""
            style={{ width: "500px", height: "500px" }}
          ></img>
        </div>
        <div className="wrapper_right">
          <h1>GoPaper</h1>
          <p>
            With GoPaper you can exchange waste paper for money and can make
            your home less cluttered with waste paper.
          </p>
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

export default Hero;
