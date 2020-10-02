import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import IdentificadorUsuario from "../components/identificador_usuario";
import "../styles/styles.css";

class Ajustes extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno />
        <IdentificadorUsuario />
        <div className="container-fluid">
          <br />
        </div>
      </div>
    );
  }
}
export default Ajustes;
