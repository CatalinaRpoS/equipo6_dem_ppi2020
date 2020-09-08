import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bienvenida from '../pages/Bienvenida';
import Registrarse from '../pages/Registrarse';
import IniciarSesion from '../pages/IniciarSesion';
import OlvidasteContraseña from '../pages/OlvidasteContraseña';
import ConfiguraContraseña from '../pages/ConfiguraContraseña';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Bienvenida}/>
      <Route exact path="/registro" component={Registrarse}/>
      <Route exact path="/iniciar-sesion" component={IniciarSesion}/>
      <Route exact path="/olvidaste-contraseña" component={OlvidasteContraseña}/>
      <Route exact path="/configura-contraseña" component={ConfiguraContraseña}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
