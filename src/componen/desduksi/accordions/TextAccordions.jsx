import React from "react";
const TextAccordions = () => {
  return (
    <div
      className="text"
      style={{ paddingBottom: "100px", paddingTop: "100px" }}
    >
      <div className="container-text">
        <h1
          style={{
            margin: "90px",
            marginLeft: "12%",
            marginBottom: "30px",
            fontWeight: "600",
            fontSize: "36px",
          }}
        >
          What are fertilizer?
        </h1>
        <p
          style={{
            marginLeft: "12%",
            fontSize: "18px",
            marginRight: "14%",
          }}
        >
          Waste in the form of piles of newsprint, books, magazines, or other
          loose papers can be reused, one of which is by processing them into
          compost. Compost produced from processing waste paper contains high
          carbon content, which can be used to provide nutrients for soil and
          plants so that they can grow and develop optimally.
        </p>
      </div>
    </div>
  );
};

export default TextAccordions;
