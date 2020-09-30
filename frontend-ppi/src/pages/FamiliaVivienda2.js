import React from 'react';
import NavbarLleno from '../components/navbar_lleno';
import ImagenTitulo from '../components/imagen_titulo';
import Casa from '../images/casa.jpg';

class FamiliaVivienda2 extends React.Component{
  render(){
    return(
      <div>
        <NavbarLleno/>
        <ImagenTitulo
          imagen={Casa}
          texto="¿NO QUIERES CREAR UNA CUENTA?"
          texto2="¡Entonces échale un vistazo a los siguientes tips de ahorro de energía!"
        />  
      </div>
    );
  }
}

export default FamiliaVivienda2;