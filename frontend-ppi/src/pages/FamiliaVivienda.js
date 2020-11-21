import React, { useEffect } from "react";
import NavbarLleno from "../components/navbar_lleno";
import Familia from "../images/familia.jpg";
import "../styles/styles.css";
import Form1 from "../components/form_1";
import Footer1 from "../components/footer_1";
import { getFromLocal } from "../functions/localStorage";

const FamiliaVivienda = () => {
  useEffect(() => {
    const id = getFromLocal("id");
    if (!id) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavbarLleno />
      <img src={Familia} className="img_3 img-fluid" alt="" />
      <div className="container-fluid">
        <h4 className="text-center texto_3 font-weight-bold">
          <br />
          ¡Cuéntanos sobre tu familia y tu vivienda!
        </h4>
        <br />
      </div>
      <Form1 />
      <Footer1
        btn1="Inicio"
        btn2="Info adicional"
        href1="/inicio"
        href2="/familia-y-vivienda-2"
      />
    </div>
  );
};

export default FamiliaVivienda;
