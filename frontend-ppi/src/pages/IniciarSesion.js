import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";
import DatosInicio from "../components/datos_inicio";

class IniciarSesion extends React.Component {
  render() {
    return (
      <div
        id="pantalla_2"
        style={{ backgroundImage: `url(${Foto2})` }}
      >
        <DatosInicio
          input1="Email"
          input2="Contraseña"
          question1="¿Olvidaste tu contraseña?"
          button="Continuar"
          question2="Soporte Técnico"
        />
      </div>
    );
  }
}

export default IniciarSesion;
