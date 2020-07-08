import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
    { name: 'Producto 1', desc: 'A nice thing', price: 'C$9.99' },
    { name: 'Producto 2', desc: 'Another thing', price: 'C$3.45' },
    { name: 'Producto 3', desc: 'Something else', price: 'C$6.51' },
    { name: 'Producto 4', desc: 'Best thing of all', price: 'C$14.11' },
    { name: 'Envío a', desc: '', price: 'Gratis' },
];
const addresses = ['De la Foto Técnica 325 mts N. M/I', 'Bo. Bertha Díaz', 'Managua', '99999', 'Managua'];
const payments = [
    { name: 'Tipo de Tarjeta', detail: 'Visa' },
    { name: 'Propietario', detail: 'Mr John Smith' },
    { name: 'Número', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Fecha de Expiración', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Resúmen de órden
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        C$34.06
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Envío
                    </Typography>
                    <Typography gutterBottom>Ana Lisa Meltrozo Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Detalles de Pago
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}