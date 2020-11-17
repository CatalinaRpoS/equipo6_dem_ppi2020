import React, { useState } from "react";
import "../styles/styles.css";
import axios from "axios";
import swal from "sweetalert2";
import { saveToLocal } from "../functions/localStorage";
import sha1 from 'sha1';

const InicioSesion = () => {
  const [loginData, setLoginData] = useState({});

  function updateLoginData(e) {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value
    });
  }
  const iniciarSesion = (event) => {
    event.preventDefault();
    axios
      .post("https://ygfev.sse.codesandbox.io/iniciar-sesion", { email: loginData.email, contrasena:sha1(loginData.contrasena) })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Info incorrecta") {
          swal.fire({
            title: "Correo y/o contraseña incorrectos",
            icon: "error",
            confirmButtonText: "Por favor prueba otra vez",
            confirmButtonColor: "#f96332"
          });
        } else {
          const { Id_usuario } = res.data.rows[0];
          saveToLocal("id", Id_usuario);
          window.location.href = "/inicio";
        }
      });
  };
  return (
    <div className="container-fluid">
      <form onSubmit={iniciarSesion}>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="divInputIco col-md-6 col-sm-6 col-lg-6">
            <input
              name="email"
              type="email"
              className="form-control"
              id="iniciar"
              placeholder="Email"
              required
              onChange={updateLoginData}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="divInputIco col-md-6 col-sm-6 col-lg-6">
            <input
              name="contrasena"
              type="password"
              className="form-control"
              id="iniciar"
              placeholder="Contraseña"
              required
              onChange={updateLoginData}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <p>
              <a className="texto_1" href="/olvidaste-contrasena">
                ¿Olvidaste tu contraseña?
              </a>
            </p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <button type="submit" className="btn w-100 " id="button_1">
              <span className="texto_1">Inicia sesión</span>
            </button>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
      </form>
      <br />
      <div className="row">
        <div className="col-md-3 col-sm-3 col-lg-3"></div>
        <div className="col">
          <p id="text_1">
            <a className="texto_1" href="/registro">
              Regístrate
            </a>
          </p>
        </div>
        <div className="col">
          <p id="text_2">
            <a className="texto_1" href="/continuar-sin-cuenta">
              Continuar sin una cuenta
            </a>
          </p>
        </div>
        <div className="col-md-3 col-sm-3 col-lg-3"></div>
      </div>
    </div>
  );
};

export default InicioSesion;
