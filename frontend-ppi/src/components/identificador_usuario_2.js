import React from "react";
import "../styles/styles.css";
import Usuario from "../images/usuario.jpg";
import swal from "sweetalert2";

class IdentificadorUsuario2 extends React.Component {
  render() {
    const actualizar = () => {
      swal
        .fire({
          title: "¿Estás seguro de actualizar tu información personal?",
          icon: "warning",
          confirmButtonText: "Sí",
          cancelButtonText: "No",
          showCancelButton: true,
          confirmButtonColor: "#f96332",
          cancelButtonColor: "#f96332"
        })
        .then((resultado) => {
          if (resultado.value) {
            swal.fire({
              title: "¡Tu información personal fue actualizada correctamente!",
              icon: "success",
              confirmButtonText: "¡Entendido!",
              confirmButtonColor: "#f96332"
            });
          }
        });
    };
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
       /* .then((resultado) => {
          if (resultado.value) {
            location.href = "/";
          }
        });*/
    };
    return (
      <div className="identi justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <p className="texto_arriba text-center">AJUSTES</p>
              <button
                className="btn button_transparente navbar-brand text-white float-left"
                onClick={() => actualizar()}
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-cloud-upload"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>
              </button>
              <button
                className="btn button_transparente navbar-brand text-white float-right"
                onClick={() => eliminar()}
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-cloud-minus"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
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
