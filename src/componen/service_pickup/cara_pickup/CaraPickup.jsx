import React from "react";
import "./CaraPickup.css";
import Placeholder from "react-bootstrap/Placeholder";
import jemputimg from "/public/img/jemput.png";
import kemasimg from "/public/img/kemas.png";
import prosesimg from "/public/img/proses.png";
import uploudimg from "/public/img/uploud.png";

const CaraPickup = () => {
  return (
    <div className="carapickup">
      <div className="text-center">
        <h1 style={{ marginTop: "7rem", fontSize: "36px" }}>
          How to use the pick up feature in the mobile app
        </h1>
        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          We accept paper waste that can still be reused through the recycling
          process.{" "}
        </p>
      </div>
      <div className="wrapper_choose_cards">
        <div className="wrapper_choose_card">
          <img src={kemasimg} alt="" />
          <h4 style={{ paddingTop: "20px" }}>Pick and Pack</h4>
          <p style={{ fontSize: "13px", margin: "0 10px" }}>
            Sort and make sure the waste is clean and dry. Pack the waste
            properly and safely.{" "}
          </p>
        </div>
        <div className="wrapper_choose_card">
          <img src={uploudimg} alt="" />
          <h4 style={{ paddingTop: "20px" }}>Upload trash photos</h4>
          <p style={{ fontSize: "13px", margin: "0 20px" }}>
            Upload a photo of the waste to be sold and include pickup and
            payment information{" "}
          </p>
        </div>
        <div className="wrapper_choose_card">
          <img src={jemputimg} alt="" />
          <h4 style={{ paddingTop: "20px" }}>Trash Pickup</h4>
          <p style={{ fontSize: "13px", margin: "0 10px" }}>
            We will come directly to your location for waste pickup.{" "}
          </p>
        </div>
        <div className="wrapper_choose_card">
          <img src={prosesimg} alt="" />
          <h4 style={{ paddingTop: "20px" }}>Managed Waste</h4>
          <p style={{ fontSize: "13px", margin: "0 10px" }}>
            The waste that has arrived will be managed by us responsibly.{" "}
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
      <div className="penimbangan">
        <h1 style={{ marginTop: "7rem", fontSize: "36px" }}>Weighing Flow</h1>
        <img src="/public/img/penimbangan.png" />
      </div>
    </div>
  );
};

export default CaraPickup;
