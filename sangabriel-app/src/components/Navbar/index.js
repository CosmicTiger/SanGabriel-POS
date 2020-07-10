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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MailIcon from '@material-ui/icons/Mail';

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
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterSearchIcon: {
        padding: theme.spacing(0, 3),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'primary',
        border: '0.5px solid black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}))

export const NavbarMarket = () => {

    const classes = useStylesMarket();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-filter-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Materiales de Construcción</MenuItem>
            <MenuItem onClick={handleMenuClose}>Pinturas</MenuItem>
            <MenuItem onClick={handleMenuClose}>Accesorios para Pintar</MenuItem>
            <MenuItem onClick={handleMenuClose}>Lavanderos</MenuItem>
            <MenuItem onClick={handleMenuClose}>Grifería</MenuItem>
            <MenuItem onClick={handleMenuClose}>Cerraduras</MenuItem>
            <MenuItem onClick={handleMenuClose}>Accesorios de Baño</MenuItem>
            <MenuItem onClick={handleMenuClose}>Cerámica</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <nav className={classes.grow}>
            <AppBar position="absolute" style={{backgroundColor: "white", height: '80px'}}>
                <Toolbar variant="dense">
                    <div className={classes.root}>
                        <a href="/">
                            <img src={SanGabrielLogo} alt="San Gabriel Logo" className={classes.image}/>
                        </a>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon color="primary"/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            color="primary"
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <FilterListIcon color="primary"/>
                        </IconButton>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <IconButton>
                                <a href="/marketplace/account">
                                    <AccountCircle color="primary"/>
                                </a>
                            </IconButton>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <ShoppingCart color="primary"/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </nav>
    )
}

Navbar.propTypes = {
    sections: PropTypes.array
};
