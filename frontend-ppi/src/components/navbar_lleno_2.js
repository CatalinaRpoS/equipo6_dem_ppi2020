import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";

class NavbarLleno2 extends React.Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-dark"
          style={{ backgroundImage: `url(${Foto2})` }}
        >
          <a className="navbar-brand" href="/">
          <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/>
          <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z"/>
          </svg>
          </a>
          <h1 id="titulo_3">Alto Voltaje </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/familia-y-vivienda">
                  FAMILIA Y VIVIENDA
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/electrodomesticos">
                  ELECTRODOMÉSTICOS Y TIEMPO
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/consumo-de-energia">
                  CONSUMO PROMEDIO DE ENERGÍA
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/estrategias-ahorro">
                  ESTRATEGIAS DE AHORRO EN EL HOGAR
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/inicio">
                  INICIO
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/ajustes">
                  AJUSTES
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/soporte-tecnico-2">
                  SOPORTE TÉCNICO
                </a>
              </li>
              <div class="dropdown-divider"></div>
              <li className="nav-item active">
                <a className="nav-link texto_1" href="/">
                  CERRAR SESIÓN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarLleno2;
