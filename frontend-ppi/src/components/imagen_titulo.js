import React from "react";
import "../styles/styles.css";

const ImagenTitulo = (props) => {
  return (
    <div>
      <div
        className="cont-imagen"
        style={{ backgroundImage: `url(${props.imagen})` }}
      >
        <br />
        <div className="container-fluid">
          <p className="texto_arriba text-center font-weight-bold">
            {props.texto}
          </p>
          <br />
          <p className="texto_abajo text-center">{props.texto2}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ImagenTitulo;
