import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
//import { event } from "jquery";
import axios from "axios";
import { saveToLocal } from "../functions/localStorage";

const Registro = () => {
  const [userData, setUserData] = useState({});

  function updateData(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function crearUsuario(event) {
    event.preventDefault();

    const { contrasena, contrasena2 } = userData;

    if (contrasena.length < 8) {
      swal.fire({
        title: "La contraseña es muy corta :(",
        icon: "error",
        confirmButtonText: "Por favor prueba otra vez",
        confirmButtonColor: "#f96332"
      });
    } else {
      if (contrasena === contrasena2) {
        //ENVIAR LOS DATOS PARA LA BASE DE DATOS EN ESTE BLOQUE
        axios
          .post("https://db1bo.sse.codesandbox.io/registro", { userData })
          .then((res) => {
            console.log(res);
            const { insertId } = res.data.results;
            saveToLocal("id", insertId);
            swal
              .fire({
                title: "¡La cuenta fue creada de forma exitosa!",
                icon: "success",
                confirmButtonText: "¡Entendido!",
                confirmButtonColor: "#f96332"
              })
              .then((resultado) => {
                if (resultado.value) {
                  window.location.href = "/inicio";
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        swal.fire({
          title: "Las contraseñas no coinciden",
          icon: "error",
          confirmButtonText: "Por favor prueba otra vez",
          confirmButtonColor: "#f96332"
        });
      }
    }
  }  

  return (
    <div className="container">
      <form onSubmit={crearUsuario}>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <input
              name="documento"
              type="number"
              className="form-control"
              id="iniciar"
              placeholder="Documento de identidad"
              required
              onChange={updateData}
            />
          </div>
          <div className="col-12 col-md-6 offset-md-3">
            <input
              name="nombre"
              type="text"
              className="form-control"
              id="iniciar"
              placeholder="Nombre"
              required
              onChange={updateData}
            />
          </div>
          <div className="col-12 col-md-6 offset-md-3">
            <input
              name="email"
              type="email"
              className="form-control"
              id="iniciar"
              placeholder="Email"
              required
              onChange={updateData}
            />
          </div>
          <div className="col-12 col-md-6 offset-md-3">
            <input
              name="contrasena"
              type="password"
              className="form-control"
              id="iniciar"
              placeholder="Contraseña"
              required
              onChange={updateData}
            />
          </div>
          <div className="col-12 col-md-6 offset-md-3">
            <input
              name="contrasena2"
              type="password"
              className="form-control"
              id="iniciar"
              placeholder="Confirmar contraseña"
              required
              onChange={updateData}
            />
          </div>

          <div className="col-12 col-md-6 offset-md-3">
            <button type="submit" className="btn w-100" id="button_2">
              <span className="texto_1">Crear Cuenta</span>
            </button>
          </div>
        </div>
      </form>
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          <p className="text-center texto_1">
            Recuerda: La contraseña debe tener, como mínimo, 8 caracteres
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;
