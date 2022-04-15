import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import UsuariosPage from '../pages/usuarios'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<UsuariosPage />} />
      </Switch>
    </BrowserRouter>
  )
}