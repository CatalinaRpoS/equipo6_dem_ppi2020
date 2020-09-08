import React from 'react';
import '../styles/styles.css';
import Titulo2 from '../components/titulo_2';
import DatosInicio from '../components/datos_inicio';

class IniciarSesion extends React.Component{
    render(){
        return(
            <div id="pantalla_2">
               <Titulo2 titulo="Inicia Sesión"/>
               <br/>
               <br/>
               <br/>
               <DatosInicio input1="Email" input2="Contraseña" question1="¿Olvidaste tu contraseña?" button="Continuar" question2="Soporte Técnico"/>

            </div>
        );
    }
}

export default IniciarSesion;