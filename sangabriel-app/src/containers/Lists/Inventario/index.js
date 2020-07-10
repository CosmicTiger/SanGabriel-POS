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

// Generate Order Data
function createData(id, date, name, Precio_compra, existencias, proveedores) {
    return { id, date, name, Precio_compra, existencias, proveedores };
}

const rows = [
    createData(0, '5 Jul, 2019', 'Anticorrosivo Lanco', '25', '400', 'Lanco'),
    createData(1, '6 Jul, 2019', 'Cemento Holcim Fuerte Gris', '35', '500', 'Fetex'),
    createData(2, '7 Jul, 2019', 'Bloque de hormigón', '45', '1000', 'Horgimgon S.A'),
    createData(3, '7 Jul, 2019', 'Arena de construcción', '21', '350 libras', 'Arenin'),
    createData(4, '7 Jul, 2019', 'Perlin 2*8 x 1.8mm Galvanizado', '95', '700', 'Perlonsa'),
    createData(4, '12 Jul, 2019', 'Anticorrosivo Lanco', '12', '30', 'Lanco'),
    createData(4, '15 Jul, 2019', 'Lámina de Zinc Galvanizado', '18', '170', 'Galvanizados Ricardo'),
    createData(4, '15 Jul, 2019', 'Brocha Pintura URO 5/8', '14', '25', 'Lanco'),
    createData(4, '15 Jul, 2019', 'Tubo Sanitario 75mm x 3m PVC', '16', '40', 'Comex'),
    createData(4, '18 Jul, 2019', 'Lavandero Sencillo de concreto', '15', '10', 'Comex'),
    createData(4, '18 Jul, 2019', 'Marco Profesional para pintar "9" ACE', '15', '8', 'Lanco'),
    createData(4, '18 Jul, 2019', 'Bandeja para pintar plástica negra standar', '320', '20','Lanco'),
    createData(4, '22 Jul, 2019', 'Llave para ducha', '15', '12', 'Comex'),
    createData(4, '22 Jul, 2019', 'Puntura Sur Satinada 3100', '15', '10', 'Sur'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },

    Contenedor:{
        display: 'flex' ,
        marginLeft: '80%'
    },

    Agregar: {
        width:'100px' ,
        background:'blue' ,
       
    },

    Eliminar:{
        width:'100px',
        background:'black',
        marginLeft: '10px',
    },

    
}));

export default function Inventario1() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Inventario General</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha de Ingreso del Producto</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Precio de Compra</TableCell>
                        <TableCell>Unidades Existentes</TableCell>
                        <TableCell align="right">Proveedores</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.Precio_compra}</TableCell>
                            <TableCell>{row.existencias}</TableCell>
                            <TableCell align="right">{row.proveedores}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver más productos del Inventario
                </Link>
            </div>
    
        </React.Fragment>

        
    );
}