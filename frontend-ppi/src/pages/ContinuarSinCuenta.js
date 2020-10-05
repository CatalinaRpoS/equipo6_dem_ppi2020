import React from "react";
import NavbarVacio from "../components/navbar_vacio";
import Imagen1 from "../images/imagen-1.jpg";
import ImagenTitulo from "../components/imagen_titulo";
import Cards1 from "../components/cards_1";
import Footer1 from "../components/footer_1";
import Data from "../server/data_1.json";

class ContinuarSinCuenta extends React.Component {
  render() {
    return (
      <div>
        <NavbarVacio />
        <ImagenTitulo
          imagen={Imagen1}
          texto="¿NO QUIERES CREAR UNA CUENTA?"
          texto2="¡Entonces échale un vistazo a los siguientes tips de ahorro de energía!"
        />
        <Cards1 Data={Data} />
        <Footer1
          btn1="Regístrate"
          btn2="¡Entendido!"
          href1="/registro"
          href2="/"
        />
      </div>
    );
  }
}

export default ContinuarSinCuenta;
