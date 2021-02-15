import React from "react";
import "../styles/styles.css";
import Registro from "../components/registro";
import Foto2 from "../images/wallpaper-2.png";

const Registrarse = () => {
  return (
    <div id="pantalla_2" style={{ backgroundImage: `url(${Foto2})` }}>
      <Registro />
    </div>
  );
};

export default Registrarse;
