import React, { useState } from "react";
import "../styles/styles.css";
import axios from "axios";
import { saveToLocal } from "../functions/localStorage";
import swal from "sweetalert2";
import sha1 from "sha1";

const DatosInicio = (props) => {
  const [loginData, setLoginData] = useState();

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
      .post("https://ygfev.sse.codesandbox.io/iniciar-sesion", {
        email: loginData.email,
        contrasena: sha1(loginData.contrasena)
      })
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
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="email"
              type="email"
              className="form-control"
              id="iniciar"
              placeholder={props.input1}
              required
              onChange={updateLoginData}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="contrasena"
              type="password"
              className="form-control"
              id="iniciar"
              placeholder={props.input2}
              required
              onChange={updateLoginData}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <p>
              <a className="texto_1" href="/olvidaste-contrasena">
                {props.question1}
              </a>
            </p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <button type="submit" className="btn w-100 " id="button_2">
              <span className="texto_1">{props.button}</span>
            </button>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
      </form>
      <br />
      <div className="row">
        <div className="col text-center">
          <a className="texto_1" href="/soporte-tecnico-1">
            {props.question2}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DatosInicio;
