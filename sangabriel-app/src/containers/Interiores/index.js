import React from 'react';
import './style.css';
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
/**
* @author
* @function Interior
**/

const Interior = (props) => {

    const classes = useStyles();


  return(
    <section>
        <div className="imagen">
            <img className="imgCocina" src={require('../../assets/areacocina.png')} alt=""/>
        </div>
        <div className="principal">
            <div className="tituloI">
                <p>Nuevos tipos de cerámica para interiores de cocina</p>
            </div>
            <div className="texto">
                <p>¿Quiéres tener la cocina más hermosa de tu familia? 
                  Tenemos NUEVAS asombrosas opciones para la decoración de tu cocina, 
                  ¡Echales un ojo!.
                </p>
            </div>
            <div className={classes.root}>
                <Button variant="contained" color="primary" href="#">Leer Más</Button>
                <p>Publicado 01/01/2020</p>
            </div>
        </div>
    </section>
   )

 }

export default Interior