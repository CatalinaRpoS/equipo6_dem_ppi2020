import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
import Axios from "axios";

const CampoSoporte1 = (props) => {
  const [infoMensaje, setInfoMensaje] = useState({});

  function updateMensaje(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInfoMensaje({
      ...infoMensaje,
      [name]: value
    });
  }

  function enviar(event) {
    event.preventDefault();
    Axios.post("https://altovoltaje.herokuapp.com/enviar-mensaje", {
      infoMensaje
    }).then((res) => {
      if (res.data.message === "¡El mensaje se guardó correctamente!") {
        swal.fire({
          title: "¡Tu mensaje se envió correctamente!",
          text:
            "Muchas gracias por ayudar al proceso de desarrollo de Alto Voltaje",
          icon: "success",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#f96332"
        });
      } else {
        swal.fire({
          title: "¡Tu mensaje no se pudo enviar!",
          text: "Por favor, intenta otra vez",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#f96332"
        });
      }
    });
  }

  return (
    <div className="container-fluid">
      <form onSubmit={enviar} autocomplete="off">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="nombre"
              type="text"
              className="form-control"
              id="iniciar"
              placeholder={props.input1}
              required
              onChange={updateMensaje}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              name="email"
              type="email"
              className="form-control"
              id="iniciar"
              placeholder={props.input2}
              required
              onChange={updateMensaje}
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <br />
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <textarea
              name="mensaje"
              className="form-control"
              id="textarea_1"
              rows="2"
              placeholder="Escribe aquí tu comentario"
              required
              onChange={updateMensaje}
            ></textarea>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <button type="submit" className="btn w-100" id="button_2">
              <span className="button_3">Enviar</span>
            </button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default CampoSoporte1;
