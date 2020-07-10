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
function createData(id, date, name, Rol, Permisos, Correo) {
    return { id, date, name, Rol, Permisos, Correo };
}

const rows = [
    createData(0, '5 Jul, 2019', 'brianscespedes', 'Contador', 'Administrador', 'brianscespedes@gmail.com'),
    createData(1, '6 Jul, 2019', 'Luisangelmarcia', 'Gerente', 'Administrador', 'Luisangelmarcia@gmail.com'),
    createData(2, '7 Jul, 2019', 'JerryFrancisco', 'Cliente', 'Cliente', 'JerryFrancisco'),
    createData(3, '7 Jul, 2019', 'John_Canales124', 'Cliente', 'Cliente', 'JerryFrancisco@hotmail.com'),
    createData(4, '7 Jul, 2019', 'Nashua_A_Ortega47', 'Cliente', 'Cliente', 'Nashua_A_Ortega47@outlook.com'),
    createData(4, '12 Jul, 2019', 'JuanfranciscoXSJ', 'Cliente', 'Cliente', 'JuanfranciscoXSJ@gmail.com'),
    createData(4, '15 Jul, 2019', 'MichaelSoto14O', 'Cliente', 'Cliente', 'MichaelSoto14O@yahoo.com'),
    createData(4, '15 Jul, 2019', 'Chamorro_Rene4647', 'Cliente', 'Cliente', 'Chamorro_Rene4647@hotmail.com'),
    createData(4, '15 Jul, 2019', 'Hernandez_Ortiz', 'Cliente', 'Cliente', 'Hernandez_Ortiz@gmail.com'),
    createData(4, '18 Jul, 2019', 'nmnmn1475', 'Cajero', 'Usuario', 'nmnmn1475@outlook.com'),
    createData(4, '18 Jul, 2019', 'Thomska01', 'Encargado de Bodega' ,'Usuario', 'Thomska01@gmail.com'),
    createData(4, '18 Jul, 2019', 'Migor_Alfa', 'Financiero', 'Usuario','Migor_Alfa@gmail.com'),
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


export default function Usuarios1() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Usuarios</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha de Creación</TableCell>
                        <TableCell>Nombre de Usuario</TableCell>
                        <TableCell>Puesto</TableCell>
                        <TableCell>Permisos</TableCell>
                        <TableCell align="right">Correo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.Rol}</TableCell>
                            <TableCell>{row.Permisos}</TableCell>
                            <TableCell align="right">{row.Correo}</TableCell>
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
                
                <Button variant="contained" color="primary" size="small" className={classes.Agregar} href="/agregar-Usuario">
                    Agregar
                </Button>

                <Button variant="contained" color="primary" size="small" className={classes.Eliminar} href="">
                    Eliminar
                </Button>
            
            </div>
        </React.Fragment>
    );
}