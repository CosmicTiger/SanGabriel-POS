import React from 'react';
import './style.css';
import LogoInicio from '../ContenedoresInicio/FotoEmpresa';
import ProductosIni from '../ContenedoresInicio/ProductosInicio';

const Home = () => { 
    return(
        <div>
            <LogoInicio/>
            <div className="barraB">x</div>
            <ProductosIni/>
        </div>
    );
}

export default Home;
