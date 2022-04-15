import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
import UsuariosPage from '../pages/usuarios'

export default function Routes() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" element={<UsuariosPage />} />
      </Switch>
      <FooterComponent />
    </BrowserRouter>
  )
}