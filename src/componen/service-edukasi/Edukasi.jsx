import Bgimage from "/public/img/bg-hero.png";
import "./styleEdukasi.css";
import Navlist from "../navlist/Navlist";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

function Edukasi() {
  return (
    <>
      <Navlist />
      <body>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Bgimage})`,
            height: "70vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            borderBottom: "0.5px solid #34C76F",
          }}
        >
          <div className="hero-edukasi" style={{ display: "flex" }}>
            <div
              className="hero-edukasi-img"
              style={{
                paddingTop: "102px",
                marginLeft: "100px",
              }}
            >
              <img
                src="/public/img/hero-edukasi.png"
                style={{ height: "55vh", width: "38vw" }}
              ></img>
            </div>
            <div
              className="edukasi-deskripsi"
              style={{
                paddingTop: "150px",
                width: "35vw",
                paddingLeft: "50px",
                marginLeft: "100px",
              }}
            >
              <h1 style={{ fontSize: "45px", lineHeight: "2" }}>Education</h1>
              <p style={{ fontSize: "15px" }}>
                We provide comprehensive and informative education on how to
                effectively utilize waste as a valuable resource. We design
                in-depth writings and teaching videos, with the aim of making
                educational materials more accessible to a wide range of
                audiences.{" "}
              </p>
            </div>
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
        <div
          className="Utilization"
          style={{
            padding: "0 100px",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <div
            className="Utilization1"
            style={{ width: "40vw", marginBottom: "50px" }}
          >
            <h2 style={{ lineHeight: "1.5" }}>Paper Waste Utilization</h2>
            <p style={{ fontSize: "16px" }}>
              utilizing waste paper can help reduce waste, conserve natural
              resources, and support sustainable practices.
            </p>
          </div>
          <div className="Utilization2">
            <div
              className="content1"
              style={{ marginBottom: "100px", display: "flex" }}
            >
              <div className="image-content1">
                <Row>
                  <Col xs={6} md={4}>
                    <Image src="/public/img/recycle.png" />
                  </Col>
                </Row>
              </div>
              <div
                className="deskripsi-content1"
                style={{
                  paddingLeft: "80px",
                  width: "70vw",
                }}
              >
                <h3 style={{ lineHeight: "3" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    style={{ color: "#34C76F", marginRight: "20px" }}
                    fill="currentColor"
                    class="bi bi-1-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                  </svg>
                  Paper Recycling
                </h3>
                <p style={{ fontSize: "16px" }}>
                  Paper waste can be collected and recycled to produce new
                  paper. The paper recycling process reduces the cutting of
                  trees and the energy required to produce new paper. This
                  utilization helps preserve forests and reduces the carbon
                  footprint.
                </p>
                <button style={{ borderRadius: "20px", marginTop: "30px" }}>
                  SHOW MORE
                </button>
              </div>
            </div>
            <div
              className="content2"
              style={{ marginBottom: "100px", display: "flex" }}
            >
              <div
                className="deskripsi-content2"
                style={{
                  paddingRight: "80px",
                  width: "70vw",
                }}
              >
                <h3 style={{ lineHeight: "3" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    style={{ color: "#34C76F", marginRight: "20px" }}
                    fill="currentColor"
                    class="bi bi-2-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                  </svg>
                  Making Handicraft Products
                </h3>
                <p style={{ fontSize: "16px" }}>
                  Waste paper can be turned into various handicraft products.
                  For example, waste paper can be cut and crocheted to make
                  crafts, such as greeting cards, photo frames, or even paper
                  bags. This not only adds value to the waste paper but also
                  creates unique and artful products.
                </p>
                <button style={{ borderRadius: "20px", marginTop: "20px" }}>
                  SHOW MORE
                </button>
              </div>
              <div className="image-content2">
                <Row style={{ textAlign: "right" }}>
                  <Col xs={6} md={4}>
                    <Image src="/public/img/handicraft.png" />
                  </Col>
                </Row>
              </div>
            </div>
            <div
              className="content3"
              style={{ marginBottom: "50px", display: "flex" }}
            >
              <div className="image-content3">
                <Row>
                  <Col xs={6} md={4}>
                    <Image src="/public/img/plants.png" />
                  </Col>
                </Row>
              </div>
              <div
                className="deskripsi-content3"
                style={{
                  paddingLeft: "80px",
                  width: "70vw",
                }}
              >
                <h3 style={{ lineHeight: "3" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    style={{ color: "#34C76F", marginRight: "20px" }}
                    fill="currentColor"
                    class="bi bi-3-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
                  </svg>
                  Paper Compost for Plants
                </h3>
                <p style={{ fontSize: "16px" }}>
                  Unused paper can be crushed and added to compost. Paper
                  compost can be used as organic fertilizer for plants. It
                  provides necessary soil nutrients and helps reduce the amount
                  of waste going into landfills. The use of paper compost also
                  helps improve soil structure and retain moisture.
                </p>
                <Link to={"/edu"}>
                  <button style={{ borderRadius: "20px", marginTop: "30px" }}>
                    SHOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Placeholder
          as="p"
          animation="glow"
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Placeholder
            className="rounded-pill"
            xs={1}
            size="sm"
            style={{ color: "#34C76F" }}
          />
        </Placeholder>
        <div className="edukasi-video" style={{ padding: "0 100px" }}>
          <div
            className="content2"
            style={{ marginBottom: "100px", display: "flex" }}
          >
            <div
              className="deskripsi-content2"
              style={{
                paddingRight: "80px",
                width: "70vw",
                marginTop: "45px",
              }}
            >
              <h2 style={{ lineHeight: "3" }}>
                Educational Material Through Video
              </h2>
              <p style={{ fontSize: "16px" }}>
                we design in-depth writings with the aim of making educational
                material more accessible to a wide range of audiences.
              </p>
              <button style={{ borderRadius: "20px", marginTop: "30px" }}>
                SHOW MORE
              </button>
            </div>
            <div className="image-content2">
              <Row style={{ textAlign: "right" }}>
                <Col xs={6} md={4}>
                  <Image src="/public/img/video-edukasi.png" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <Placeholder
          as="p"
          animation="glow"
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Placeholder
            className="rounded-pill"
            xs={1}
            size="sm"
            style={{ color: "#34C76F" }}
          />
        </Placeholder>

        <div className="join-content">
          <div className="join-deskripsi">
            <h1>Join Our </h1>
            <h1>Movement</h1>
            <h2 style={{ color: "#34C76F", marginTop: "25px" }}>
              #UbahJadiKebaikan
            </h2>
          </div>
          <div className="join-image">
            <img
              src="/public/img/img-join.png"
              style={{ width: "20vw", height: "40vh" }}
            />
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}

export default Edukasi;
