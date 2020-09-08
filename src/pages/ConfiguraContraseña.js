import React from 'react';
import '../styles/styles.css';
import Titulo2 from '../components/titulo_2';
import NuevaContraseña from '../components/nueva_contraseña';

class ConfiguraContraseña extends React.Component{
    render(){
        return(
            <div id="pantalla_2">
               <Titulo2 titulo="Configura tu Nueva Contraseña"/>
               <br/>
               <br/>
               <NuevaContraseña/>

            </div>
        );
    }
}

export default ConfiguraContraseña;