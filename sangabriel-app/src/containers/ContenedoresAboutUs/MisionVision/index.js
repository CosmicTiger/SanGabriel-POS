import React from 'react';
import "./style.css";

/**
* @author
* @function MisionVision
**/

const MisionVision = (props) => {
  return(
      <div className="Principal">
          <div className="Mision">
            <h2 className="misvish2">Misión</h2>
            <p className="parrafo">Ferretería San Gabriel es una empresa distribuidora de productos 
                ferreteros y materiales de construcción dirigidos a satisfacer 
                las necesidades de nuestros clientes a través de un servido rápido 
                y de calidad, con precios accesibles y con un personal calificado.</p>
          </div>
          <div className="Vision">
            <h2 className="misvish2">Visión</h2>
            <p className="parrafo">Ser importadores directos de productos ferreteros para establecer una 
                línea de distribución mayorista y expandirnos a nuevos puntos del país, 
                con el fin de ofrecer precios aún más accesibles a todo público, 
                conservando nuestros valores de atención y calidad en el servicio a 
                nuestros dientes.</p>
          </div>
      </div>
   )

 }

export default MisionVision