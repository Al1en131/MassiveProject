import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { BsPencilFill, BsFillCameraFill, BsInfoSquare } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";
import { useUser } from "../../../context/UserContext";

const FormEdit = () => {
  const { getUserData } = useUser();
  const data = getUserData();
  const [showModal, setShowModal] = useState(false);
  const [nameText, setNameText] = useState(
    localStorage.getItem("name") || `${data.nama}`
  );
  const [headlineText, setHeadlineText] = useState(
    localStorage.getItem("headline") || `${data.headline}`
  );
  const [regionText, setRegionText] = useState(
    localStorage.getItem("region") || `${data.alamat}`
  );

  const [editedName, setEditedName] = useState("");
  const [editedHeadline, setEditedHeadline] = useState("");
  const [editedRegion, setEditedRegion] = useState("");

  const greyCircleStyle = {
    backgroundColor: "lightgrey",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    localStorage.setItem("name", nameText);
    localStorage.setItem("headline", headlineText);
    localStorage.setItem("region", regionText);
  }, [nameText, headlineText, regionText]);

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    setNameText(editedName || nameText);
    setHeadlineText(editedHeadline || headlineText);
    setRegionText(editedRegion || regionText);
    setShowModal(false);
  };

  return (
    <div>
      <Card style={{ border: "0", marginTop: "-30px" }}>
        <Card.Body>
          <h4 className="d-flex justify-content-between align-items-center">
            {data.nama}
            <Button variant="link" onClick={handleIconClick}>
              <div style={greyCircleStyle}>
                <BsPencilFill style={{ fontSize: "1.2em", color: "black" }} />
              </div>
            </Button>
          </h4>
          <p>
            {data.headline} <br />
          </p>
          {data.alamat}
          <p style={{ color: "green" }}> Connect Information</p>
          <Button
            type="submit"
            variant="outline-success"
            className="custom-button"
            style={{
              borderRadius: "25px",
              width: "155px",
              marginRight: "10px",
            }}
          >
            <BsInfoSquare /> About Profile
          </Button>{" "}
          <Button
            type="submit"
            variant="outline-success"
            className="custom-button"
            style={{
              borderRadius: "25px",
              width: "155px",
              marginRight: "10px",
            }}
          >
            <CiShare2 /> Share Profile
          </Button>{" "}
          <Button
            type="submit"
            variant="outline-success"
            className="custom-button"
            style={{ borderRadius: "25px", width: "155px" }}
          >
            <AiOutlineDownload /> Save as PDF
          </Button>{" "}
        </Card.Body>
      </Card>

      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header style={{ border: "0" }} closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder={nameText}
                autoFocus
                onChange={(e) => setEditedName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Headline</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder={headlineText}
                autoFocus
                onChange={(e) => setEditedHeadline(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country/Region</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder={regionText}
                autoFocus
                onChange={(e) => setEditedRegion(e.target.value)}
              />
            </Form.Group>
          </Form>
          <div className="button-container" style={{ textAlign: "right" }}>
            <Button
              variant="success"
              onClick={handleSave}
              style={{
                borderRadius: "25px",
                width: "75px",
                marginRight: "10px",
                fontSize: "18px",
                background: "#34C76F",
                borderColor: "#34C76F",
                marginTop: "10px",
              }}
            >
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormEdit;
