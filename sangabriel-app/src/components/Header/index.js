import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import Navbar from '../Navbar';

/**
* @author Joker_lotusZero
* @function Header
**/

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

const sections = [
    { title: 'Inicio', url: '/' },
    { title: '¿Quiénes Somos?', url: '/about' },
    { title: 'Productos', url: '/marketplace' },
    { title: 'Novedades', url: '/news' },
];

const Header = () => {

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar sections={sections}/>
            </Container>
        </div>
    );
}

export default Header;