import React, { useEffect } from "react";
import NavbarLleno from "../components/navbar_lleno";
import ImagenTitulo from "../components/imagen_titulo";
import Casa from "../images/casa.jpg";
import Form3 from "../components/form_3";
import Footer1 from "../components/footer_1";
import { getFromLocal } from "../functions/localStorage";

const FamiliaVivienda2 = () => {
  useEffect(() => {
    const id = getFromLocal("id");
    if (!id) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavbarLleno />
      <ImagenTitulo
        imagen={Casa}
        texto={
          <p>
            INFORMACIÓN ADICIONAL:
            <br />
            VIVIENDA
          </p>
        }
        texto2="Esta información adicional nos permitirá brindarte un mejor servicio"
      />
      <br />
      <Form3 />
      <Footer1
        btn1="Inicio"
        btn2="Atrás"
        href1="/inicio"
        href2="/familia-y-vivienda"
      />
    </div>
  );
};

export default FamiliaVivienda2;
