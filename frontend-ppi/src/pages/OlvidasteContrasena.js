import React from "react";
import "../styles/styles.css";
import RecuperarContrasena from "../components/recuperar_contrasena";
import Foto2 from "../images/wallpaper-2.png";

class OlvidasteContraseña extends React.Component {
  render() {
    return (
      <div id="pantalla_2" style={{ backgroundImage: `url(${Foto2})` }}>
        
        <RecuperarContrasena />
      </div>
    );
  }
}

export default OlvidasteContraseña;
