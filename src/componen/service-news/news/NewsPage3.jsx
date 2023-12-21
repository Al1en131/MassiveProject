import React from "react";
import Card from "react-bootstrap/Card";
import "./NewsPage.css";
import gambar7 from "/public/img/gambar 7.png";
import gambar8 from "/public/img/gambar 8.png";
import gambar9 from "/public/img/gambar 9.png";

const NewsPage3 = () => {
  return (
    <div className="container-news3">
      <div className="container-news-card">
        <div className="row">
          <div className="col">
            <Card
              className="cr"
              style={{ width: "24rem", height: "34rem", margin: "0 22px" }}
            >
              <Card.Img
                className="top"
                src={gambar7}
                style={{
                  margin: "auto",
                  display: "block",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h5 style={{ fontSize: "13px" }}>October, 28 2023</h5>
                  <h3 style={{ fontSize: "19.3px" }}>
                    {" "}
                    Sampah Kertas OPD Menumpuk, DLH Sosialisasikan Bank ...{" "}
                  </h3>
                </Card.Title>
                <Card.Text style={{}}>
                  Banyaknya sampah kertas di lingkungan Organisasi Perangkat
                  Daerah (OPD) melatarbelakangi Dinas Lingkungan ...
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
                src={gambar8}
                style={{
                  margin: "auto",
                  display: "block",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h5 style={{ fontSize: "13px" }}>August, 22 2022</h5>
                  <h3 style={{ fontSize: "18.90px" }}>
                    {" "}
                    Kenali Bahaya Sampah Kertas Bagi Lingkungan{" "}
                  </h3>
                </Card.Title>
                <Card.Text style={{ marginBottom: "62px" }}>
                  Penggunaannya kertas yang masif dalam kehidupan sehari-hari
                  dapat menimbulkan masalah jika diiringin ...
                </Card.Text>
                <div className="font3">
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
                src={gambar9}
                style={{
                  margin: "auto",
                  display: "block",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h5 style={{ fontSize: "13px" }}>January, 10 2023</h5>
                  <h3 style={{ fontSize: "20px" }}>
                    {" "}
                    Manajemen Resiko Limbah Kertas
                  </h3>
                </Card.Title>
                <Card.Text style={{ marginBottom: "60px" }}>
                  Limbah kertas masuk kedalam kategori resiko berbahaya, karena
                  semakin banyak limbah kertas yang tidak dikelola ...
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

export default NewsPage3;
