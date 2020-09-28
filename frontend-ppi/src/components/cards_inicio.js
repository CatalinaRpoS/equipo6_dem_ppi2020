import React from 'react';

class CardsInicio extends React.Component{
render(){
  return(
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="border rounded media position-relative">
            <img className="estiloIMG rounded mr-3" src="..." alt="..."/>
              <div className="media-body">
                <p className="estiloParrafo text-body">gue felis in faucibus.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
export default CardsInicio;