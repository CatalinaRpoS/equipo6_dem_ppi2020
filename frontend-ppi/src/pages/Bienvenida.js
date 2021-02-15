import React from "react";
import "../styles/styles.css";
import Foto1 from "../images/wallpaper-1.png";
import InicioSesion from '../components/inicio_sesion';

class Bienvenida extends React.Component {
  render() {
    return (
      <div id="pantalla_1" style={{ backgroundImage: `url(${Foto1})` }}>
        <InicioSesion/>
      </div>
    );
  }
}

export default Bienvenida;