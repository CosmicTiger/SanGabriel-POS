import React from 'react';
import './style.css';
import WhatsApp from '../../containers/Whatsapp';
import Membership from '../../containers/Membresia';
import Interior from '../../containers/Interiores';
import Combinacion from '../../containers/Combinaciones';

/**
* @author
* @function Novedades
**/

const Novedades = (props) => {
  return(
    <div className="parent">
      <div className="barraA">x</div>
      <WhatsApp/>
      <div className="barraB">x</div>
      <Membership/>
      <div className="barraB">x</div>
      <Interior/>
      <div className="barraB">x</div>
      <Combinacion/>
    </div>
    
   )

 }

export default Novedades