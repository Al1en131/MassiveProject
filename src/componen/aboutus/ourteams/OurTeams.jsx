import React from "react";
import "./OurTeams.css";

export const OurTeams = () => {
  return (
    <>
      <div className="wrapper_ourteams">
        <div className="wrapper_ourteams_title">
          <h1>MEET OUR TEAMS</h1>
          <p>
            We are proud to introduce our team from Frinight, which consists of
            individuals who are highly committed to achieving success together.
          </p>
        </div>
        <div className="wrapper_ourteams_cards">
          <div className="wrapper_ourteams_card">
            <img src="../../public/img/teams1.png" alt="" />
            <h4>Nama</h4>
            <p>Team-Position</p>
          </div>
          <div className="wrapper_ourteams_card">
            <img src="../../public/img/teams2.png" alt="" />
            <h4>Nama</h4>
            <p>Team-Position</p>
          </div>
          <div className="wrapper_ourteams_card">
            <img src="../../public/img/teams3.png" alt="" />
            <h4>Nama</h4>
            <p>Team-Position</p>
          </div>
          <div className="wrapper_ourteams_card">
            <img src="../../public/img/teams4.png" alt="" />
            <h4>Nama</h4>
            <p>Team-Position</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeams;
