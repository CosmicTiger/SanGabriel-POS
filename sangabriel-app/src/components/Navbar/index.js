import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    customButton: {
        backgroundColor: "red",
    }
}));

/**
* @author Joker_lotusZero
* @function Navbar
**/
const Navbar = (props) => {

    const classes = useStyles();

    const {sections} = props;

    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
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
            <Button variant="contained" size="small" color="secondary" className={classes.customButton}>
                Acceder
            </Button>
        </Toolbar>
    );
}

Navbar.propTypes = {
    sections: PropTypes.array
};

export default Navbar