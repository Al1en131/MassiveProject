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
            <h1>Get Rewards</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris vel vel tincidunt
              ut justo nulla est posuere.{" "}
            </p>
          </div>
          <div className="wrapper_choose_card">
            <img src="../../public/img/pickUp.png" alt="" />
            <h1>Pick Up</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris vel vel tincidunt
              ut justo nulla est posuere.{" "}
            </p>
          </div>
          <div className="wrapper_choose_card">
            <img src="../../public/img/fastRespond.png" alt="" />
            <h1>Fast Respond</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris vel vel tincidunt
              ut justo nulla est posuere.{" "}
            </p>
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
