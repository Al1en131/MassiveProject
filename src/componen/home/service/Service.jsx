import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import "./styleService.css";

function Service() {
  return (
    <>
      <div className="container-service">
        <div className="service_left">
          <h1>OUR SERVICES</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div className="card-service">
            <Card
              border=""
              style={{
                width: "15rem",
                height: "20rem",
                marginRight: "20px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <Card.Body
                style={{ backgroundColor: "#D8D8D8", borderRadius: "20px" }}
              >
                <Card.Title style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Pick Up
                </Card.Title>
                <Card.Text style={{ fontSize: "15px" }}>
                  Pick Up feature that makes it easy for users to transport
                  waste efficiently
                </Card.Text>
                <a>
                  SEE MORE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </Card.Body>
            </Card>
            <br />
            <Card
              border=""
              style={{
                width: "15rem",
                height: "20rem",
                marginRight: "20px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <Card.Body
                style={{ backgroundColor: "#D8D8D8", borderRadius: "20px" }}
              >
                <Card.Title style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Education
                </Card.Title>
                <Card.Text style={{ fontSize: "15px" }}>
                  Education that contains interactive information that guides
                  users on how to recycle scrap on their own.
                </Card.Text>
                <a>
                  SEE MORE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </Card.Body>
            </Card>
            <br />
            <Card
              border=""
              style={{
                width: "15rem",
                height: "20rem",
                marginRight: "20px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <Card.Body
                style={{ backgroundColor: "#D8D8D8", borderRadius: "20px" }}
              >
                <Card.Title style={{ fontSize: "20px", fontWeight: "bold" }}>
                  News
                </Card.Title>
                <Card.Text style={{ fontSize: "15px" }}>
                  Let's take a look at the latest news highlights covering
                  environmental developments regarding today's paper
                </Card.Text>
                <a>
                  SEE MORE{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
        <div className="service_right">
          <img src="../../public/img/Service.png" alt=""></img>
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
}

export default Service;
