import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
import axios from "axios";
import { saveToLocal } from "../functions/localStorage";
import Titulo2 from "../components/titulo_2";
import Loading from "../components/loading";

const RecuperarContrasena = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading ] = useState(false);

  function updateUserData(e) {
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

  const confirmar = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://altovoltaje.herokuapp.com/olvidaste-contrasena", {
        userData
      })
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.message === "Usuario no confirmado") {
          swal.fire({
            title: "¡No estás registrado como usuario de Alto Voltaje!",
            text: "Por favor, crea una cuenta",
            icon: "error",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332"
          });
        } else {
          setLoading(false);
          const { Id_usuario } = res.data.rows[0];
          saveToLocal("id", Id_usuario);
          swal
            .fire({
              title: "¡Tu identidad se ha confirmado correctamente!",
              text: "Ahora puedes configurar una contraseña nueva",
              icon: "success",
              confirmButtonText: "¡Entendido!",
              confirmButtonColor: "#f96332"
            })
            .then((resultado) => {
              if (resultado.value) {
                window.location.href = "/configura-contrasena";
              }
            });
        }
      });
  };
  return (
    <div className="container-fluid">
      <Titulo2 titulo="¿Olvidaste tu Contraseña?" />
        <br />
        <br />
      <div className="row">
        <div className="col text-center">
          <p className="texto_1">
            Confírmanos tu identidad como usuario de Alto Voltaje y te
            ayudaremos
          </p>
        </div>
      </div>
      <form onSubmit={confirmar}>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="documento"
              type="number"
              className="form-control"
              id="iniciar"
              placeholder="Documento de identidad"
              required
              onChange={updateUserData}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="nombre"
              type="text"
              className="form-control"
              id="iniciar"
              placeholder="Nombre"
              required
              onChange={updateUserData}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col">
            <button type="submit" className="btn w-100" id="button_2">
              <span className="texto_1">Confirmar</span>
            </button>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
      </form>
    </div>
  );
};

export default RecuperarContrasena;
