import React from "react";

class Form4 extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h4 className="texto_3 font-weight-bold">
              <br />
              COMPLETAR INFORMACIÓN PERSONAL:
            </h4>
            <br />
            <div className="col">
              <label className="font-weight-bold" for="input1">
                Fecha de nacimiento:
              </label>
              <input type="date" className="input_2 form-control" id="input1" />
            </div>
            <br />
            <div className="col">
              <label className="font-weight-bold" for="input1">
                Género:
              </label>
              <select
                className="form-control selectBox"
                id="exampleFormControlSelect1"
              >
                <option>Escoge una opción</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>
            <br />
            <div className="col">
              <label className="font-weight-bold" for="input1">
                Ciudad de residencia:
              </label>
              <select
                className="form-control selectBox"
                id="exampleFormControlSelect1"
              >
                <option>Escoge una opción</option>
                <option>Medellín</option>
                <option>Otra</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form4;
