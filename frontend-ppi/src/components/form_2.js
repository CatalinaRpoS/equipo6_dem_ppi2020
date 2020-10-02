import React from "react";
import swal from "sweetalert2";
import "../styles/styles.css";

class Form2 extends React.Component {
  render() {
    const guardar = () => {
      swal
        .fire({
          title: "¿Estás seguro de guardar esta información?",
          icon: "warning",
          confirmButtonText: "Sí",
          cancelButtonText: "No",
          showCancelButton: true,
          confirmButtonColor: "#f96332",
          cancelButtonColor: "#f96332"
        })
        .then((resultado) => {
          if (resultado.value) {
            swal.fire({
              title: "¡La información se guardó correctamente!",
              icon: "success",
              confirmButtonText: "¡Entendido!",
              confirmButtonColor: "#f96332"
            });
          }
        });
    };
    return (
      <div className="container-fluid">
        <div className="alert alert-warning" role="alert">
          A continuación, debes escribir las horas diarias de uso que se le da
          en tu hogar a cada uno de los siguientes electrodomésticos o aparatos
          eléctricos. Recuerda tener en cuenta a todos los miembros de tu
          familia y apegarte lo más posible a los gastos.
        </div>
        <br />
        <form>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">
                Nevera (cuando el motor está haciendo ruido)
              </label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Lavadora</label>
              <input
                type="number"
                className="form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Televisor</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Licuadora</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Horno microondas</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Olla arrocera</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Ventilador</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Plancha de ropa</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Secador de cabello</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Bombillos</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Sanduchera</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Fogón de luz</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">
                Cargadores de celular (conectados a la energía)
              </label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <label for="input1">Computador (conectado a la energía)</label>
              <input
                type="number"
                className="input_2 form-control"
                id="input1"
                value="0"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-3 col-sm-3 col-lg-3"></div>
            <div className="col-md-6 col-sm-6 col-lg-6">
              <button
                onClick={() => guardar()}
                type="button"
                className="btn w-100"
                id="button_1"
              >
                <span className="texto_1">Guardar</span>
              </button>
            </div>
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default Form2;
