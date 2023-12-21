import React from "react";
import "./ArtikelPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ArtikelPage = () => {
  return (
    <div className="artikel">
      <div className="text-container">
        <h1
          style={{
            margin: "25px",
            paddingLeft: "25px",
            fontSize: "34px",
            fontWeight: "600",
          }}
        >
          News, Articles About Paper Waste
        </h1>
        <p style={{ paddingLeft: "50px", fontSize: "20px" }}>
          Know more about paper waste through the news and articles below
        </p>
      </div>
    </div>
  );
};

export default ArtikelPage;
