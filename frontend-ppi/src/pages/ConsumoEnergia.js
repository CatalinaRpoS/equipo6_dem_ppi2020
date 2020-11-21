import React, { useEffect } from "react";
import NavbarLleno from "../components/navbar_lleno";
//import swal from "sweetalert2";
import Ciudad from "../images/ciudad.jpg";
import ConsumoPromedio from "../components/consumo_promedio";
import Footer1 from "../components/footer_1";
import { getFromLocal } from "../functions/localStorage";

const ConsumoEnergia = () => {
  useEffect(() => {
    const id = getFromLocal("id");
    if (!id) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <NavbarLleno />
      <div className="identi">
        <div className="container-fluid">
          <br />
          <p class="texto_arriba text-center font-weight-bold">
            ¿CUÁL ES TU CONSUMO PROMEDIO DE ENERGÍA?
          </p>
          <br />
        </div>
      </div>
      <img src={Ciudad} className="img_3 img-fluid" alt="" />
      <br />
      <br />
      <ConsumoPromedio />
      <br />
      <Footer1
        btn1="Inicio"
        btn2="¡Entendido!"
        href1="/inicio"
        href2="/estrategias-ahorro"
      />
    </div>
  );
};

export default ConsumoEnergia;
