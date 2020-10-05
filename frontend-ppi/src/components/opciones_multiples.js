import React from "react";
import "../styles/styles.css";

class OpcionesMultiples extends React.Component {
  render() {
    return (
      <div className="identi justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <p className="texto_1 text-center">¿Qué quieres hacer ahora?</p>
              <br />
              <a className="texto_5" href="/inicio">
                VOLVER A INICIO
              </a>
              <hr className="hr_color" />
              <a className="texto_5" href="/soporte-tecnico-2">
                IR A SOPORTE TÉCNICO
              </a>
              <hr className="hr_color" />
              <a className="texto_5" href="/iniciar-sesion">
                CAMBIAR DE CUENTA
              </a>
              <hr className="hr_color" />
              <a className="texto_5" href="/">
                CERRAR SESIÓN
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default OpcionesMultiples;
