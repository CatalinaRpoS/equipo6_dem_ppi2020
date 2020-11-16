import React, { useState } from "react";
import swal from "sweetalert2";
import "../styles/styles.css";
import axios from "axios";
import { getFromLocal } from "../functions/localStorage";

const Form2 = (props) => {
  const [electrodomesticos, setElectrodomesticos] = useState({
    nevera: 0,
    lavadora: 0,
    televisor: 0,
    licuadora: 0,
    horno: 0,
    olla: 0,
    ventilador: 0,
    plancha: 0,
    secador: 0,
    bombillos: 0,
    sanduchera: 0,
    fogon: 0,
    celular: 0,
    computador: 0
  });

  function updateElectro(e) {
    let name = e.target.name;
    let value = Number(e.target.value);
    setElectrodomesticos({
      ...electrodomesticos,
      [name]: value
    });
  }

  const guardar = (event) => {
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
          axios
            .post(`https://backend.vercel.app/electrodomesticos/${id}`, {
              electrodomesticos
            })
            .then((res) => {
              swal.fire({
                title: "¡La información se guardó correctamente!",
                icon: "success",
                confirmButtonText: "¡Entendido!",
                confirmButtonColor: "#f96332"
              });
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };
  return (
    <div className="container-fluid">
      <div className="alert alert-warning" role="alert">
        A continuación, debes escribir las horas diarias de uso que se le da en
        tu hogar a cada uno de los siguientes electrodomésticos o aparatos
        eléctricos. Recuerda tener en cuenta a todos los miembros de tu familia
        y apegarte lo más posible a los gastos.
      </div>
      <br />
      <form onSubmit={guardar}>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label htmlFor="input1">
              Nevera (cuando el motor está haciendo ruido)
            </label>
            <input
              name="nevera"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label htmlFor="input1">Lavadora</label>
            <input
              name="lavadora"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Televisor</label>
            <input
              name="televisor"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Licuadora</label>
            <input
              name="licuadora"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Horno microondas</label>
            <input
              name="horno"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Olla arrocera</label>
            <input
              name="olla"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Ventilador</label>
            <input
              name="ventilador"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Plancha de ropa</label>
            <input
              name="plancha"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Secador de cabello</label>
            <input
              name="secador"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Bombillos</label>
            <input
              name="bombillos"
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              onChange={updateElectro}
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
              placeholder="0"
              required
              name="sanduchera"
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Fogón de luz</label>
            <input
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              name="fogon"
              onChange={updateElectro}
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
              placeholder="0"
              required
              name="celular"
              onChange={updateElectro}
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <label for="input1">Computador (conectado a la energía)</label>
            <input
              type="number"
              className="input_2 form-control"
              id="input1"
              placeholder="0"
              required
              name="computador"
              onChange={updateElectro}
            />
          </div>
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
      </form>
    </div>
  );
};

export default Form2;
