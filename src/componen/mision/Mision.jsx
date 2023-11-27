import React from "react";
import Card from "react-bootstrap/Card";
import "./styleMision.css";

function Mision() {
  return (
    <>
      <div className="container-mision">
        <div className="mision_left">
          <img src="../../public/img/Mision.png" alt=""></img>
        </div>
        <div className="mision_right">
          <h1>OUR MISION</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="card-mision">
            <Card
              border="success"
              style={{
                width: "120px",
                height: "120px",
                marginRight: "20px",
                textAlign: "center",
                backgroundColor: "#34C76F",
                color: "white",
              }}
            >
              <Card.Body style={{ padding: "10px" }}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  + 100 K
                </h1>
                <h2 style={{ color: "white", fontSize: "14px" }}>
                  {" "}
                  SUBSCRIBES
                </h2>
              </Card.Body>
            </Card>
            <br />
            <Card
              border="success"
              style={{
                width: "120px",
                height: "120px",
                marginRight: "20px",
                textAlign: "center",
                backgroundColor: "#34C76F",
                color: "white",
              }}
            >
              <Card.Body style={{ padding: "10px" }}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  + 150 K
                </h1>
                <h2 style={{ color: "white", fontSize: "14px" }}>SUBSCRIBES</h2>
              </Card.Body>
            </Card>
            <br />
            <Card
              border="success"
              style={{
                width: "120px",
                height: "120px",
                marginRight: "20px",
                textAlign: "center",
                backgroundColor: "#34C76F",
                color: "white",
              }}
            >
              <Card.Body style={{ padding: "10px" }}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  + 250 K
                </h1>
                <h2 style={{ color: "white", fontSize: "14px" }}>SUBSCRIBES</h2>
              </Card.Body>
            </Card>
            <br />
            <Card
              border="success"
              style={{
                width: "120px",
                height: "120px",
                marginRight: "20px",
                textAlign: "center",
                backgroundColor: "#34C76F",
                color: "white",
              }}
            >
              <Card.Body style={{ padding: "10px" }}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  + 500 K
                </h1>
                <h2 style={{ color: "white", fontSize: "14px" }}>SUBSCRIBES</h2>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mision;
