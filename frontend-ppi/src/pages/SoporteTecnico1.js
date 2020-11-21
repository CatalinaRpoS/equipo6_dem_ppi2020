import React from "react";
import Foto2 from "../images/wallpaper-2.png";
import Titulo2 from "../components/titulo_2";
import CampoSoporte1 from "../components/campo_soporte1";

class SoporteTecnico1 extends React.Component {
  render() {
    return (
      <div
        className="container-fluid"
        id="pantalla_2"
        style={{ backgroundImage: `url(${Foto2})` }}
      >
        <Titulo2 titulo="Soporte Técnico" />
        <br />
        <div className="row">
          <div className="col">
            <p className="texto_1 text-center">
              Desde aquí puedes comunicarte con el equipo de desarrollo de Alto
              Voltaje
            </p>
          </div>
        </div>
        <br />
        <CampoSoporte1 input1="Nombre" input2="Email" />
        <a href="/iniciar-sesion">
          <svg
            width="4em"
            height="4em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </a>
      </div>
    );
  }
}

export default SoporteTecnico1;
