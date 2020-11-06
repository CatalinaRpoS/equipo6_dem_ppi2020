import React from "react";
import "../styles/styles.css";
import swal from "sweetalert2";

class RecuperarContrasena extends React.Component {
  render() {
    const confirmar = (event) => {
      event.preventDefault();
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
            window.location.href = "/configura-contraseña";
          }
        });
    };
    return (
      <div className="container-fluid">
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
                type="number"
                className="form-control"
                id="iniciar"
                placeholder="Documento de identidad"
                required
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <input
                type="text"
                className="form-control"
                id="iniciar"
                placeholder="Nombre"
                required
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
  }
}

export default RecuperarContrasena;
