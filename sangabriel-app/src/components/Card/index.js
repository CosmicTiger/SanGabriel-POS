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
                C$3,024.00
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