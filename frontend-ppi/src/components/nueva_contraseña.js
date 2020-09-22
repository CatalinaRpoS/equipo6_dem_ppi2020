import React from 'react';
import '../styles/styles.css';

class NuevaContraseña extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                    <p className="texto_1">Luego de este proceso, debes iniciar sesión nuevamente</p>
                    </div>
                </div>
                <form>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="email" className="form-control" id="iniciar" placeholder="Contraseña"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="password" className="form-control" id="iniciar" placeholder="Confirmar contraseña"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <button type="submit" className="btn w-100 " id="button_2"><a className="texto_1" href="/iniciar-sesion">¡Listo!</a></button>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                </form>
            </div>
        );
    }
}

export default NuevaContraseña;