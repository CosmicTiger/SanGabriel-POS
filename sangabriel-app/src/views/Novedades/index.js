import React from 'react';
import './style.css';
import WhatsApp from '../../containers/Whatsapp';
import Membership from '../../containers/Membresia';
import Interior from '../../containers/Interiores';
import Combinacion from '../../containers/Combinaciones';
import {Header} from "../../components/Header";

/**
* @author
* @function Novedades
**/

const Novedades = () => {
  return(
    <div className="parent">
        <Header />
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