import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";

class NavbarVacio extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="nav_1 navbar navbar-expand"
          style={{ backgroundImage: `url(${Foto2})` }}
        >
          <h1 id="titulo_3">Alto Voltaje </h1>
        </nav>
      </div>
    );
  }
}

export default NavbarVacio;