import React from 'react';
import "./style.css";
import Icon from '@material-ui/core/Icon';
import {orange} from '@material-ui/core/colors';
import {blue} from '@material-ui/core/colors';


/**
* @author
* @function NuestrosValores
**/

const NuestrosValores = (props) => {
    return(
      <section className="Nuestrosvals">
          <div className="valores">
              <div className="intro">
                  <h2 className="valoresh3">Nuestros valores</h2>
                  <h3>¡Es la confianza de nuestros clientes!</h3>
              </div>
              <div className="vals">
                  <p><Icon className="fas fa-people-carry" style={{ color: blue[900],
                fontSize: 30, borderRadius: 80, backgroundColor: orange[500]}}/>  Liderazgo</p>
                  <p><Icon className="far fa-heart" style={{ color: blue[900],
                fontSize: 30, borderRadius: 80, backgroundColor: orange[500]}}/>  Lealtad</p>
                  <p><Icon className="far fa-star" style={{ color: blue[900],
                fontSize: 30, borderRadius: 80, backgroundColor: orange[500]}}/>  Honestidad</p>
                  <p><Icon className="fas fa-balance-scale" style={{ color: blue[900],
                fontSize: 30, borderRadius: 80, backgroundColor: orange[500]}}/>  Integridad</p>
                  <p><Icon className="far fa-handshake" style={{ color: blue[900],
                fontSize: 30, borderRadius: 80, backgroundColor:orange[500]}}/>  Compromiso</p>
              </div>
          </div>
          <div className="imagenvalores">
              <img src={require('../../../assets/Nuestros valores.png')} className="imgvals"></img>
          </div>
      </section>
     )
  
   }
  
  export default NuestrosValores
