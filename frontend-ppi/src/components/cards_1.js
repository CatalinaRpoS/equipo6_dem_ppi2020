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
             <div>
               <hr/>
              <p className="card-text">{dato.texto}</p>
               <hr/>
              </div>
            )}
          <br/>
          </div>
        </div>

      </div>
    );
  }
}

export default Cards1;