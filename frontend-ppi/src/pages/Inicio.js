import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import IdentificadorUsuario from "../components/identificador_usuario";
import "../styles/styles.css";
import CardsInicio from "../components/cards_inicio";
import Data2 from "../server/data_2.json";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno />
        <IdentificadorUsuario />
        <div className="container-fluid">
          <br />
          <h4 className="text-center texto_3 font-weight-bold">
            ¡Bienvenido a la experiencia personalizada!
          </h4>
          <CardsInicio Data2={Data2} />
        </div>
      </div>
    );
  }
}

export default Inicio;
