import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import ImagenTitulo2 from "../components/imagen_titulo_2";
import FondoEntero from "../images/fondo_entero.png";
import Luces from "../images/luces.jpg";
import OpcionesMultiples from "../components/opciones_multiples";

class Agradecimiento extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno />
        <ImagenTitulo2
          imagen={FondoEntero}
          texto="¡GRACIAS POR APRENDER CON ALTO VOLTAJE!"
        />
        <img src={Luces} className="img_3 img-fluid" alt="" />
        <OpcionesMultiples />
      </div>
    );
  }
}

export default Agradecimiento;
