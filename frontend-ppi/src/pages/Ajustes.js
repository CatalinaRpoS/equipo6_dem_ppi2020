import React, { useEffect } from "react";
import NavbarLleno2 from "../components/navbar_lleno_2";
import IdentificadorUsuario2 from "../components/identificador_usuario_2";
import "../styles/styles.css";
import Form4 from "../components/form_4";
import { getFromLocal } from "../functions/localStorage";

const Ajustes = () => {
  useEffect(() => {
    const id = getFromLocal("id");
    if (!id) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <NavbarLleno2 />
      <IdentificadorUsuario2 />
      <Form4 />
      <br />
    </div>
  );
};
export default Ajustes;
