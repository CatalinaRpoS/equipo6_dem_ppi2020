import React from "react";

class Cards2 extends React.Component {
  render() {
    const { Data3 } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br />
            {Data3.map((dato) => (
              <div class="alert alert-warning card-text" role="alert">
                <img src={dato.icono} alt="Icono_estrategia" />
                {dato.estrategia}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards2;
