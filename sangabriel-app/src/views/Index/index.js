import React from 'react';
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUs from '../QuienesSomos';

const Index = () => {
    return(
        <div>
            <Header />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Index;
