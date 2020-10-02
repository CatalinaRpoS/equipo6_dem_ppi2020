import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bienvenida from "../pages/Bienvenida";
import Registrarse from "../pages/Registrarse";
import IniciarSesion from "../pages/IniciarSesion";
import OlvidasteContraseña from "../pages/OlvidasteContraseña";
import ConfiguraContraseña from "../pages/ConfiguraCont";
import ContinuarSinCuenta from "../pages/ContinuarSinCuenta";
import SoporteTecnico1 from "../pages/SoporteTecnico1";
import Inicio from "../pages/Inicio";
import FamiliaVivienda from "../pages/FamiliaVivienda";
import Electrodomesticos from "../pages/Electrodomesticos";
import FamiliaVivienda2 from "../pages/FamiliaVivienda2";
import SoporteTecnico2 from "../pages/SoporteTecnico2";
import ConsumoEnergia from "../pages/ConsumoEnergia";
import Ajustes from "../pages/Ajustes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Bienvenida} />
        <Route exact path="/registro" component={Registrarse} />
        <Route exact path="/iniciar-sesion" component={IniciarSesion} />
        <Route
          exact
          path="/olvidaste-contraseña"
          component={OlvidasteContraseña}
        />
        <Route
          exact
          path="/configura-contraseña"
          component={ConfiguraContraseña}
        />
        <Route
          exact
          path="/continuar-sin-cuenta"
          component={ContinuarSinCuenta}
        />
        <Route exact path="/soporte-tecnico-1" component={SoporteTecnico1} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/familia-y-vivienda" component={FamiliaVivienda} />
        <Route exact path="/electrodomesticos" component={Electrodomesticos} />
        <Route
          exact
          path="/familia-y-vivienda-2"
          component={FamiliaVivienda2}
        />
        <Route exact path="/soporte-tecnico-2" component={SoporteTecnico2} />
        <Route exact path="/consumo-de-energia" component={ConsumoEnergia} />
        <Route exact path="/ajustes" component={Ajustes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
