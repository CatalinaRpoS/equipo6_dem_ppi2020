import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Usuario from "../images/usuario.jpg";
import { getFromLocal } from "../functions/localStorage";
import Axios from "axios";

const IdentificadorUsuario = () => {
  const [infoUsuario, setInfoUsuario] = useState({
    Nombre: "Cargando"
  });

  useEffect(() => {
    obtenerInfoUsuario();
  }, []);

  function obtenerInfoUsuario() {
    const id = getFromLocal("id");
    if (id) {
      Axios.get(`https://altovoltaje.herokuapp.com/inicio/${id}`).then(
        (response) => {
          let info = response.data[0];
          setInfoUsuario(info);
        }
      );
    }
  }

  const { Nombre } = infoUsuario;

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
            <h3 className="text-center texto_2">{Nombre} </h3>
            <h4 className="text-center texto_1">Usuario</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificadorUsuario;
