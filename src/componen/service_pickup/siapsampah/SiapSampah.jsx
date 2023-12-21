import React from "react";
import "./SiapSampah.css";
import img from "/public/img/heroimg.png";
import Placeholder from "react-bootstrap/Placeholder";

const SiapSampah = () => {
  return (
    <div className="siapsampah">
      <div className="text-center">
        <h1 style={{ marginTop: "40px", fontSize: "36px" }}>
          How to prepare garbage
        </h1>
      </div>

      <div className="container-sampah">
        <div className="sampahcontainer_left">
          <h3>1. Clean up the trash</h3>
          <p style={{ paddingTop: "2px" }}>
            {" "}
            Ensure that the waste is clean to avoid the <br />
            spread of germs.
          </p>

          <h3 style={{ marginTop: "35%" }}> 2. Make sure the trash is dry</h3>
          <p style={{ paddingTop: "2px" }}>
            Waste must be dry, not wet, or damp
          </p>
        </div>
        <div className="imgsampahcontainer">
          <img src={img} alt="img" />
        </div>
        <div className="sampahcontainer_right">
          <h3>3. Squeeze and Fold</h3>
          <p style={{ paddingTop: "2px" }}>
            {" "}
            Crumple and fold trash to maximize shipping <br />
            space and volume
          </p>

          <h3 style={{ marginTop: "30%" }}> 4. Pack Neatly</h3>
          <p style={{ paddingTop: "2px" }}>
            {" "}
            Pack the waste in cardboard or other packaging. <br />
            Don't forget to write the SYW code on the package
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
    </div>
  );
};

export default SiapSampah;
