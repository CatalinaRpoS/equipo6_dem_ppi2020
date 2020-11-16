import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";

function Footer1 (props) {
    return (
      <div>
        <footer
          className="page-footer"
          style={{ backgroundImage: `url(${Foto2})` }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <button type="submit" className="btn" id="button_2">
                  <a className="texto_1" href={props.href1}>
                    {props.btn1}
                  </a>
                </button>
              </div>
              <div className="col"></div>
              <div className="col">
                <button type="submit" className="btn" id="button_2">
                  <a className="texto_1" href={props.href2}>
                   {props.btn2}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }


export default Footer1;
