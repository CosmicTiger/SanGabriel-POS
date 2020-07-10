import React from 'react';
import './style.css';

/**
* @author
* @function LogoInicio
**/

const LogoInicio = (props) => {
  return(
    <section className="seccionImagen">
        <img className="imgF" src={require('../../../assets/Ferreteria.png')} alt=""/>
    </section>
   )

 }

export default LogoInicio