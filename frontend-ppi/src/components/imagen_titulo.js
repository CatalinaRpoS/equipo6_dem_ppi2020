import React from 'react';
import '../styles/styles.css';

class ImagenTitulo extends React.Component{
  render(){
    return(
      <div>
        <div className="cont-imagen" style={{ backgroundImage: `url(${this.props.imagen})` }}>
         <br/>
         <div className="container-fluid">
         <p className="texto_arriba text-center font-weight-bold">{this.props.texto}</p>
         <br/>
         <p className="texto_abajo text-center">{this.props.texto2}</p>
        <br/> 
         </div>
        </div>
      </div>
    );
  }
}

export default ImagenTitulo;