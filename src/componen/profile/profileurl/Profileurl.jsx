import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";
import { PiLinkBold } from "react-icons/pi";

const Profileurl = () => {
  const [profileURL, setProfileURL] = useState(
    localStorage.getItem("profileURL") || "www.gopaper.com/isayama"
  );
  const [showModal, setShowModal] = useState(false);
  const [editedURL, setEditedURL] = useState("");
  const greyCircleStyle = {
    backgroundColor: "lightgrey",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleIconClick = () => {
    setShowModal(true);
    setEditedURL(profileURL);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    setProfileURL(editedURL);
    localStorage.setItem("profileURL", editedURL);
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem("profileURL", profileURL);
  }, [profileURL]);

  return (
    <div>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          Profile URL
          <Button variant="link" onClick={handleIconClick}>
            <div style={greyCircleStyle}>
              <BsPencilFill style={{ fontSize: "1.2em", color: "black" }} />
            </div>
          </Button>
        </Card.Title>
        <Card.Text>{profileURL}</Card.Text>
      </Card.Body>

      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header style={{ border: "0" }} closeButton>
          <Modal.Title>
            <PiLinkBold /> Edit your custom URL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>Personalize your URL for your profile</p>
          <Form.Control
            type="text"
            placeholder="Enter Profile URL"
            value={editedURL}
            onChange={(e) => setEditedURL(e.target.value)}
          />
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

export default Profileurl;
