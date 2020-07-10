import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, fade } from '@material-ui/core/styles';
import SanGabrielLogo from './../../assets/LogoSanGabriel.png';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import AppBar from "@material-ui/core/AppBar";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from "@material-ui/core/IconButton";
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FilterListIcon from '@material-ui/icons/FilterList';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `2px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 0,
    },
    toolbarSecondary: {
        justifyContent: 'center',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(2),
        flexShrink: 0,
    },
    customButton: {
        backgroundColor: "red",
    },
}));

/**
* @author Joker_lotusZero
* @function Navbar
**/
export const Navbar = (props) => {

    const classes = useStyles();

    const {sections} = props;

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link href="/">
                <img src={SanGabrielLogo} style={{
                    width: '10%',
                    height: '10%',
                }} alt="Logo" />
            </Link>
            {sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    className={classes.toolbarLink}
                >
                    {section.title}
                </Link>
            ))}
            <Button variant="contained" size="small" color="secondary" className={classes.customButton} href="/login">
                Acceder
            </Button>
        </Toolbar>
    );
}

const useStylesMarket = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    image: {
        width: '10%',
        height: '10%',
    },

}))

export const NavbarMarket = () => {

    const classes = useStylesMarket();

    return (
        <nav className={classes.root}>
            <AppBar position="absolute" style={{backgroundColor: "white", height: '80px'}}>
                <Toolbar variant="dense">
                    <div className={classes.root}>
                        <a href="/">
                            <img src={SanGabrielLogo} alt="San Gabriel Logo" className={classes.image}/>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

Navbar.propTypes = {
    sections: PropTypes.array
};
