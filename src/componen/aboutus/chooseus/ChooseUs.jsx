import React from "react";
import "./ChooseUs.css";
import Placeholder from "react-bootstrap/Placeholder";

export const ChooseUs = () => {
  return (
    <>
      <div className="wrapper_choose">
        <div className="wrapper_choose_title">
          <h1>Why Choose Us?</h1>
        </div>
        <div className="wrapper_choose_cards">
          <div className="wrapper_choose_card">
            <img src="../../public/img/getReward.png" alt="" />
            <h2 style={{ paddingTop: "10px" }}>Get Rewards</h2>
            <p>you can exchange your trash for money </p>
          </div>
          <div className="wrapper_choose_card">
            <img src="../../public/img/pickUp.png" alt="" />
            <h2 style={{ paddingTop: "10px" }}>Pick Up</h2>
            <p>We serve to pick up, weigh and pay for your waste </p>
          </div>
          <div className="wrapper_choose_card">
            <img src="../../public/img/fastRespond.png" alt="" />
            <h2 style={{ paddingTop: "10px" }}> Fast Respond</h2>
            <p>We respond quickly to your message </p>
          </div>
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

export default ChooseUs;
