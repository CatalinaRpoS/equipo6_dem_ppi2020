import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
import { getFromLocal } from "../functions/localStorage";
import axios from "axios";
import sha1 from "sha1";

const NuevaContrasena = () => {
  const [infoPass, setInfoPass] = useState({});

  function updatePass(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInfoPass({
      ...infoPass,
      [name]: value
    });
  }

  const crear = (event) => {
    event.preventDefault();

    const { contrasena, contrasena2 } = infoPass;

    if (contrasena.length < 8) {
      swal.fire({
        title: "La contraseña es muy corta :(",
        text: "Por favor prueba otra vez",
        icon: "error",
        confirmButtonText: "¡Entendido!",
        confirmButtonColor: "#f96332"
      });
    } else {
      if (contrasena === contrasena2) {
        const id = getFromLocal("id");
        if (id) {
          axios
            .patch(
              `https://altovoltaje.herokuapp.com/configura-contrasena/${id}`,
              {
                contrasena: sha1(infoPass.contrasena)
              }
            )
            .then((res) => {
              console.log(res);
              swal
                .fire({
                  title: "¡Tu nueva contraseña se creó de forma exitosa!",
                  icon: "success",
                  confirmButtonText: "¡Entendido!",
                  confirmButtonColor: "#f96332"
                })
                .then((resultado) => {
                  if (resultado.value) {
                    window.location.href = "/iniciar-sesion";
                  }
                });
            })
            .catch((error) => {
              console.log(error);
            });
        }
        //ENVIAR LOS DATOS PARA LA BASE DE DATOS EN ESTE BLOQUE
      } else {
        swal.fire({
          title: "Las contraseñas no coinciden",
          icon: "error",
          confirmButtonText: "Por favor prueba otra vez",
          confirmButtonColor: "#f96332"
        });
      }
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <p className="texto_1">
            Luego de este proceso, debes iniciar sesión nuevamente
          </p>
        </div>
      </div>
      <form onSubmit={crear}>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="contrasena"
              type="password"
              className="form-control"
              id="iniciar"
              placeholder="Contraseña"
              required
              onChange={updatePass}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="contrasena2"
              type="password"
              className="form-control"
              id="iniciar"
              placeholder="Confirmar contraseña"
              required
              onChange={updatePass}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col">
            <button type="submit" className="btn w-100" id="button_2">
              <span className="texto_1">¡Listo!</span>
            </button>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
      </form>
    </div>
  );
};

export default NuevaContrasena;
