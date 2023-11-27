import React from "react";
import Bgimage from "/public/img/LOGIN.png";
import imglogin from "/public/img/login_gambar.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
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
            <div className="login-container">
              <div className="form-left">
                <Form className="login-form">
                  <h2>Login</h2>

                  <div className="lgn-btn">
                    <Button
                      variant="outline-secondary"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "25px",
                      }}
                    >
                      Login with Google
                    </Button>{" "}
                  </div>

                  <div className="lgn-btn">
                    <Button
                      variant="outline-secondary"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "25px",
                      }}
                    >
                      Login with Facebook
                    </Button>{" "}
                  </div>

                  <div className="form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Text className="text-muted"></Form.Text>
                    <Form.Control
                      type="email"
                      placeholder="Masukkan Email"
                      style={{
                        border: "none",
                        borderBottom: "2px solid #333",
                        marginBottom: "20px",
                        padding: "5px",
                        fontSize: "14px",
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan Password"
                      style={{
                        border: "none",
                        borderBottom: "2px solid #333",
                        marginBottom: "20px",
                        padding: "5px",
                        fontSize: "14px",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div className="checkbox">
                    <Form.Check type="checkbox" label="Ingat Saya" />
                  </div>

                  <div className="login-btn">
                    <Link to={"/home"}>
                      <Button type="submit">Login</Button>
                    </Link>
                  </div>

                  <h6 className="text-black text-start w-100">
                    Belum punya akun?{" "}
                    <Link to={"/regis"} className="text-decoration-none ">
                      Daftar di sini
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

export default LoginPage;
