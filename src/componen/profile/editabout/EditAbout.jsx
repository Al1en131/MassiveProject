import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";

const EditAbout = () => {
  const [aboutText, setAboutText] = useState(
    localStorage.getItem("aboutText") ||
      "Lorem ipsum dolor sit amet consectetur. Suspendisse cursus ut ipsum tempor tempor. Risus eleifend diam tristique cras eu maecenas. Est sit bibendum nullam nunc pretium enim. Sit lorem turpis nisi imperdiet."
  );
  const [showModal, setShowModal] = useState(false);
  const [editedText, setEditedText] = useState("");
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
    setEditedText(aboutText);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    setAboutText(editedText);
    localStorage.setItem("aboutText", editedText);
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem("aboutText", aboutText);
  }, [aboutText]);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            About
            <Button variant="link" onClick={handleIconClick}>
              <div style={greyCircleStyle}>
                <BsPencilFill style={{ fontSize: "1.2em", color: "black" }} />
              </div>
            </Button>
          </Card.Title>
          <p>{aboutText}</p>
        </Card.Body>
      </Card>

      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header style={{ border: "0" }} closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You can write anything about you </p>
          <Form.Control
            as="textarea"
            rows={5}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <div className="button-container" style={{ textAlign: "right" }}>
            <Button
              variant="success"
              onClick={handleSave}
              style={{
                borderRadius: "25px",
                width: "75px",
                marginTop: "10px",
                marginRight: "10px",
                fontSize: "18px",
                background: "#34C76F",
                borderColor: "#34C76F",
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

export default EditAbout;
