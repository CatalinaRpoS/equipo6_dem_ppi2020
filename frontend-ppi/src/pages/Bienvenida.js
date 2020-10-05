import React from "react";
import "../styles/styles.css";
import Foto1 from "../images/wallpaper-1.png";
import Titulo1 from '../components/titulo_1';
import InicioSesion from '../components/inicio_sesion';

class Bienvenida extends React.Component {
  render() {
    return (
      <div id="pantalla_1" style={{ backgroundImage: `url(${Foto1})` }}>
        <Titulo1/>
        <br/>
        <InicioSesion/>
      </div>
    );
  }
}

export default Bienvenida;