import React from "react";
import "./hero.css";
import bghero from "/public/img/hero1.png";
import origami from "/public/img/origami1.png";
import Gambar from "/public/img/GambarEco.png";

const HeroPage = () => {
  return (
    <div>
      <div className="login">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${bghero})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "90vh",
          }}
        >
          {" "}
          <div className="body">
            <div className="desduksi">
              <div className="img-desduksi">
                <img src={Gambar} />
              </div>
              <div className="text_left">
                <h1 style={{ fontWeight: "800", fontSize: "40px" }}>
                  <img src={origami} /> Ecobrik
                </h1>
                <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                  Sampah kertas dikumpulkan dan didaur ulang untuk menghasilkan
                  kertas baru.{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
