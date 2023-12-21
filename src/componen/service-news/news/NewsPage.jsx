import React from "react";
import Card from "react-bootstrap/Card";
import "./NewsPage.css";
import gambar1 from "/public/img/gambar 1.png";
import gambar2 from "/public/img/gambar 2.png";
import gambar3 from "/public/img/gambar 3.png";

const NewsPage = () => {
  return (
    <>
      <div className="container-news">
        <div className="news-left">
          <h2>Populer News</h2>
        </div>
        <div className="container-news-card">
          <div className="row">
            <div className="col">
              <Card
                className="cr"
                style={{
                  width: "24rem",
                  height: "34rem",
                  margin: "0 22px",
                }}
              >
                <Card.Img
                  className="top"
                  src={gambar1}
                  style={{
                    margin: "auto",
                    display: "block",
                    justifyContent: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title>
                    <h5 style={{ fontSize: "13px" }}>Maret, 16 2023</h5>
                    <h3 style={{ fontSize: "20px" }}>
                      {" "}
                      Pelatihan Daur Ulang Limbah Kertas oleh Tim Seni Rupa ...
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    Sejumlah dosen Program Seni Rupa Murni Universitas Kristen
                    Maranatha mengadakan pelatihan daur ulang ...
                  </Card.Text>
                  <div className="font">
                    <a style={{ color: "#34C76F", marginTop: "80px" }}>
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
                style={{
                  width: "24rem",
                  height: "34rem",
                  margin: "0 22px",
                }}
              >
                <Card.Img
                  className="top"
                  src={gambar2}
                  style={{
                    margin: "auto",
                    display: "block",
                    justifyContent: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title>
                    <h5 style={{ fontSize: "13px" }}>Mei, 13 2020</h5>
                    <h3 style={{ fontSize: "20px" }}>
                      {" "}
                      Teknik Mendaur Ulang Sampah Kertas
                    </h3>
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "65px" }}>
                    Salah satu upaya untuk mengurangi timbulan sampah kertas
                    adalah melalui pemanfaatan kembali menjadi Kertas ...
                  </Card.Text>
                  <a
                    style={{
                      color: "#34C76F",
                      fontWeight: "500",
                    }}
                  >
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
                style={{
                  width: "24rem",
                  height: "34rem",
                  margin: "0 22px",
                }}
              >
                <Card.Img
                  className="top"
                  src={gambar3}
                  style={{
                    margin: "auto",
                    display: "block",
                    justifyContent: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title>
                    <h5 style={{ fontSize: "13px" }}>Maret, 16 2023</h5>
                    <h3 style={{ fontSize: "20px" }}>
                      {" "}
                      Tim Penanganan Sampah ITB Ajak Kurangi Sampah dari ...
                    </h3>
                  </Card.Title>
                  <Card.Text style={{ marginBottom: "42px" }}>
                    Tim Penanganan Sampah Institut Teknologi Bandung (ITB)
                    mengajak civitas academia untuk mengurangi sampah ...
                  </Card.Text>
                  <a
                    style={{
                      color: "#34C76F",
                      fontWeight: "500",
                    }}
                  >
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
    </>
  );
};

export default NewsPage;
