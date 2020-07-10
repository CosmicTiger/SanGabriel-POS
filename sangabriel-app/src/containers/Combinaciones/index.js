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
* @function Combinacion
**/

const Combinacion = (props) => {

    const classes = useStyles();

  return(
    <section>
        <div className="principalM">
            <div className="tituloC">
                <p>Nuevas combinaciones de cemento y Gipsum</p>
            </div>
            <div className="textoM">
                <p>
                Una manera muy práctica y rápida para construir paredes en cualquier ambiente es 
                el gypsum, especialmente para culminar acabados interiores. Esto no es por arte de magia, 
                sino por obra de la tecnología de la construcción que tiene también el fin de alivianar 
                la carga muerta de una obra.
                </p>
            </div>
            <div className={classes.root}>
                <Button variant="contained" color="primary" href="#">Leer Más</Button>
                <p>Publicado 01/01/2020</p>
            </div>
        </div>
        <div className="imagenC">
            <img className="imgC" src={require('../../assets/Building.png')} alt=""/>
        </div>
    </section>
   )

 }

export default Combinacion