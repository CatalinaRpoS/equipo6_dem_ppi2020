import React, { useState, useEffect } from "react";
import NavbarLleno from "../components/navbar_lleno";
import ImagenTitulo from "../components/imagen_titulo";
import FondoEntero from "../images/fondo_entero.png";
import Footer1 from "../components/footer_1";
import Axios from "axios";
import { getFromLocal } from "../functions/localStorage";
//import swal from "sweetalert2";

const Detalles = () => {
  const [infoDetalles, setInfoDetalles] = useState([]);

  useEffect(() => {
    function obtenerInfoDetalles() {
      const id = getFromLocal("id");
      if (!id) {
        window.location.href = "/";
      }
      if (id) {
        Axios.get(`https://altovoltaje.herokuapp.com/detalles/${id}`).then(
          (res) => {
            setInfoDetalles(res.data);
          }
        );
      }
    }
    obtenerInfoDetalles();
  }, [infoDetalles]);

  return (
    <div>
      <NavbarLleno />
      <ImagenTitulo
        imagen={FondoEntero}
        texto="¿CUÁLES SON LOS ELECTRODOMÉSTICOS MÁS USADOS EN TU HOGAR?"
        texto2="Esta información te será muy útil para evaluar tus hábitos de consumo"
      />
      <br />
      <div className="map-junto container">
        {infoDetalles.map((info, index) => (
          <div className="card-tamano" key={index}>
            <div className="row">
              <div className="col">
                <div className="card card-mar">
                  <img
                    src={info.Ilustracion}
                    className="card-img-top card-tam"
                    alt="Ilustración electrodoméstico"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold" id="text-mayus">
                      {info.Nombre}
                    </h5>
                    <p className="card-text">
                      Este es uno de los electrodomésticos o aparatos eléctricos
                      que permanecen más tiempo conectados a la energía, por lo
                      que representa un alto consumo de energía para tu hogar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Footer1
        btn1="Atrás"
        btn2="Inicio"
        href1="/consumo-de-energia"
        href2="/inicio"
      />
    </div>
  );
};

export default Detalles;
