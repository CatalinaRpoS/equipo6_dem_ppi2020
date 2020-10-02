import React from "react";

class ConsumoPromedio extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <p className="card-text font-weight-bold">MENSUAL</p>
                  <h5 className="card-title" id="card_1">
                    120 Kwh
                  </h5>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text font-weight-bold">DIARIO</p>
                  <h5 className="card-title" id="card_2">
                    4 Kwh
                  </h5>
                  <p className="card-text text-muted">
                    Last updated 3 mins ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsumoPromedio;
