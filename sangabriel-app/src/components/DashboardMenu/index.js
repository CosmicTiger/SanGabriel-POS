import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


export const mainListItems = (
    <div>
        <ListItem button component={Link} to={"/admin"}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio"/>
        </ListItem>

        <ListItem button component={Link} to={"/admin-ordenes"}>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>

            <ListItemText primary="Ordenes de Compra">
            <ListItemText>
                <a href="/admin-ordenes"></a>
            </ListItemText>
            </ListItemText>
        </ListItem>

        <ListItem button component={Link} to={"/admin-Clientes"}> 
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            
            <ListItemText primary="Clientes">
            
            </ListItemText>
            
            
            
        </ListItem>


        <ListItem button component={Link} to={"/admin-Usuarios"}>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            
            <ListItemText primary="Usuarios">       
            </ListItemText>
        </ListItem>


        <ListItem button component={Link} to={"/admin-Reportes"}>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reportes">
            </ListItemText>
        </ListItem>


        <ListItem button component={Link} to={"/admin-Inventario"}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>

            <ListItemText primary="Inventarios">
            
            </ListItemText>
        </ListItem>
    </div>
);