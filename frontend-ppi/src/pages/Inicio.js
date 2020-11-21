import React, { useEffect } from "react";
import NavbarLleno from "../components/navbar_lleno";
import IdentificadorUsuario from "../components/identificador_usuario";
import "../styles/styles.css";
import CardsInicio from "../components/cards_inicio";
import CardsInicio2 from "../components/cards_inicio_2";
import Data2 from "../server/data_2.json";
import Data4 from "../server/data_4.json";
import { getFromLocal } from "../functions/localStorage";

const Inicio = () => {
  useEffect(() => {
    const id = getFromLocal("id");
    if (!id) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavbarLleno />
      <IdentificadorUsuario />
      <div className="container">
        <br />
        <h4 className="text-center texto_3 font-weight-bold">
          ¡Bienvenido a la experiencia personalizada!
        </h4>
        <br />
        <div class="alert alert-warning card-text" role="alert">
          <a className="texto_6" href="/ajustes">
            {" "}
            ¿Aún no has actualizado tu información personal? ¡Puedes hacerlo
            dando click aquí!
          </a>
        </div>
        <CardsInicio Data2={Data2} />
        <div class="alert alert-warning card-text" role="alert">
          <span className="text-danger font-weight-bold">IMPORTANTE: </span>
          Por favor no accedas a las siguientes secciones de la aplicación si no
          has estado aún en las dos primeras. Esto puede afectar el correcto
          desarrollo de tu experiencia personalizada.
        </div>
        <CardsInicio2 Data4={Data4} />
      </div>
    </div>
  );
};

export default Inicio;
