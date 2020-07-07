import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Index from "./views/Index";
import IniciarSesion from "./views/Login";

function App() {
  return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={IniciarSesion} />
      </Router>
    );
}

export default App;
