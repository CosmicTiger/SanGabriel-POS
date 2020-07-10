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
function createData(id, date, name, Precio, Cantidad, Color) {
    return { id, date, name, Precio, Cantidad, Color };
}

const rows = [
    createData(0, '5 Jul, 2019', 'Anticorrosivo Lanco', '25', '400', 'Gris'),
    createData(1, '6 Jul, 2019', 'Cemento Holcim Fuerte Gris', '35', '500', 'Natural'),
    createData(2, '7 Jul, 2019', 'Bloque de hormigón', '45', '1000', 'Blanco'),
    createData(3, '7 Jul, 2019', 'Arena de construcción', '21', '350 libras', 'Gris'),
    createData(4, '7 Jul, 2019', 'Perlin 2*8 x 1.8mm Galvanizado', '95', '700', 'Cromo'),
    createData(4, '12 Jul, 2019', 'Anticorrosivo Lanco', '12', '30', 'Blanco'),
    createData(4, '15 Jul, 2019', 'Lámina de Zinc Galvanizado', '18', '170', 'Gris'),
    createData(4, '15 Jul, 2019', 'Brocha Pintura URO 5/8', '14', '25', 'Rojas'),
    createData(4, '15 Jul, 2019', 'Tubo Sanitario 75mm x 3m PVC', '16', '40', 'Blanco Hueso'),
    createData(4, '18 Jul, 2019', 'Lavandero Sencillo de concreto', '15', '10', 'Sin Color'),
    createData(4, '18 Jul, 2019', 'Marco Profesional para pintar "9" ACE', '15', '8', 'Cafe'),
    createData(4, '18 Jul, 2019', 'Bandeja para pintar plástica negra standar', '320', '20','Azul'),
    createData(4, '22 Jul, 2019', 'Llave para ducha', '15', '12', 'Celeste Oscuro'),
    createData(4, '22 Jul, 2019', 'Puntura Sur Satinada 3100', '15', '10', 'Verde'),
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


export default function Ordenes1() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Órdenes Recientes</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell align="right">Color</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.Precio}</TableCell>
                            <TableCell>{row.Cantidad}</TableCell>
                            <TableCell align="right">{row.Color}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver más órdenes
                </Link>
            </div>

            <div className={classes.Contenedor} >
            <Button variant="contained" color="primary" size="small" className={classes.Agregar} href="/agregar-Ordenes">
                Agregar
            </Button>

            <Button variant="contained" color="primary" size="small" className={classes.Eliminar} href="">
                Eliminar
            </Button>
            
        </div>

        </React.Fragment>
    );
}