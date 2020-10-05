import React from "react";
import "../styles/styles.css";
import Foto2 from "../images/wallpaper-2.png";

class Footer1 extends React.Component {
  render() {
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
                  <a className="texto_1" href={this.props.href1}>
                    {this.props.btn1}
                  </a>
                </button>
              </div>
              <div className="col"></div>
              <div className="col">
                <button type="submit" className="btn" id="button_2">
                  <a className="texto_1" href={this.props.href2}>
                   {this.props.btn2}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer1;
