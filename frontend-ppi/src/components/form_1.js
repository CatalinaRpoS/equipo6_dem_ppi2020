import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
import axios from "axios";
import { getFromLocal } from "../functions/localStorage";

const Form1 = () => {
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
                `https://altovoltaje.herokuapp.com/familia-y-vivienda/${id}`,
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
    <div className="container-fluid">
      <form onSubmit={guardar}>
        <div className="row">
          <div className="col">
            <div class="form-group rounded">
              <label for="exampleFormControlSelect1">
                ¿Qué tipo de vivienda tienes?
              </label>
              <select
                name="vivienda"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
              >
                <option value="">Escoge una opción</option>
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
                name="estrato"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
              >
                <option value="">Escoge una opción</option>
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
                name="habitantes"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
              >
                <option value="">Escoge una opción</option>
                <option>Entre 1 y 5 personas</option>
                <option>Entre 6 y 10 personas</option>
                <option>Más de 11 personas</option>
              </select>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6"></div>
              <div className="col-md-6 col-sm-6 col-lg-6">
                <button
                  type="submit"
                  className="btn w-100 btn-padding"
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
};

export default Form1;
