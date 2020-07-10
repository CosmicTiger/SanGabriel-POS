import React from 'react';
import "./style.css";

/**
* @author
* @function Somos
**/

const Somos = (props) => {
  return(
    <section className="QuienesSomos">
        <div className="ParrafoIzq">
            <h3 className="somosh3">¿Quiénes somos?</h3>
            <p>Ferretería San Gabriel comenzó como una pequeña idea de ventas de productos 
                minorístas de ferretería. Gracias al arduo esfuerzo de nuestros primeros 
                colaboradores es que logramos una expansión significativa hasta lo que somos 
                ahora. Orgullosamente sirviendo a todo público desde todas nuestras sucursales 
                con productos y atención de calidad para todos.</p>
            <p>Desde nuestro primer día hasta la actualidad hemos recibido incontables visitas 
                desde clientes que nos visitan de la comodidad de su casa, hasta instituciones y 
                empresas de construcción.</p>
        </div>
        <div className="ParrafoDer">
            <p>Como familia que somos en Ferretería San Gabriel queremos dar las gracias a todos 
                quienes nos apoyaron desde los inicios, los momentos más difíciles y en las crísis 
                pasadas por el país, es un gusto llevarles siempre los mejores productos a los 
                mejores precios con la mejor calidad posible. ¡Muchas gracias!</p>
        </div>
    </section>
   )

 }

export default Somos