import React from "react";
import "../styles/styles.css";
import Usuario from "../images/usuario.jpg";
import swal from "sweetalert2";

class IdentificadorUsuario2 extends React.Component {
  render() {
    const eliminar = () => {
      swal
        .fire({
          title: "¿Estás seguro de querer eliminar tu cuenta?",
          text: "Esta acción no se puede deshacer",
          icon: "warning",
          confirmButtonText: "Sí",
          cancelButtonText: "No",
          showCancelButton: true,
          confirmButtonColor: "#f96332",
          cancelButtonColor: "#f96332"
        })
        .then((resultado) => {
          if (resultado.value) {
            window.location.href = "/";
          }
        });
    };
    return (
      <div className="identi justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <p className="texto_arriba text-center">AJUSTES</p>
              <img
                src={Usuario}
                className="rounded-circle mx-auto d-block img_user"
                alt="..."
              />
              <br />
              <form>
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  <div className="col-md-8 col-sm-8 col-lg-8">
                    <input
                      type="number"
                      className="form-control"
                      id="iniciar"
                      value="77654321"
                      readOnly
                    />
                  </div>
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  <div className="col-md-8 col-sm-8 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      id="iniciar"
                      value="Luis Santamaría"
                      readOnly
                    />
                  </div>
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  <div className="col-md-8 col-sm-8 col-lg-8">
                    <input
                      type="email"
                      className="form-control"
                      id="iniciar"
                      value="luisantama@email.com"
                      readOnly
                    />
                    <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  <div className="col-md-8 col-sm-8 col-lg-8">
                    <input
                      type="password"
                      className="form-control"
                      id="iniciar"
                      value="123456789"
                      readOnly
                    />
                  </div>
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  <div className="col-md-8 col-sm-8 col-lg-8">
                    <button
                      type="button"
                      onClick={eliminar}
                      className="btn w-100"
                      id="button_2"
                    >
                      <span className="texto_1">Eliminar Cuenta</span>
                    </button>
                    <div className="col-md-2 col-sm-2 col-lg-2"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default IdentificadorUsuario2;
