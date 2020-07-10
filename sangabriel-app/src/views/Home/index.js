import React from 'react';
import './style.css';
import {Header} from "../../components/Header";
import Footer from "../../components/Footer";
import {LogoInicio} from "../../containers/ContenedoresInicio/FotoEmpresa";
import ProductosIni from "../../containers/ContenedoresInicio/ProductosInicio";

const Home = () => { 
    return(
        <div>
            <Header />
            <div>
                <LogoInicio/>
            </div>
            <div className="barraB">x</div>
            <ProductosIni/>
            <Footer />
        </div>
    );
}

export default Home;
