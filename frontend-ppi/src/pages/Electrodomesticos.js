import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import Electrodomesticos1 from "../images/electrodomesticos.jpg";
import "../styles/styles.css";
import Form2 from "../components/form_2"

class Electrodomesticos extends React.Component {
  render() {
    return (
      <div>
        <NavbarLleno />
        <img src={Electrodomesticos1} className="img_3 img-fluid" alt="" />
        <h4 className="text-center texto_3 font-weight-bold">
          <br />
          ¿Cómo utilizas tus electrodomésticos?
        </h4>
        <br/>
        <Form2/>
      </div>
    );
  }
}

export default Electrodomesticos;