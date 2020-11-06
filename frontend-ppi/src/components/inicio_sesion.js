import React from "react";
import "../styles/styles.css";

class InicioSesion extends React.Component {
  render() {
    const iniciarSesion = (event) => {
      event.preventDefault();
      window.location.href = "/inicio";
    };
    return (
      <div className="container-fluid">
        <form onSubmit={iniciarSesion}>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="divInputIco col-md-6 col-sm-6 col-lg-6">
              <input
                type="email"
                className="form-control"
                id="iniciar"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <p></p>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="divInputIco col-md-6 col-sm-6 col-lg-6">
              <input
                type="password"
                className="form-control"
                id="iniciar"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <p>
                <a className="texto_1" href="/olvidaste-contraseña">
                  ¿Olvidaste tu contraseña?
                </a>
              </p>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <button type="submit" className="btn w-100 " id="button_1">
                <span className="texto_1">Inicia sesión</span>
              </button>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col">
            <p id="text_1">
              <a className="texto_1" href="/registro">
                Regístrate
              </a>
            </p>
          </div>
          <div className="col">
            <p id="text_2">
              <a className="texto_1" href="/continuar-sin-cuenta">
                Continuar sin una cuenta
              </a>
            </p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
      </div>
    );
  }
}

export default InicioSesion;
