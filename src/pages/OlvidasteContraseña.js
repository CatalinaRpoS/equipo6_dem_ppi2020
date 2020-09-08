import React from 'react';
import '../styles/styles.css';
import Titulo2 from '../components/titulo_2';
import RecuperarContraseña from '../components/recuperar_contraseña';

class OlvidasteContraseña extends React.Component{
    render(){
        return(
            <div id="pantalla_2">
               <Titulo2 titulo="¿Olvidaste tu Contraseña?"/>
               <br/>
               <br/>
               <RecuperarContraseña/>

            </div>
        );
    }
}

export default OlvidasteContraseña;