import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author Joker_lotusZero
* @function Logo
**/
const Logo = (props) => {
    return (
        <div>
            <a href="#">
                <img src={require("../../assets/LogoSanGabriel.png")} width="200" height="80" alt="Logo San Gabriel"/>
            </a>
        </div>
    );
}

export default Logo