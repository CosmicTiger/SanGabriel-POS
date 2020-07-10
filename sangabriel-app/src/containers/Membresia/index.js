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
* @function Membership
**/

const Membership = (props) => {

    const classes = useStyles();

  return(
    <section>
        <div className="principalM">
            <div className="tituloM">
                <p>Promociones por membresía San Gabriel</p>
            </div>
            <div className="textoM">
                <p>
                  Conoce los lujosos beneficios de nuestras membresías exclusivas. Membresías nivel Plata,
                  Oro y hasta Diamante!
                </p>
            </div>
            <div className={classes.root}>
                <Button variant="contained" color="primary" href="#">Leer Más</Button>
                <p>Publicado 01/01/2020</p>
            </div>
        </div>
        <div className="imagenM">
            <img className="imgM" src={require('../../assets/HombresConstruc.png')} alt=""/>
        </div>
    </section>
   )

 }

export default Membership