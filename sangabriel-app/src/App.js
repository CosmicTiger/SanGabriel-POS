import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Index from "./views/Index";
import IniciarSesion from "./views/Login";
import RegistroUsuario from "./views/Register";
import Dashboard from "./views/Admin";
import Checkout from "./views/Checkout";

function App() {
  return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={IniciarSesion} />
        <Route path="/suscription" component={RegistroUsuario} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/checkout" component={Checkout} />
      </Router>
    );
}

export default App;
