import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export const  Deposits = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Ingresos Recientes</Title>
            <Typography component="p" variant="h4">
                C$30,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                en 16 Julio, 2020
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver balance
                </Link>
            </div>
        </React.Fragment>
    );
}

export const  Deposits2 = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Costos</Title>
            <Typography component="p" variant="h4">
                C$5,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                en 20 Julio, 2020
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    detalle de costos
                </Link>
            </div>
        </React.Fragment>
    );
}

export const  Deposits3 = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Cantidad de Compras en Linea</Title>
            <Typography component="p" variant="h4">
                1300
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                fin de mes 30 Junio, 2020
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    detalle de las compras
                </Link>
            </div>
        </React.Fragment>
    );
}

export const  Deposits4 = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Visitas al sitio registradas</Title>
            <Typography component="p" variant="h4">
                45,000
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                fin de mes 30 Junio, 2020
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    detalle de las visitas(tiempo)
                </Link>
            </div>
        </React.Fragment>
    );
}



/**
* @author Joker_lotusZero
* @function Card
**/
export const Card = (props) => {
    return (
        <div className="row">
            hello world
        </div>
    );
}