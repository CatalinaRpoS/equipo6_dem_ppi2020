import React from "react";
import "../styles/styles.css";
import Usuario from "../images/usuario.jpg";

class IdentificadorUsuario extends React.Component {
  render() {
    return (
      <div className="identi justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <br />
              <img
                src={Usuario}
                className="rounded-circle mx-auto d-block img_user"
                alt="..."
              />
              <br />
              <h3 className="text-center texto_2">Luis Santamaría </h3>
              <h4 className="text-center texto_1">Usuario</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IdentificadorUsuario;
