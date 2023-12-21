import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./StyleNavlist.css";
import { Link } from "react-router-dom";
import { Row, Col, Modal } from "reactstrap";
import TextField from "../textfield/textField";
import { useUser } from "../../context/UserContext";

function Navlist() {
  const { getUserData } = useUser();
  const data = getUserData();

  const [demoModal, setDemoModal] = React.useState(false);
  const [demoContact, setDemoContact] = React.useState(false);

  const imageStyle = {
    maxWidth: "80%",
    maxHeight: "500px",
    alignSelf: "center",
  };

  const textContainerStyle = {
    textAlign: "center",
    marginTop: "30px",
  };
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
                marginLeft: "50px",
                textDecoration: "none",
                marginTop: "6.5px",
                color: "rgb(90,90,90)",
                fontWeight: "400",
              }}
            >
              <Nav>Home</Nav>
            </Link>
            <Link
              to={"/aboutUs"}
              style={{
                marginLeft: "50px",
                textDecoration: "none",
                marginTop: "6.5px",
                color: "rgb(90,89,90)",
                fontWeight: "400",
              }}
            >
              <Nav>About Us</Nav>
            </Link>
            <NavDropdown
              title="Service"
              id="navbarScrollingDropdown"
              style={{ marginLeft: "40px" }}
            >
              <Link
                to={"/pickup"}
                style={{
                  fontSize: "13px",
                  textDecoration: "none",
                  color: "rgb(90,90,90)",
                  marginLeft: "10px",
                  marginLeft: "10px",
                  lineHeight: "2",
                }}
              >
                Pick Up
              </Link>
              <br />

              <Link
                to={"/edukasi"}
                style={{
                  fontSize: "13px",
                  textDecoration: "none",
                  color: "rgb(90,90,90)",
                  marginLeft: "10px",
                  marginLeft: "10px",
                  lineHeight: "2",
                }}
              >
                Education
              </Link>
              <br />
              <Link
                to={"/news"}
                style={{
                  fontSize: "13px",
                  textDecoration: "none",
                  color: "rgb(90,90,90)",
                  marginLeft: "10px",
                  lineHeight: "2",
                }}
              >
                News
              </Link>
              <br />
            </NavDropdown>
            <Link
              style={{
                marginLeft: "40px",
                textDecoration: "none",
                marginTop: "6.5px",
                color: "rgb(90,90,90)",
                fontWeight: "400",
              }}
              onClick={() => setDemoContact(true)}
            >
              <Nav>Contact Us</Nav>
            </Link>
            <Modal
              size="lg"
              isOpen={demoContact}
              toggle={() => setDemoContact(false)}
            >
              <div className="" style={{ textAlign: "right" }}>
                <button
                  className="close"
                  onClick={() => setDemoContact(false)}
                  style={{ marginTop: "10px", marginRight: "10px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
              <div className="modal-body">
                <div className="modal_contact">
                  <div className="modal_contact_form">
                    <form action="">
                      <h1>We Are Happy To Help & Receive Messages from You</h1>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        style={{ marginLeft: "12px" }}
                      >
                        <option selected>Service</option>
                        <option value="1">Corporate & Brand</option>
                        <option value="2">Partner</option>
                        <option value="3">Bussines</option>
                        <option value="4">Mitra</option>
                        <option value="5">Government</option>
                      </select>

                      <TextField label={"Full Name"} type={"text"} />
                      <TextField label={"Phone Number"} type={"number"} />
                      <TextField label={"Email"} type={"email"} />
                      <TextField label={"Message"} type={"text"} />
                      <div className="contact_button">
                        <button>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className="modal_contact_information">
                    <div className="wraper_information">
                      <div className="information_contact">
                        <h6>Our Service</h6>
                        <ul>
                          <li>
                            <img
                              src="../../public/img/icon_telepon.png"
                              alt=""
                            />
                            +62 8134 0056 261
                          </li>
                          <li>
                            <img
                              src="../../public/img/icon_message.png"
                              alt=""
                            />
                            Info@gopaper.com
                            <hr />
                          </li>
                        </ul>
                      </div>
                      <div className="information_contact">
                        <h6>Corporate & Brand</h6>
                        <ul>
                          <li>
                            <img
                              src="../../public/img/icon_telepon.png"
                              alt=""
                            />
                            +62 8134 0056 261
                          </li>
                          <li>
                            <img
                              src="../../public/img/icon_message.png"
                              alt=""
                            />
                            Info@gopaper.com
                            <hr />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wraper_information">
                      <div className="information_contact">
                        <h6>Our Partner</h6>
                        <ul>
                          <li>
                            <img
                              src="../../public/img/icon_telepon.png"
                              alt=""
                            />
                            +62 8134 0056 261
                          </li>
                          <li>
                            <img
                              src="../../public/img/icon_message.png"
                              alt=""
                            />
                            Info@gopaper.com
                            <hr />
                          </li>
                        </ul>
                      </div>
                      <div className="information_contact">
                        <h6>Bussines</h6>
                        <ul>
                          <li>
                            <img
                              src="../../public/img/icon_telepon.png"
                              alt=""
                            />
                            +62 8134 0056 261
                          </li>
                          <li>
                            <img
                              src="../../public/img/icon_message.png"
                              alt=""
                            />
                            Info@gopaper.com
                            <hr />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="wraper_information">
                      <div className="information_contact">
                        <h6>Our Mitra</h6>
                        <ul>
                          <li>
                            <img
                              src="../../public/img/icon_telepon.png"
                              alt=""
                            />
                            +62 8134 0056 261
                          </li>
                          <li>
                            <img
                              src="../../public/img/icon_message.png"
                              alt=""
                            />
                            Info@gopaper.com
                            <hr />
                          </li>
                        </ul>
                      </div>
                      <div className="information_contact">
                        <h6>Government</h6>
                        <ul>
                          <li>
                            <img
                              src="../../public/img/icon_telepon.png"
                              alt=""
                            />
                            +62 8134 0056 261
                          </li>
                          <li>
                            <img
                              src="../../public/img/icon_message.png"
                              alt=""
                            />
                            Info@gopaper.com
                            <hr />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </Nav>
          <Navbar.Brand
            style={{
              paddingRight: "150px",
              paddingLeft: "50px",
              fontSize: "25px",
              color: "#34C76F",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
            href="#"
          >
            <img
              src="public/img/logoweb.png"
              style={{ width: "180px", marginRight: "40px" }}
            ></img>
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
                      <p style={{ fontWeight: "600" }}>{data.nama}</p>
                      <p>{data.no_hp}</p>
                    </div>
                  </div>
                  <div
                    className="button-profile"
                    style={{ marginBottom: "10px" }}
                  >
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
                  <Link to={"/profile"}>Settings and Privacy</Link>
                  <Link to={"/profile"}>Help</Link>
                  <Link to={"/profile"} style={{ marginBottom: "10px" }}>
                    Language
                  </Link>
                </div>
                <div className="keluar">
                  <Row id="modals">
                    <Col md="15">
                      <div className="keluar">
                        <a
                          onClick={() => setDemoModal(true)}
                          className="button-profile"
                        >
                          Logout
                        </a>
                      </div>
                    </Col>
                    <Modal
                      isOpen={demoModal}
                      toggle={() => setDemoModal(false)}
                      style={{ width: "450px" }}
                    >
                      <div className="" style={{ textAlign: "right" }}>
                        <button
                          className="close"
                          onClick={() => setDemoModal(false)}
                          style={{ marginTop: "10px", marginRight: "10px" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            class="bi bi-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                          </svg>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div
                          className="centered-image"
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <div style={imageStyle}>
                            <img
                              src="public/img/gambar.png"
                              alt=""
                              className="smaller-image"
                            />{" "}
                            <br />
                            <div style={textContainerStyle}>
                              <p
                                style={{ fontSize: "20px", fontWeight: "500" }}
                              >
                                Remember me in this browser
                              </p>
                              <p
                                style={{
                                  fontSize: "18px",
                                }}
                              >
                                You do not need to enter your login <br />{" "}
                                information on your next visit to <br />{" "}
                                GoPaper.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="button-popup"
                          style={{
                            textAlign: "center",
                            marginTop: "20px",
                            marginBottom: "40px",
                          }}
                        >
                          <div className="button-container">
                            <Link
                              to={"/login"}
                              style={{
                                borderRadius: "65px",
                                border: "1px solid grey",
                                textDecoration: "none",
                                fontSize: "1em",
                                color: "black",
                                padding: "0.6em 8.5em",
                                transition: "border-color 0.25s",
                              }}
                            >
                              Remember and logout
                            </Link>
                          </div>
                          <div
                            className="button-container"
                            style={{
                              marginTop: "30px",
                            }}
                          >
                            <Link
                              to={"/login"}
                              style={{
                                borderRadius: "65px",
                                textDecoration: "none",
                                border: "1px solid grey",
                                fontSize: "1em",
                                color: "black",
                                padding: "0.6em 12.5em",
                                transition: "border-color 0.25s",
                              }}
                            >
                              Logout
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </Row>
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
