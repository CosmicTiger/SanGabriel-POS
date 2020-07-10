import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from "../Copyright";
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

/**
* @author Joker_lotusZero
*
**/
const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(6, 4),
        backgroundColor: theme.palette.type === 'light' ? "blue" : theme.palette.grey[800],
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    barraA: {
        padding: theme.spacing(1,3),
        background: '#F5AF19',
        color: '#F5AF19',
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer>
            <Container maxWidth="lg" component="footer"  className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    <Grid item xs={6} md={3}>

                    </Grid>

                </Grid>
            </Container>
            <div className={classes.barraA}>
                <Copyright />
            </div>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};