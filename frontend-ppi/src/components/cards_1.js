import React from 'react';

class Cards1 extends React.Component{
  render(){
    const {Data}= this.props;
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <br/>
          {Data.map(dato=>
             <div className="card">
             <div className="card-body">
              <p className="card-text">{dato.texto}</p>
              </div>
             </div>)}
          <br/>
          </div>
        </div>

      </div>
    );
  }
}

export default Cards1;