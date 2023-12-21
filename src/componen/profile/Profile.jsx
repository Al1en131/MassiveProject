import { useState, useRef } from "react";
import "./StyleProfile.css";
import React from "react";

import {
  Container,
  Image,
  Button,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";

import { FaBell } from "react-icons/fa";
import { BsPencilFill, BsFillCameraFill, BsInfoSquare } from "react-icons/bs";
import Footer from "../footer/Footer.jsx";
import Navlist from "../navlist/Navlist.jsx";
import LanguageSettings from "./language/Language.jsx";
import EditAbout from "./editabout/editAbout.jsx";
import Profileurl from "./profileurl/Profileurl.jsx";
import EditProfile from "./editprofile/EditProfile.jsx";
import FormEdit from "./formedit/FormEdit.jsx";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef(null);
  const [modalImage, setModalImage] = useState(
    "https://cdn.pixabay.com/photo/2016/03/09/14/40/office-1246484_1280.jpg"
  );
  const [selectedImage, setSelectedImage] = useState(
    "https://cdn.pixabay.com/photo/2016/03/09/14/40/office-1246484_1280.jpg"
  );
  const handleIconClick = (iconName) => {
    console.log(`Icon ${iconName} clicked!`);
  };

  const handleAboutProfileClick = () => {
    setShowAbout(!showAbout);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  //icon abu
  const greyCircleStyle = {
    backgroundColor: "lightgrey",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //kamera
  const whiteCircleStyleKamera = {
    backgroundColor: "white",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //notif
  const greenCircle = {
    backgroundColor: "#34C76F",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleSave = () => {
    setSelectedImage(modalImage);
    console.log("Foto disimpan:", setSelectedImage);
    setShowModal(false);
  };

  const handlePhotoChange = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setModalImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navlist />
      <div className="Profile" style={{ paddingTop: "50px" }}>
        <Container>
          <Row>
            <Col md={8}>
              <Card className="mb-3">
                <Card.Img
                  src={selectedImage}
                  width="10"
                  height="280"
                  alt="Bcakground Photo"
                />

                <div>
                  {/* Konten lain di dalam EditProfile.jsx */}
                  <EditProfile />
                  {/* Konten lain di dalam EditProfile.jsx */}
                </div>

                <Button variant="link" onClick={handleShow}>
                  <div
                    style={{
                      ...whiteCircleStyleKamera,
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }}
                  >
                    <BsFillCameraFill
                      style={{ fontSize: "0.9em", color: "#34C76F" }}
                    />
                  </div>
                </Button>

                {/* card untuk background photo */}
                <Modal size="lg" show={showModal} onHide={handleClose}>
                  <Modal.Header style={{ border: "0" }} closeButton>
                    <Modal.Title>Background Photo</Modal.Title>
                  </Modal.Header>
                  <Modal.Body
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Konten modal kamera */}
                    <Image
                      width="680px"
                      style={{
                        width: "680px",
                        height: "360px",
                        objectFit: "cover",
                      }}
                      src={modalImage}
                      fluid
                    />
                  </Modal.Body>
                  <div
                    className="button-container"
                    style={{
                      textAlign: "right",
                      marginBottom: "10px",
                    }}
                  >
                    <label htmlFor="upload-photo">
                      <Button
                        variant="outline-success"
                        as="span"
                        style={{
                          borderRadius: "25px",
                          width: "150px",
                          margin: "10px",
                          fontSize: "18px",
                        }}
                      >
                        Change Photo
                      </Button>
                    </label>
                    <input
                      type="file"
                      id="upload-photo"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileSelected}
                    />
                    <Button
                      variant="outline-success"
                      onClick={handleSave}
                      style={{
                        borderRadius: "25px",
                        width: "75px",
                        margin: "10px",
                        fontSize: "18px",
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </Modal>

                <FormEdit />
              </Card>

              <div>
                {/* Konten lain di dalam About.jsx */}
                <EditAbout />

                {/* Konten lain di dalam About.jsx */}
              </div>
            </Col>

            <Col md={4}>
              <Card className="mb-3" style={{ border: "0.5px solid #34C76F" }}>
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Notification
                    <div style={greenCircle}>
                      <FaBell style={{ fontSize: "1.1em", color: "white" }} />
                    </div>
                  </Card.Title>
                  <Card.Text>No Notification</Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <div>
                  {/* Konten lain di dalam Language.jsx */}
                  <LanguageSettings />
                  {/* Konten lain di dalam Language.jsx */}
                  <hr style={{ border: "px solid #000", margin: "0 auto" }} />

                  {/* Konten lain di dalam Profileurl.jsx */}
                  <Profileurl />
                  {/* Konten lain di dalam Profileurl.jsx */}
                </div>
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
