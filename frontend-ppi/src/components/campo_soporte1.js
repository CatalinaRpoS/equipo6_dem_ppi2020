import React from "react";
import "../styles/styles.css";

class CampoSoporte1 extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <form>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <input
                type="email"
                className="form-control"
                id="iniciar"
                placeholder={this.props.input1}
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <input
                type="email"
                className="form-control"
                id="iniciar"
                placeholder={this.props.input2}
              />
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <br />
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
            <textarea class="form-control" id="textarea_1" rows="2" placeholder="Escribe aquí tu comentario"></textarea>
            </div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
          <div className="col-md-6 col-sm-6 col-lg-6">
          <button type="submit" className="btn w-100" id="button_2"><span className="button_3">Enviar</span></button>
            </div>
            </div>
          <br/>
        </form>
      </div>
    );
  }
}
export default CampoSoporte1;
