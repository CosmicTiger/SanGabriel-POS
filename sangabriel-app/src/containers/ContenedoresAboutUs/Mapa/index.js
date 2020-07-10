import React from 'react';
import "./style.css";

/**
* @author
* @function Mapa
**/

const Mapa = (props) => {
  return(
    <div className="mapa">
        <h3 className="mapah3">¡Ven y visítanos!</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15606.416141900143!2d-86.2169745!3d12.0707422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x610afe5d6406b1be!2sMateriales%20de%20Construcci%C3%B3n%20San%20Gabriel!5e0!3m2!1ses-419!2sni!4v1594317964546!5m2!1ses-419!2sni" width="100%" height="400" frameborder="0" styles="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
   )

 }

export default Mapa