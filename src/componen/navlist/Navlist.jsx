import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./StyleNavlist.css";
import { Link } from "react-router-dom";

function Navlist() {
  return (
    <Navbar
      expand="lg"
      bg="white"
      style={{ borderBottom: "1px solid #F1EFEF" }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-4 "
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Link
              to={"/home"}
              style={{
                marginLeft: "40px",
                textDecoration: "none",
                marginTop: "6.5px",
                color: "#595959",
              }}
            >
              <Nav>Home</Nav>
            </Link>
            <Link
              to={"/aboutUs"}
              style={{
                marginLeft: "40px",
                textDecoration: "none",
                marginTop: "6.5px",
                color: "#595959",
              }}
            >
              <Nav>About Us</Nav>
            </Link>
            <NavDropdown
              title="Service"
              id="navbarScrollingDropdown"
              style={{ marginLeft: "30px" }}
            >
              <NavDropdown.Item href="" style={{ fontSize: "13px" }}>
                Pick Up
              </NavDropdown.Item>
              <NavDropdown.Item href="" style={{ fontSize: "13px" }}>
                Education
              </NavDropdown.Item>
              <NavDropdown.Item href="" style={{ fontSize: "13px" }}>
                News
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" style={{ marginLeft: "30px" }}>
              Contact Us
            </Nav.Link>
          </Nav>
          <Navbar.Brand
            style={{
              marginRight: "260px",
              marginLeft: "30px",
              fontSize: "25px",
              color: "#34C76F",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
            href="#"
          >
            GoPaper
          </Navbar.Brand>
          <Form className="d-flex" style={{ marginLeft: "30px" }}>
            <Form.Control
              type="search"
              placeholder="Search..."
              className="rounded-pill me-2"
              aria-label="Search"
              style={{ backgroundColor: "#F1EFEF" }}
            />
          </Form>
          <div className="profile">
            <div className="profile-dropdown">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  style={{ color: "grey" }}
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </a>
              <div className="dropdown-content">
                <div className="infoprofile">
                  <div className="profile-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      style={{ color: "grey", marginLeft: "5px" }}
                      fill="currentColor"
                      class="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    <div className="profile-name">
                      <p style={{ fontWeight: "600" }}>Nama Anda</p>
                      <p>0812 5670 9090</p>
                    </div>
                  </div>
                  <div className="button-profile" style={{}}>
                    <Link
                      to={"/profile"}
                      style={{
                        color: "#34C76F",
                        textAlign: "center",
                        textDecoration: "none",
                      }}
                    >
                      Profile
                    </Link>
                  </div>
                </div>

                <div className="Account">
                  <h5>Account</h5>
                  <a>Settings and Privacy</a>
                  <a>Help</a>
                  <a style={{ marginBottom: "10px" }}>Language</a>
                </div>
                <div className="keluar">
                  <Link to={"/login"}>Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navlist;
