import { useState } from "react";
import "./StyleProfile.css";
import React from "react";
import { Container, Image, Button, Row, Col, Card } from "react-bootstrap";
import { FaPen, FaBell } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";
import Navlist from "../navlist/Navlist";
import Footer from "../footer/Footer";

function Profile() {
  const [showAbout, setShowAbout] = useState(false); // State untuk menampilkan konten About
  const handleIconClick = (iconName) => {
    console.log(`Icon ${iconName} clicked!`);
  };

  const handleAboutProfileClick = () => {
    setShowAbout(!showAbout);
  };

  const blackIconStyle = {
    color: "black", // Mengubah warna ikon menjadi hitam
  };
  const greyCircleStyle = {
    backgroundColor: "lightgrey", // Warna latar belakang bulatan
    borderRadius: "55%", // Membuatnya menjadi lingkaran
    padding: "5px",
    display: "inline-flex",
    transition: "background-color 0.3s ease",
  };

  //card About
  const [aboutText, setAboutText] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit accusamus suscipit id facere ratione debitis, perferendis facilis atque alias. Fugit accusamus suscipit id facere ratione debitis, perferendis facilis atque alias."
  );
  const [editMode, setEditMode] = useState(false);

  const handleEditAbout = () => {
    setEditMode(true);
  };

  const handleAboutSave = () => {
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setAboutText(e.target.value);
  };
  const iconStyle = {
    color: "black",
    fontSize: "1.2em",
  };

  return (
    <>
      <Navlist />
      <div className="Profile" style={{ paddingTop: "40px" }}>
        <Container>
          <Row>
            <Col md={8}>
              <Card className="mb-3">
                <Card.Img
                  src="https://cdn.pixabay.com/photo/2016/03/09/14/40/office-1246484_1280.jpg"
                  width="10"
                  height="280"
                  alt="Profile Picture"
                />
                <Image
                  src="https://www.copaster.com/wp-content/uploads/2023/03/pp-kosong-wa-default.jpeg"
                  roundedCircle
                  width="110"
                  height="110"
                  style={{ margin: "1.3em", marginTop: "-65px" }}
                  alt="Profile Pic"
                />
                <Card.Body>
                  <h4 className="d-flex justify-content-between align-items-center">
                    Hajime Isayama
                    <Button
                      variant="link"
                      onClick={() => handleIconClick("Edit")}
                    >
                      <div style={greyCircleStyle}>
                        <FaPen
                          style={{ ...blackIconStyle, fontSize: "1.2em" }}
                        />
                      </div>
                    </Button>
                  </h4>
                  <p>
                    "DUTA KEBERSIHAN SINGEKINO KYOJIN" <br />
                  </p>
                  Lampung Selatan, Lampung, Indonesia.
                  <p style={{ color: "green" }}> Connect Information</p>
                  <Button
                    type="submit"
                    variant="outline-success"
                    className="custom-button"
                    onClick={handleAboutProfileClick}
                    style={{
                      borderRadius: "25px",
                      width: "150px",
                      marginRight: "10px",
                    }}
                  >
                    About Profile
                  </Button>{" "}
                  <Button
                    type="submit"
                    variant="outline-success"
                    className="custom-button"
                    style={{
                      borderRadius: "25px",
                      width: "150px",
                      marginRight: "10px",
                    }}
                  >
                    <CiShare2 /> Share Profile
                  </Button>{" "}
                  <Button
                    type="submit"
                    variant="outline-success"
                    className="custom-button"
                    style={{ borderRadius: "25px", width: "150px" }}
                  >
                    <AiOutlineDownload /> Save as PDF
                  </Button>{" "}
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h4 className="d-flex justify-content-between align-items-center">
                    About
                    <Button variant="link" onClick={handleEditAbout}>
                      <FaPen style={iconStyle} />
                    </Button>
                  </h4>
                  {editMode ? (
                    <div>
                      <textarea
                        rows="4"
                        cols="88"
                        value={aboutText}
                        onChange={handleInputChange}
                      />{" "}
                      <br />
                      <Button
                        type="submit"
                        variant="success"
                        className="button-card align-items-right"
                        onClick={handleAboutSave}
                        style={{ borderRadius: "25px", width: "100px" }}
                      >
                        {" "}
                        Save
                      </Button>
                    </div>
                  ) : (
                    <p>{aboutText}</p>
                  )}
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Notification
                    <Button
                      variant="link"
                      onClick={() => handleIconClick("Notification")}
                    >
                      <div style={greyCircleStyle}>
                        <FaBell
                          style={{ ...blackIconStyle, fontSize: "1.2em" }}
                        />
                      </div>
                    </Button>
                  </Card.Title>
                  <Card.Text>No Notification</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Language Settings
                    <Button
                      variant="link"
                      onClick={() => handleIconClick("Edit")}
                    >
                      <div style={greyCircleStyle}>
                        <FaPen
                          style={{ ...blackIconStyle, fontSize: "1.2em" }}
                        />
                      </div>
                    </Button>
                  </Card.Title>
                  <Card.Text>English</Card.Text>
                  <hr />
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Profile URL
                    <Button
                      variant="link"
                      onClick={() => handleIconClick("Edit")}
                    >
                      <div style={greyCircleStyle}>
                        <FaPen
                          style={{ ...blackIconStyle, fontSize: "1.2em" }}
                        />
                      </div>
                    </Button>
                  </Card.Title>
                  <Card.Text>www.gopaper.com/isayama</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
