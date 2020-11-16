import React from "react";
import "../styles/styles.css";

const DatosInicio = (props) => {
  function iniciarSesion(event) {
    event.preventDefault();
    window.location.href = "/inicio";
  }

  return (
    <div className="container-fluid">
      <form onSubmit={iniciarSesion}>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              type="email"
              className="form-control"
              id="iniciar"
              placeholder={props.input1}
              required
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              type="password"
              className="form-control"
              id="iniciar"
              placeholder={props.input2}
              required
            />
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <p>
              <a className="texto_1" href="/olvidaste-contrasena">
                {props.question1}
              </a>
            </p>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <button type="submit" className="btn w-100 " id="button_2">
              <span className="texto_1">{props.button}</span>
            </button>
          </div>
          <div className="col-md-3 col-sm-3 col-lg-3"></div>
        </div>
      </form>
      <br />
      <div className="row">
        <div className="col text-center">
          <a className="texto_1" href="/soporte-tecnico-1">
            {props.question2}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DatosInicio;
