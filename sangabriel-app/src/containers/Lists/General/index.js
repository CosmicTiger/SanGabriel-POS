import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from "../../../components/Title";
import Button from '@material-ui/core/Button';


function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Jul, 2019', 'Ana Conda', 'Managua, MN', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Jul, 2019', 'Ana Lisa Meltrozo', 'Diriamba, CZ', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Jul, 2019', 'Rasp Scholz', 'Masaya, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Jul, 2019', 'Ecma Six', 'La Paz Centro, MN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Jul, 2019', 'Bruce Springsteen', 'Corn Island, CA', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Órdenes Recientes</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Envío hacia</TableCell>
                        <TableCell>Método de Pago</TableCell>
                        <TableCell align="right">Cantidad de Venta</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver más órdenes
                </Link>
            </div>
        
        </React.Fragment>

        
    );
}