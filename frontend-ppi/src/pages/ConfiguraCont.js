import React from "react";
import "../styles/styles.css";
import NuevaContrasena from "../components/nueva_contrasena";
import Foto2 from "../images/wallpaper-2.png";

class ConfiguraContraseña extends React.Component {
  render() {
    return (
      <div id="pantalla_2" style={{ backgroundImage: `url(${Foto2})` }}>
        <NuevaContrasena />
      </div>
    );
  }
}

export default ConfiguraContraseña;
