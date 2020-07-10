import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Index from "./views/Index";
import IniciarSesion from "./views/Login";
import RegistroUsuario from "./views/Register";
import Dashboard from "./views/Admin";
import Checkout from "./views/Checkout";
import Ordenes from "./views/Admin/Ordenes";
import Clientes from "./views/Admin/Clientes";
import Inventario from "./views/Admin/Inventario";
import Reportes from "./views/Admin/Reportes";
import Usuarios from "./views/Admin/Usuarios";
import Agregar from "./components/Agregar/Agregar";
import AgregarUsuario from "./components/Agregar/AgregarUsuario"
import AgregarOrdenes from "./components/Agregar/AgregarOrdenes"


function App() {
  return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={IniciarSesion} />
        <Route path="/suscription" component={RegistroUsuario} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/admin-ordenes" component={Ordenes} />
        <Route path="/checkout" component={Checkout} />

        <Route path="/admin-Clientes" component={Clientes} />
        <Route path="/admin-Inventario" component={Inventario} />
        <Route path="/admin-Reportes" component={Reportes} />
        <Route path="/admin-Usuarios" component={Usuarios} />


        <Route path="/agregar" component={Agregar} />
        <Route path="/agregar-Usuario" component={AgregarUsuario} />
        <Route path="/agregar-Ordenes" component={AgregarOrdenes} />
      </Router>
    );
}

export default App;
