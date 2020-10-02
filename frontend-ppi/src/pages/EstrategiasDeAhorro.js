import React from "react";
import NavbarLleno from "../components/navbar_lleno";
import ImagenTitulo from "../components/imagen_titulo";
import FondoEntero from '../images/fondo_entero.png';

class EstrategiasDeAhorro extends React.Component{
render(){
  return(
    <div className="">
    <NavbarLleno/>
    <ImagenTitulo 
          imagen={FondoEntero}
          texto="ESTRATEGIAS DE AHORRO DE ENERGÍA EN CASA"
          texto2="Estos métodos están pensados especialmente para ti, de acuerdo con tus habitos de consumo de energía"/>
    </div>
  );
}
}
export default EstrategiasDeAhorro;
