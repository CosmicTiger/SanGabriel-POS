import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Carousel from '../../../components/Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

/**
* @author
* @function ProductosIni
**/

const ProductosIni = (props) => {

    const classes = useStyles();


  return(
    <section className="sectionTarjetas">
        <div className="contenedorCeramica">
            <img className="imgT" src={require('../../../assets/Ceramicas.png')} alt=""/>
            <p className="pNombre">Cerámica</p>
            <Button className="botonV" variant="contained" color="secondary">Ver Más</Button>
        </div>
        <div className="contenedorFontaneria">
            <img className="imgT" src={require('../../../assets/tuberias.png')} alt=""/>
            <p className="pNombre">Fontanería</p>
            <Button className="botonV" variant="contained" color="secondary">Ver Más</Button>
        </div>
        <div className="contenedorInteriores">
            <img className="imgT" src={require('../../../assets/Pinturas.png')} alt=""/>
            <p className="pNombre">Diseños de interiores</p>
            <Button className="botonV" variant="contained" color="secondary">Ver Más</Button>
        </div>
        <div className="contenedorMateriales">
            <img className="imgT" src={require('../../../assets/Construccion.png')} alt=""/>
            <p className="pNombre">Materiales de Construcción</p>
            <Button className="botonV" variant="contained" color="secondary">Ver Más</Button>
        </div>
        <div className="contenedorPintura">
            <img className="imgT" src={require('../../../assets/Pintura.png')} alt=""/>
            <p className="pNombre">Pintura</p>
            <Button className="botonV" variant="contained" color="secondary">Leer Más</Button>
        </div>
        <div className="contenedorMaquinaria">
            <img className="imgT" src={require('../../../assets/maquinas.png')} alt=""/>
            <p className="pNombre">Maquinaria</p>
            <Button className="botonV" variant="contained" color="secondary">Ver Más</Button>
        </div>
        <div className="carrusel">
            <Carousel/>
        </div>
    </section>
   )

 }

export default ProductosIni