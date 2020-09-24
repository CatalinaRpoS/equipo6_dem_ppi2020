import React from 'react';
import '../styles/styles.css';
import Titulo2 from '../components/titulo_2';
import RecuperarContraseña from '../components/recuperar_contraseña';
import Foto2 from "../images/wallpaper-2.png";

class OlvidasteContraseña extends React.Component{
    render(){
        return(
          <div id="pantalla_2" style={{ backgroundImage: `url(${Foto2})` }}>
               <Titulo2 titulo="¿Olvidaste tu Contraseña?"/>
               <br/>
               <br/>
               <RecuperarContraseña/>

            </div>
        );
    }
}

export default OlvidasteContraseña;