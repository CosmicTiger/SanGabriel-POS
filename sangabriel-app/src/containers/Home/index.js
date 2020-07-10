import React from 'react';
import './style.css';
import LogoInicio from '../ContenedoresInicio/FotoEmpresa';
import ProductosIni from '../ContenedoresInicio/ProductosInicio';
import {Header} from "../../components/Header";

const Home = () => { 
    return(
        <div>
            <Header />
            <div>
                <LogoInicio/>
            </div>
            <div className="barraB">x</div>
            <ProductosIni/>
        </div>
    );
}

export default Home;
