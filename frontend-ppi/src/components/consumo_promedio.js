import React from "react";
import "../styles/styles.css";

const ConsumoPromedio = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card-deck">
            <div className="card text-center" id="card_tamaño">
              <img
                src="https://i.pinimg.com/564x/40/d2/49/40d24920d1aa084886bd91fb5a8a567c.jpg"
                className="card-img"
                id="card_tamaño"
                alt="..."
              />
              <div className="card-img-overlay">
                <p className="card-text font-weight-bold">MENSUAL</p>
                <h5 className="card-title font-weight-bold" id="card_1">
                  120 Kwh
                </h5>
                <p className="card-text text-muted">$24.000</p>
                <button type="button" className="btn" id="button_3">
                  <a id="button_3" href="/detalles">
                    Detalles
                  </a>
                </button>
              </div>
            </div>
            <div className="card text-center" id="card_tamaño">
              <img
                src="https://i.pinimg.com/564x/40/d2/49/40d24920d1aa084886bd91fb5a8a567c.jpg"
                className="card-img"
                id="card_tamaño"
                alt="..."
              />
              <div className="card-img-overlay">
                <p className="card-text font-weight-bold">DIARIO</p>
                <h5 className="card-title font-weight-bold" id="card_2">
                  4 Kwh
                </h5>
                <p className="card-text text-muted">$800</p>
                <button type="button" className="btn" id="button_3">
                  <a id="button_3" href="/detalles">
                    Detalles
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumoPromedio;
