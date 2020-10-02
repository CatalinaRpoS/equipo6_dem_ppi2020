import React from "react";
import NavbarLleno2 from "../components/navbar_lleno_2";
import IdentificadorUsuario2 from "../components/identificador_usuario_2";
import "../styles/styles.css";
import Form4 from "../components/form_4";

class Ajustes extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno2 />
        <IdentificadorUsuario2 />
        <Form4 />
        <br />
      </div>
    );
  }
}
export default Ajustes;
