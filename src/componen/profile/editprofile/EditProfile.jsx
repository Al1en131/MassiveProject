import React, { useState, useEffect } from "react";
import { Modal, Image, Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const EditProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("selectedImage") ||
      "https://www.copaster.com/wp-content/uploads/2023/03/pp-kosong-wa-default.jpeg"
  );
  const [tempImage, setTempImage] = useState("");

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTempImage("");
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (tempImage !== "") {
      setSelectedImage(tempImage);
      localStorage.setItem("selectedImage", tempImage);
      console.log("Foto disimpan:", tempImage);
    }
    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem("selectedImage", selectedImage);
  }, [selectedImage]);

  const handleDeleteImage = () => {
    setSelectedImage(
      "https://www.copaster.com/wp-content/uploads/2023/03/pp-kosong-wa-default.jpeg"
    );
    setTempImage(""); // untuk mengosongkan tempImage
    localStorage.removeItem("selectedImage"); // untuk menghapus gambar dari localStorage
  };

  return (
    <div>
      <Image
        src={selectedImage}
        roundedCircle
        width="110"
        height="110"
        style={{
          margin: "1.3em",
          marginTop: "-65px",
          border: "6px solid white",
          cursor: "pointer",
        }}
        alt="Profile Picture"
        onClick={handleImageClick}
      />

      <Modal size="lg" show={showModal} onHide={handleCloseModal}>
        <Modal.Header style={{ border: "0" }} closeButton>
          <Modal.Title>Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image
            src={tempImage || selectedImage}
            fluid
            roundedCircle
            width="260"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
            }}
            alt="Profile Picture"
          />
        </Modal.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <p style={{ color: "red" }}>
            <FaTrash
              style={{
                display: "flex",
                color: "red",
                marginRight: "480px",
                paddingLeft: "12px",
                cursor: "pointer",
                fontSize: "24px",
              }}
              onClick={handleDeleteImage}
            />{" "}
            Delete
          </p>
          <label
            htmlFor="upload-photo"
            style={{ display: "flex", alignItems: "center" }}
          >
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
    </div>
  );
};

export default EditProfile;
