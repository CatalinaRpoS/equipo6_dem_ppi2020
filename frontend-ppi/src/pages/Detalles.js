import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import ImagenTitulo from "../components/imagen_titulo";
import FondoEntero from "../images/fondo_entero.png";
import Computador from "../images/computador.jpg";
import Footer1 from "../components/footer_1";

class Detalles extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno />
        <ImagenTitulo
          imagen={FondoEntero}
          texto="¿CUÁL ES EL ELECTRODOMÉSTICO MÁS USADO EN TU HOGAR?"
          texto2="Esta información te será muy útil para evaluar tus hábitos de consumo"
        />
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div class="card mb-3">
                <img src={Computador} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">COMPUTADOR</h5>
                  <p class="card-text">
                    El computador es el electrodoméstico o aparato electrónico
                    que permanece conectado a la energía durante más tiempo,
                    representando el mayor consumo de energía en tu hogar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1
          btn1="Atrás"
          btn2="Inicio"
          href1="/consumo-de-energia"
          href2="/inicio"
        />
      </div>
    );
  }
}

export default Detalles;
