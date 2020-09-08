import React from 'react';
import '../styles/styles.css';
import Titulo1 from '../components/titulo_1';
import InicioSesion from '../components/inicio_sesion';

class Bienvenida extends React.Component{
    render(){
        return(
            <div id="pantalla_1">
                <Titulo1/>
                <br/>
                <br/>
                <InicioSesion />
            </div>
        );
    }
}

export default Bienvenida;