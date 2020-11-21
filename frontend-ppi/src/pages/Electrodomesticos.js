import React, { useEffect } from "react";
import NavbarLleno from "../components/navbar_lleno";
import Electrodomesticos1 from "../images/imagen_electrodomesticos.png";
import Electrodomesticos2 from "../images/electrodomesticos_2.jpg";
import "../styles/styles.css";
import Form2 from "../components/form_2";
import Footer1 from "../components/footer_1";
import { getFromLocal } from "../functions/localStorage";
const Electrodomesticos = () => {
  useEffect(() => {
    const id = getFromLocal("id");
    if (!id) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavbarLleno />
      <div
        id="pantalla3"
        style={{ backgroundImage: `url(${Electrodomesticos1})` }}
      ></div>
      <img src={Electrodomesticos2} className="img_4 img-fluid" alt="" />
      <h4 className="text-center texto_3 font-weight-bold">
        <br />
        ¿Cómo utilizas tus electrodomésticos?
      </h4>
      <br />
      <Form2 />
      <Footer1
        btn1="Inicio"
        btn2="¡Listo!"
        href1="/inicio"
        href2="/consumo-de-energia"
      />
    </div>
  );
};

export default Electrodomesticos;
