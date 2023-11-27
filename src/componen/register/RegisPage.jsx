import React from "react";
import "./RegisPage.css";
import Bgimage from "/public/img/LOGIN.png";
import imglogin from "/public/img/login_gambar.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const RegisPage = () => {
  return (
    <div>
      <div className="login  h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          {" "}
          <div className="body">
            <div className="regis-container">
              <div className="form-left">
                <Form className="regis-form">
                  <h2>REGISTER</h2>
                  <div className="form-group">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Masukkan nama lengkap anda"
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </div>

                  <div className="form-group">
                    <Form.Label>Nomor Telepon</Form.Label>
                    <Form.Control
                      type="tel"
                      id="nomortelepon"
                      pattern="[0-9]{10,14}"
                      placeholder="Masukkan nomor telepon anda"
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </div>

                  <div className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Masukkan email anda"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </div>

                  <div className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan minimal 8 karakter"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Form.Label>Ulangi Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan kembali password anda"
                      required
                    />
                  </div>

                  <div className="regis-btn">
                    <Button className="regis-button" type="submit">
                      Register
                    </Button>
                  </div>

                  <h6>
                    Sudah punya Akun?{" "}
                    <Link to="/login" className="text-decoration-none">
                      Masuk sekarang
                    </Link>
                  </h6>
                </Form>
              </div>
              <div className="img-right">
                <img src={imglogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisPage;
