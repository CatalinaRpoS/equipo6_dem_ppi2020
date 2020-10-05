import React from "react";
import Foto1 from "../images/wallpaper-1.png";
import Titulo2 from "../components/titulo_2";
import CampoSoporte1 from "../components/campo_soporte1";
import NavbarLleno from "../components/navbar_lleno";

class SoporteTecnico2 extends React.Component {
  render() {
    return (
      <div id="pantalla_2" style={{ backgroundImage: `url(${Foto1})` }}>
        <NavbarLleno />
        <div className="container-fluid">
          <Titulo2 titulo="Soporte Técnico" />
          <br />
          <div className="row">
            <div className="col">
              <p className="texto_1 text-center">
                Desde aquí puedes comunicarte con el equipo de desarrollo de
                Alto Voltaje
              </p>
            </div>
          </div>
        </div>
        <br />
        <CampoSoporte1 input1="Nombre" input2="Email" />
      </div>
    );
  }
}

export default SoporteTecnico2;
