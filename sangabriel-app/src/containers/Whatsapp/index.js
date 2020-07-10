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
* @function WhatsApp
**/

const WhatsApp = (props) => {
    
  const classes = useStyles();
  
  return(
    <section>
        <div className="imagen">
            <img className="imgW" src={require('../../assets/WhatsAppLogo.png')} alt=""/>
        </div>
        <div className="principal">
            <div className="titulo">
                <p>¿Tiene nuestro WhatsApp?</p>
            </div>
            <div className="texto">
                <p>
                Ahora puede contactarnos de manera más fácil a través de nuestro whatsapp, respondemos
                de inmediato a todas las consultas que tengan. Una nueva manera de de tener contacto
                con nuestros apreciados clientes. 
                Horario de atención Lunes a Domingo 9:00 am a 5:00 pm
                </p>
            </div>
            <div className={classes.root}>
                <Button variant="contained" color="primary" href="tel:+50583623789">+505 83623789</Button>
            </div>
        </div>
    </section>
   )

 }

export default WhatsApp