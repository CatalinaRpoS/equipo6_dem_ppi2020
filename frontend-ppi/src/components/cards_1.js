import React from "react";

const Cards1 = (props) => {
  const { Data } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <br />
          {Data.map((dato) => (
            <div class="alert alert-warning card-text" role="alert">
              {dato.texto}
            </div>
          ))}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Cards1;
