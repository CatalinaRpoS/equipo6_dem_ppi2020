import React from 'react';
import '../styles/styles.css';

class Registro extends React.Component{
    render(){
        return(
            <div className="container">
                <form>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="number" className="form-control" id="iniciar" placeholder="Documento de identidad"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="text" className="form-control" id="iniciar" placeholder="Nombre"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="email" className="form-control" id="iniciar" placeholder="Email"/>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="password" className="form-control" id="iniciar" placeholder="Contraseña"/>
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
                    <button type="submit" className="btn w-100 " id="button_2"><a className="texto_1" href="/iniciar-sesion">Crear Cuenta</a></button>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                </form>
                <br/>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col">
                    <p className="text-center texto_1">Recuerda: La contraseña debe tener, como mínimo, 8 caracteres</p>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
            </div>
        );
    }
}

export default Registro;