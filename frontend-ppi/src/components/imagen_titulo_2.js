import React from "react";
import "../styles/styles.css";

class ImagenTitulo2 extends React.Component {
  render() {
    return (
      <div>
        <div
          className="cont-imagen"
          style={{ backgroundImage: `url(${this.props.imagen})` }}
        >
          <br />
          <div className="container-fluid">
            <p className="texto_arriba text-center font-weight-bold">
              {this.props.texto}
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ImagenTitulo2;
