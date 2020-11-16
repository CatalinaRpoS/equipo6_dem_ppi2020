import React from "react";
import "../styles/styles.css";
import swal from "sweetalert2";

function Form3() {
  const guardar = (event) => {
    event.preventDefault();
    swal
      .fire({
        title: "¿Estás seguro de agregar esta información adicional?",
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
            title: "¡La información fue agregada correctamente!",
            icon: "success",
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#f96332"
          });
        }
      });
  };
  return (
    <div className="container-fluid">
      <form onSubmit={guardar}>
        <div className="row">
          <div className="col">
            <div class="form-group rounded">
              <label for="exampleFormControlSelect1">Comuna</label>
              <select
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
              >
                <option value="">Escoge una opción</option>
                <option>Comuna 1 - Popular</option>
                <option>Comuna 2 - Santa Cruz</option>
                <option>Comuna 3 - Manrique</option>
                <option>Comuna 4 - Aranjuez</option>
                <option>Comuna 5 - Castilla</option>
                <option>Comuna 6 - Doce de Octubre</option>
                <option>Comuna 7 - Robledo</option>
                <option>Comuna 8 - Villa Hermosa</option>
                <option>Comuna 9 - Buenos Aires</option>
                <option>Comuna 10 - La Candelaria</option>
                <option>Comuna 11 - Laureles Estadio</option>
                <option>Comuna 12 - La América</option>
                <option>Comuna 13 - San Javier</option>
                <option>Comuna 14 - El Poblado</option>
                <option>Comuna 15 - Guayabal</option>
                <option>Comuna 16 - Belén</option>
                <option>Comuna 50 - San Sebastián de Palmitas</option>
                <option>Comuna 60 - San Cristóbal</option>
                <option>Comuna 70 - Altavista</option>
                <option>Comuna 80 - San Antonio de Prado</option>
                <option>Comuna 90 - Santa Elena</option>
                <option>Comuna 99</option>
                <option>No aplica</option>
              </select>
            </div>
            <br />
            <div class="form-group rounded">
              <label for="exampleFormControlSelect1">
                Empresa prestadora de servicios públicos
              </label>
              <select
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
              >
                <option value="">Escoge una opción</option>
                <option>EPM</option>
                <option>Otra</option>
              </select>
            </div>
            <br />
            <div class="form-group rounded">
              <label for="exampleFormControlSelect1">
                ¿Tu servicio de energía es prepago o pospago?
              </label>
              <select
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
              >
                <option value="">Escoge una opción</option>
                <option>Prepago - Recargas con tarjeta antes de usar</option>
                <option>Pospago - Pagas con factura cada mes</option>
              </select>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3 col-sm-3 col-lg-3"></div>
              <div className="col-md-3 col-sm-3 col-lg-3"></div>
              <div className="col-md-6 col-sm-6 col-lg-6">
                <button type="submit" className="btn w-100" id="button_1">
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

export default Form3;
