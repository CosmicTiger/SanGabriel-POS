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
function createData(id, date, name, Cedula, direccion, Correo) {
    return { id, date, name, Cedula, direccion, Correo };
}

const rows = [
    createData(0, '5 Jul, 2019', 'brianscespedes', '001-011099-1014Y', 'Semaforos de Villa Progreso 2 cuadras arriba', 'brianscespedes@gmail.com'),
    createData(1, '6 Jul, 2019', 'Luisangelmarcia', '001-270799-2510L', 'Semaforos de Villa Progreso 2 cuadras arriba', 'Luisangelmarcia@gmail.com'),
    createData(2, '7 Jul, 2019', 'JerryFrancisco', '001-151287-1438J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'JerryFrancisco'),
    createData(3, '7 Jul, 2019', 'John_Canales124', '001-301097-1112J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'JerryFrancisco@hotmail.com'),
    createData(4, '7 Jul, 2019', 'Nashua_A_Ortega47', '001-050500-2534N', 'Semaforos de Villa Progreso 2 cuadras arriba', 'Nashua_A_Ortega47@outlook.com'),
    createData(4, '12 Jul, 2019', 'JuanfranciscoXSJ', '001-030496-1234J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'JuanfranciscoXSJ@gmail.com'),
    createData(4, '15 Jul, 2019', 'MichaelSoto14O', '001-150496-1245J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'MichaelSoto14O@yahoo.com'),
    createData(4, '15 Jul, 2019', 'Chamorro_Rene4647', '001-230496-4134J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'Chamorro_Rene4647@hotmail.com'),
    createData(4, '15 Jul, 2019', 'Hernandez_Ortiz', '001-220496-1034J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'Hernandez_Ortiz@gmail.com'),
    createData(4, '18 Jul, 2019', 'nmnmn1475', '001-030496-0814J', 'Semaforos de Villa Progreso 2 cuadras arriba', 'nmnmn1475@outlook.com'),
    createData(4, '18 Jul, 2019', 'Thomska01', '001-040496-1634J' ,'Semaforos de Villa Progreso 2 cuadras arriba', 'Thomska01@gmail.com'),
    createData(4, '18 Jul, 2019', 'Migor_Alfa', '001-110496-1234J', 'Semaforos de Villa Progreso 2 cuadras arriba','Migor_Alfa@gmail.com'),
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


export default function Clientes1() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Clientes</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha de Creación</TableCell>
                        <TableCell>Nombre de Usuario</TableCell>
                        <TableCell>Cedula</TableCell>
                        <TableCell>Dirección</TableCell>
                        <TableCell align="right">Correo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.Cedula}</TableCell>
                            <TableCell>{row.direccion}</TableCell>
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
            <Button variant="contained" color="primary" size="small" className={classes.Agregar} href="agregar">
                Agregar
            </Button>

            <Button variant="contained" color="primary" size="small" className={classes.Eliminar} href="">
                Eliminar
            </Button>
            
        </div>
        </React.Fragment>
    );
}