import React from "react";
import "./HeroAboutStyle.css";
import Placeholder from "react-bootstrap/Placeholder";

export const HeroAbout = () => {
  return (
    <>
      <div className="wrapper_about">
        <div className="wrapper_about_left" style={{ marginTop: "70px" }}>
          <h1>ABOUT US</h1>
          <p>
            GoPaper was only established in 2023 to provide information
            facilities to manage paper waste practically and earn money just by
            exchanging unused paper. We also present tips & tricks for those who
            want to turn paper waste into crafts.
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
