import React, { useState } from "react";
import "../styles/styles.css";
import swal from "sweetalert2";
import axios from "axios";
import { getFromLocal } from "../functions/localStorage";

const Form4 = () => {
  const [userInfo, setUserInfo] = useState({});

  function updateInfo(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  }

  const actualizar = (event) => {
    console.log(userInfo);
    event.preventDefault();
    swal
      .fire({
        title: "¿Estás seguro de actualizar tu información personal?",
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
              .patch(`https://ygfev.sse.codesandbox.io/ajustes/${id}`, {
                userInfo
              })
              .then((res) => {
                swal.fire({
                  title:
                    "¡Tu información personal fue actualizada correctamente!",
                  icon: "success",
                  confirmButtonText: "¡Entendido!",
                  confirmButtonColor: "#f96332"
                });
              });
          }
        }
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h4 className="texto_3 font-weight-bold">
            <br />
            COMPLETAR INFORMACIÓN PERSONAL:
          </h4>
          <br />
          <form onSubmit={actualizar}>
            <div className="col">
              <label className="font-weight-bold" for="input1">
                Fecha de nacimiento:
              </label>
              <input
                name="fecha_nacimiento"
                type="date"
                className="input_2 form-control"
                id="input1"
                required
                onChange={updateInfo}
              />
            </div>
            <br />
            <div className="col">
              <label className="font-weight-bold" for="input1">
                Género:
              </label>
              <select
                name="genero"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
              >
                <option value="">Escoge una opción</option>
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
                name="ciudad_residencia"
                className="form-control selectBox"
                id="exampleFormControlSelect1"
                required
                onChange={updateInfo}
              >
                <option value="">Escoge una opción</option>
                <option>Medellín</option>
                <option>Otra</option>
              </select>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3 col-sm-3 col-lg-3"></div>
              <div className="col-md-3 col-sm-3 col-lg-3"></div>
              <div className="col-md-6 col-sm-6 col-lg-6">
                <button type="submit" className="btn w-100" id="button_1">
                  <span className="texto_1">¡Listo!</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form4;
