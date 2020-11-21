import React, { useState, useEffect } from "react";
import { getFromLocal } from "../functions/localStorage";
import Axios from "axios";

const Cards2 = () => {
  const [infoEstrategias, setInfoEstrategias] = useState([]);

  useEffect(() => {
    function obtenerInfoEstrategias() {
      const id = getFromLocal("id");
      if (id) {
        Axios.get(
          `https://altovoltaje.herokuapp.com/estrategias-ahorro/${id}`
        ).then((res) => {
          setInfoEstrategias(res.data);
        });
      }
    }
    obtenerInfoEstrategias();
  }, [infoEstrategias]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <br />
          {infoEstrategias.map((info, index) => (
            <div
              className="alert alert-warning card-text"
              role="alert"
              key={index}
            >
              <img src={info.Icono} alt="Icono_estrategia" />
              <div className="text-padding">
                <span>{info.Estrategia}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards2;
