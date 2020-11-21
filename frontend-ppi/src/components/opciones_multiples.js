import React from "react";
import "../styles/styles.css";
import { removeFromLocal } from "../functions/localStorage";

const OpcionesMultiples = () => {
  const cerrar = () => {
    removeFromLocal("id");
    window.location.href = "/";
  };

  const volver = () => {
    window.location.href = "/inicio";
  };

  const soportar = () => {
    window.location.href = "/soporte-tecnico-2";
  };

  const cambiar = () => {
    window.location.href = "/iniciar-sesion";
  };

  return (
    <div className="identi justify-content-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <br />
            <p className="texto_1 text-center">¿Qué quieres hacer ahora?</p>
            <br />
            <button
              type="button"
              onClick={volver}
              className="btn w-100 text-left"
              id="button_4"
            >
              <span className="texto_5">VOLVER A INICIO</span>
            </button>
            <hr className="hr_color" />
            <button
              type="button"
              onClick={soportar}
              className="btn w-100 text-left"
              id="button_4"
            >
              <span className="texto_5">IR A SOPORTE TÉCNICO</span>
            </button>
            <hr className="hr_color" />
            <button
              type="button"
              onClick={cambiar}
              className="btn w-100 text-left"
              id="button_4"
            >
              <span className="texto_5">CAMBIAR DE CUENTA</span>
            </button>
            <hr className="hr_color" />
            <button
              type="button"
              onClick={cerrar}
              className="btn w-100 text-left"
              id="button_4"
            >
              <span className="texto_5">CERRAR SESIÓN</span>
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default OpcionesMultiples;
