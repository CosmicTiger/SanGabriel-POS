import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = () => {
    return (
        <Typography variant="body2" style={{color:  "blue" }} align="center">
            Desarrollado por
            {' '}
            <Link color="inherit" href="#" style={{ color: "white" }}>
                ENP Productions
            </Link> {' '}
            {'@'}
            {new Date().getFullYear()}
            <Link color="inherit" href="#" style={{ color: "white" }}>
                Ferretería San Gabriel.
            </Link>
            {' '}
            Todos los Derechos Reservados.
        </Typography>
    );
}

export default Copyright;