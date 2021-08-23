import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
//import { event } from "jquery";
import axios from "axios";
import { saveToLocal } from "../functions/localStorage";
import sha1 from "sha1";
import Loading from "./loading";
import Titulo2 from "../components/titulo_2";

const Registro = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading ] = useState(false);

  function updateData(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  if(loading){
    return <Loading/>
  }

  function crearUsuario(event) {
    event.preventDefault();
    setLoading(true);

    const { contrasena, contrasena2 } = userData;
    if (contrasena.length < 8) {
      setLoading(false);
      swal.fire({
        title: "La contraseña es muy corta :(",
        text: "Por favor intenta otra vez",
        icon: "error",
        confirmButtonText: "¡Entendido!",
        //confirmButtonText: "Por favor prueba otra vez",
        confirmButtonColor: "#f96332"
      });
    } else {
      if (contrasena === contrasena2) {
        //ENVIAR LOS DATOS PARA LA BASE DE DATOS EN ESTE BLOQUE
        axios
          .post("https://altovoltaje.herokuapp.com/registro", {
            documento: userData.documento,
            nombre: userData.nombre,
            email: userData.email,
            contrasena: sha1(userData.contrasena)
          })
          .then((res) => {
            setLoading(false);
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
        setLoading(false);
        swal.fire({
          title: "Las contraseñas no coinciden",
          text: "Por favor intenta otra vez",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          //confirmButtonText: "Por favor prueba otra vez",
          confirmButtonColor: "#f96332"
        });
      }
    }
  }

  return (
    <div className="container">
      <Titulo2 titulo="Regístrate" />
      <br />
      <br />
      <form onSubmit={crearUsuario} autocomplete="off">
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
