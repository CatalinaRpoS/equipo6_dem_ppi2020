import React from "react";
import "../styles/styles.css";
import swal from "sweetalert2";

class Form1 extends React.Component {
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
        <form>
          <div className="row">
            <div className="col">
              <div class="form-group rounded">
                <label for="exampleFormControlSelect1">
                  ¿Qué tipo de vivienda tienes?
                </label>
                <select
                  className="form-control rounded"
                  id="exampleFormControlSelect1"
                >
                  <option className="rounded">Escoge una opción</option>
                  <option>Casa</option>
                  <option>Apartamento</option>
                  <option>Habitación</option>
                  <option>Otro</option>
                </select>
              </div>
              <br />
              <div class="form-group rounded">
                <label for="exampleFormControlSelect1">
                  ¿Cuál es tu estrato socioeconómico?
                </label>
                <select
                  className="form-control rounded"
                  id="exampleFormControlSelect1"
                >
                  <option className="rounded">Escoge una opción</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              <br />
              <div class="form-group rounded">
                <label for="exampleFormControlSelect1">
                  ¿Cuántas personas viven en tu casa?
                </label>
                <select
                  className="form-control rounded"
                  id="exampleFormControlSelect1"
                >
                  <option className="rounded">Escoge una opción</option>
                  <option>Entre 1 y 5 personas</option>
                  <option>Entre 6 y 10 personas</option>
                  <option>Más de 11 personas</option>
                </select>
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form1;
