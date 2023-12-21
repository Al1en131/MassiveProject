/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./RegisPage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Bgimage from "/img/LOGIN.png";
import imglogin from "/img/login_gambar.png";
import { Link } from "react-router-dom";

const axiosHandler = async (url: string, data: any) =>
  await axios.post(url, data);

const errorMessageDisplay = (text: string) => (
  <p
    style={{
      color: "red",
      fontSize: 12,
      marginTop: 0,
      paddingTop: 0,
      marginLeft: 5,
      marginBottom: 10,
      fontWeight: "bold",
    }}
  >
    {text}
  </p>
);

const AuthForm = () => {
  const [isUsers, setUsers] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formHandle = () => {
    setUsers((prev) => !prev);
  };

  const onSubmit = async (data: any) => {
    const value = {
      alamat: data.alamat,
      nama: data.nama,
      no_hp: data.no_hp,
      password: data.password,
      email: data.email,
    };

    const statement = `http://localhost:1013/api/v1/${"users"}`;

    try {
      const { data } = await axiosHandler(statement, value);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil dimasukkan",
      });
      reset();

      formHandle();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops... Data Gagal dimasukkan",
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
            <div className="regis-container">
              <div className="form-left">
                <Form className="regis-form" onSubmit={handleSubmit(onSubmit)}>
                  <h2>REGISTER </h2>

                  <div className="mb-3">
                    <label className="form-label" id="nama">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nama anda"
                      aria-describedby="nama"
                      {...register("nama", {
                        required: {
                          value: true,
                          message: "Input field required!",
                        },
                      })}
                    />
                  </div>
                  {errors.nama && errors.nama.message
                    ? errorMessageDisplay(errors.nama.message as string)
                    : null}
                  <div className="mb-3">
                    <label className="form-label" id="no_hp">
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nomor telepon"
                      aria-describedby="no_hp"
                      {...register("no_hp", {
                        required: {
                          value: true,
                          message: "Input field required!",
                        },
                      })}
                    />
                  </div>
                  {errors.no_hp && errors.no_hp.message
                    ? errorMessageDisplay(errors.no_hp.message as string)
                    : null}

                  <div className="mb-3">
                    <label className="form-label" id="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="masukkan email anda"
                      aria-describedby="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Input field required!",
                        },
                      })}
                    />
                  </div>
                  {errors.email && errors.email.message
                    ? errorMessageDisplay(errors.email.message as string)
                    : null}
                  <div className="mb-3">
                    <label className="form-label" id="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="masukkan password anda"
                      aria-describedby="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Input field required!",
                        },
                      })}
                    />
                  </div>
                  {errors.password && errors.password.message
                    ? errorMessageDisplay(errors.password.message as string)
                    : null}

                  <div className="mb-3">
                    <label className="form-label" id="alamat">
                      Alamat
                    </label>
                    <textarea
                      className="form-control"
                      id="alamat"
                      rows={3}
                      placeholder="Masukkan alamat anda"
                      aria-describedby="alamat"
                      {...register("alamat", {
                        required: {
                          value: true,
                          message: "Input field required!",
                        },
                      })}
                    ></textarea>
                  </div>
                  {errors.alamat && errors.alamat.message
                    ? errorMessageDisplay(errors.alamat.message as string)
                    : null}

                  <div className="regis-btn">
                    <Button className="regis-button" type="submit">
                      REGISTER
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
              <div className="img-regis">
                <img src={imglogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
