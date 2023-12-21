import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./accordions.css";
import Gambar from "/public/img/mockup.png";
import gambar from "/public/img/Frame.png";

const AccordionPage = () => {
  return (
    <div>
      <div className="container-accordion" style={{ marginTop: "100px" }}>
        <div className="accord1">
          <Accordion className="item" style={{ marginTop: "60px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Select and Clean Paper</Accordion.Header>
              <Accordion.Body style={{ fontSize: "12px" }}>
                Shared waste paper and paper products such as cardboard 2 cm
                wide to form long torn pieces. The smaller the size of the
                shredded paper, the faster it will decompose. Make sure the
                paper used is not glossy, laminated, oil paper, and colored or
                has lots of ink. This is because the plastic layer contained in
                the shiny layer contains toxins.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Header>Cut and stack</Accordion.Header>
            <Accordion.Body>
              Shred waste paper and paper products such as cardboard 2 cm wide
              to form long torn pieces. The smaller the size of the shredded
              paper, the faster it will decompose. Make sure the paper used is
              not glossy, laminated, oil paper, and colored or has lots of ink.
              This is because the plastic layer contained in the shiny layer
              contains toxins.
            </Accordion.Body>
            <Accordion.Header>Combine and Decorate</Accordion.Header>
            <Accordion.Body>
              Next, pile it with nitrogenous materials such as pieces of fruit,
              vegetables or grass. Repeat the stacking process over and over
              until it is full.
            </Accordion.Body>
            <Accordion.Header>Finishing and Storage</Accordion.Header>
            <Accordion.Body>
              Moisten the mixture with water until it is moist, once a week stir
              the mixture evenly to help the rotting process.
            </Accordion.Body>
          </Accordion>
        </div>

        <div className="accord2">
          <img src={Gambar} style={{ height: "70vh" }} />
        </div>
      </div>
      <div
        className="accord-img"
        style={{
          padding: "50px 0",
          textAlign: "center",
        }}
      >
        <img src={gambar} style={{ width: "80%" }} />
      </div>
    </div>
  );
};

export default AccordionPage;
