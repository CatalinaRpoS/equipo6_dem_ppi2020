import React from 'react';
import '../styles/styles.css';

class ImagenTitulo extends React.Component{
  render(){
    return(
      <div>
        <div className="cont-imagen">
          <img src={this.props.imagen} className="imagen img-fluid img-responsive" alt=""/>
         <div className="texto_arriba font-weight-bold">{this.props.texto}</div>
         <div className="texto_abajo">{this.props.texto2}</div>
        </div>
      </div>
    );
  }
}

export default ImagenTitulo;