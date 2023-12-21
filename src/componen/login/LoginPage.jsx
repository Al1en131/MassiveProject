import React, { useState } from "react";
import Bgimage from "/public/img/LOGIN.png";
import imglogin from "/public/img/login_gambar.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import axios from "axios";
import Swal from "sweetalert2";

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post("http://localhost:1013/api/v1/login", {
        email,
        password,
      });

      return { token: response.data.token, data: response.data.data };
    } catch (error) {
      throw error;
    }
  },
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Swal.fire({
          title: "Login Gagal!",
          html: "Email dan Password tidak<br>boleh Kosong!",
          icon: "error",
        });
        return;
      }

      const response = await authService.login(email, password);
      const { token, data } = response;

      localStorage.setItem("token", token);
      localStorage.setItem("data", JSON.stringify(data));
      console.log(response, data);
      Swal.fire({
        title: "Login Berhasil!",
        html: `Selamat datang ${data.nama}`,
        icon: "success",
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Login Gagal!",
        text: `Email atau Password salah`,
        icon: "error",
      });
    }
  };

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

                  {/* <div className="lgn-btn">
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
                  </div> */}

                  {/* <div className="lgn-btn">
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
                  </div> */}

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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="on"
                    />
                  </div>

                  <div className="checkbox">
                    <Form.Check type="checkbox" label="Ingat Saya" />
                  </div>

                  <div className="login-btn">
                    <Button type="button" onClick={handleLogin}>
                      Login
                    </Button>
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
