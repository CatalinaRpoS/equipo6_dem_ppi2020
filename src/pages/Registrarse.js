import React from 'react';
import '../styles/styles.css';
import Titulo2 from '../components/titulo_2';
import Registro from '../components/registro';

class Registrarse extends React.Component{
    render(){
        return(
            <div id="pantalla_2">
                <Titulo2 titulo="Regístrate"/>
                <br/>
                <br/>
                <Registro/>
                
            </div>
        );
    }
}

export default Registrarse;