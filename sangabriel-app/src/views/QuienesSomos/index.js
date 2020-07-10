import React from 'react';
import './style.css';
import Entregando from '../../containers/ContenedoresAboutUs/Entregando';
import Somos from '../../containers/ContenedoresAboutUs/Somos';
import MisionVision from '../../containers/ContenedoresAboutUs/MisionVision';
import NuestrosValores from '../../containers/ContenedoresAboutUs/NuestrosValores';
import Mapa from '../../containers/ContenedoresAboutUs/Mapa';

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
  return(
    <div>
        <Entregando/>
        <Somos/>
        <MisionVision/>
        <NuestrosValores/>
        <Mapa/>
    </div>
   )

 }

export default AboutUs