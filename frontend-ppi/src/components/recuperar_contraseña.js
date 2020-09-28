import React from 'react';
import '../styles/styles.css';
import swal from 'sweetalert2';

class RecuperarContraseña extends React.Component{
    render(){
        const confirmar=()=>{
            swal.fire({
                title: "¡Tu identidad se ha confirmado correctamente!",
               text:"Ahora puedes configurar una contraseña nueva",
                icon: "success",
                confirmButtonText: "¡Entendido!",
                confirmButtonColor: "#f96332"
            })
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                    <p className="texto_1">Confírmanos tu identidad como usuario de Alto Voltaje y te ayudaremos</p>
                    </div>
                </div>
                <form>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="email" className="form-control" id="iniciar" placeholder="Nombre"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="password" className="form-control" id="iniciar" placeholder="Email"/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col">
                    <button type="button" className="btn" onClick={()=>confirmar()} id="button_2"><span className="texto_1">Confirmar</span></button>
                    </div>
                    <div className="col">
                    <button type="button" className="btn float-right" id="button_2"><a className="texto_1" href="/configura-contraseña">Continuar</a></button>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                </form>
            </div>
        );
    }
}

export default RecuperarContraseña;