import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
import axios from "axios";
import { getFromLocal } from "../functions/localStorage";

const Form3 = () => {
  const [familyInfo, setFamilyInfo] = useState();

  function updateInfo(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFamilyInfo({
      ...familyInfo,
      [name]: value
    });
  }

  const guardar = (event) => {
    console.log(familyInfo);
    event.preventDefault();
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
          const id = getFromLocal("id");
          if (id) {
            axios
              .post(
                `https://altovoltaje.herokuapp.com/familia-y-vivienda-2/${id}`,
                { familyInfo }
              )
              .then((res) => {
                console.log(res);
                if (
                  res.data.message === "Respuestas correctas" ||
                  res.data.message === "Respuestas correctas 2"
                ) {
                  swal.fire({
                    title: "¡La información se guardó correctamente!",
                    icon: "success",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#f96332"
                  });
                } else {
                  swal.fire({
                    title: "¡La información no se pudo guardar!",
                    icon: "error",
                    confirmButtonText: "¡Entendido!",
                    confirmButtonColor: "#f96332"
                  });
                }
              });
          }
        }
      });
  };
  return (
    <div className="container">
      <form onSubmit={guardar} autocomplete="off">
        <div className="row">
          <div className="col">
            <div class="form-group rounded">
              <label for="exampleFormControlSelect1">Comuna</label>
              <select
                name="comuna"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
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
                name="empresa"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
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
                name="servicio"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
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
};

export default Form3;
