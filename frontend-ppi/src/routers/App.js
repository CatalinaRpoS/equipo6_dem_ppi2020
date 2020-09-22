import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Bienvenida from '../pages/Bienvenida';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Bienvenida}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
