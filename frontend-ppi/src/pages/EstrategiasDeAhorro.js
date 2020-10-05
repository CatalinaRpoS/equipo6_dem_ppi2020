import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import ImagenTitulo from "../components/imagen_titulo";
import FondoEntero from "../images/fondo_entero.png";
import Estrategias1 from "../server/estrategias_1.json";
import Cards2 from "../components/cards_2";
import Footer1 from "../components/footer_1";

class EstrategiasDeAhorro extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno />
        <ImagenTitulo
          imagen={FondoEntero}
          texto="ESTRATEGIAS DE AHORRO EN EL HOGAR"
          texto2="Estos métodos están pensados especialmente para ti, de acuerdo con tus habitos de consumo de energía"
        />
        <Cards2 Data3={Estrategias1} />
        <br />
        <Footer1
          btn1="Inicio"
          btn2="¡Entendido!"
          href1="/inicio"
          href2="/agradecimiento"
        />
      </div>
    );
  }
}
export default EstrategiasDeAhorro;
