import React from "react";
import Card from "react-bootstrap/Card";
import "./NewsPage.css";
import gambar4 from "/public/img/gambar 4.png";
import gambar5 from "/public/img/gambar 5.png";
import gambar6 from "/public/img/gambar 6.png";

const NewsPage2 = () => {
  return (
    <div className="container-news2">
      <div className="container-news-card">
        <div className="row">
          <div className="col">
            <Card
              className="cr"
              style={{ width: "24rem", height: "34rem", margin: "0 22px" }}
            >
              <Card.Img
                className="top"
                src={gambar4}
                style={{
                  margin: "auto",
                  display: "block",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h5 style={{ fontSize: "13px" }}>January, 12 2023</h5>
                  <h3 style={{ fontSize: "20px" }}>
                    {" "}
                    Tentang Kertas Daur Ulang, Kurangi Limbah Terbanyak{" "}
                  </h3>
                </Card.Title>
                <Card.Text>
                  Kertas daur ulang berasal dari limbah terbanyak yang dibuang
                  oleh manusia. Laman dpr.go.id menyebut bahwa ...
                </Card.Text>
                <div className="font">
                  <a style={{ color: "#34C76F" }}>
                    Baca Selengkapnya
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
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card
              className="cr"
              style={{ width: "24rem", height: "34rem", margin: "0 22px" }}
            >
              <Card.Img
                className="top"
                src={gambar5}
                style={{
                  margin: "auto",
                  display: "block",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h5 style={{ fontSize: "13px" }}>November, 12 2023</h5>
                  <h3 style={{ fontSize: "18.90px" }}>
                    {" "}
                    Daur Ulang Sampah: Pengertian, Manfaat, dan Cara - Berita
                    dan ...
                  </h3>
                </Card.Title>
                <Card.Text style={{ marginBottom: "45px" }}>
                  Daur Ulang Sampah merupakan suatu tindakan yang dilakukan guna
                  mengurangi pencemaran lingkungan. ...
                </Card.Text>
                <a style={{ color: "#34C76F", fontWeight: "500" }}>
                  Baca Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#34C76F"
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
          </div>

          <div className="col">
            <Card
              className="cr"
              style={{ width: "24rem", height: "34rem", margin: "0 22px" }}
            >
              <Card.Img
                className="top"
                src={gambar6}
                style={{
                  margin: "auto",
                  display: "block",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h5 style={{ fontSize: "13px" }}>September, 6 2023</h5>
                  <h3 style={{ fontSize: "20px" }}>
                    {" "}
                    Upcycle Limbah Kertas Bogor Tembus Pasar Amerika
                  </h3>
                </Card.Title>
                <Card.Text style={{ marginBottom: "40px" }}>
                  Usai banjir menyisakan sampah yang begitu banyak. Dan Bogor
                  ini, sampah kertas merupakan sampah nomor tiga ...
                </Card.Text>
                <a style={{ color: "#34C76F", fontWeight: "500" }}>
                  Baca Selengkapnya
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage2;
