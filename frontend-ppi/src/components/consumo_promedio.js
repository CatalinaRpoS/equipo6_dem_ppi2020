import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import { getFromLocal } from "../functions/localStorage";
import Axios from "axios";
import swal from "sweetalert2";

const ConsumoPromedio = () => {
  const [infoPromedio, setInfoPromedio] = useState({
    Consumo_mensual: 0,
    Consumo_diario: 0,
    Precio_mensual: 0,
    Precio_diario: 0
  });

  useEffect(() => {
    obtenerInfoPromedio();
  }, []);

  function obtenerInfoPromedio() {
    const id = getFromLocal("id");
    if (id) {
      try {
        Axios.get(
          `https://altovoltaje.herokuapp.com/consumo-de-energia/${id}`
        ).then((res) => {
          // console.log(res);
          let info = res.data;
          setInfoPromedio(info);
        });
      } catch (e) {
        console.log(e);
        swal.fire({
          title: "¡Lo sentimos! No pudimos calcular tu consumo de energía",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#f96332"
        });
      }
    }
  }

  const {
    Consumo_mensual,
    Consumo_diario,
    Precio_mensual,
    Precio_diario
  } = infoPromedio;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card-deck">
            <div className="card text-center" id="card_tamaño">
              <img
                src="https://i.pinimg.com/564x/40/d2/49/40d24920d1aa084886bd91fb5a8a567c.jpg"
                className="card-img"
                id="card_tamaño"
                alt="..."
              />
              <div className="card-img-overlay">
                <p className="card-text font-weight-bold">MENSUAL</p>
                <h5 className="card-title font-weight-bold" id="card_1">
                  {Consumo_mensual + " Kwh"}
                </h5>
                <p className="card-text text-muted">{"$" + Precio_mensual}</p>
                <button type="button" className="btn" id="button_3">
                  <a id="button_3" href="/detalles">
                    Detalles
                  </a>
                </button>
              </div>
            </div>
            <div className="card text-center" id="card_tamaño">
              <img
                src="https://i.pinimg.com/564x/40/d2/49/40d24920d1aa084886bd91fb5a8a567c.jpg"
                className="card-img"
                id="card_tamaño"
                alt="..."
              />
              <div className="card-img-overlay">
                <p className="card-text font-weight-bold">DIARIO</p>
                <h5 className="card-title font-weight-bold" id="card_2">
                  {Consumo_diario + " Kwh"}
                </h5>
                <p className="card-text text-muted">{"$" + Precio_diario}</p>
                <button type="button" className="btn" id="button_3">
                  <a id="button_3" href="/detalles">
                    Detalles
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumoPromedio;
