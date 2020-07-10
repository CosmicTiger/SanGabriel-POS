import React, {createContext, useState} from "react";
import ceramica from "../assets/Ceramicas.png"
import pintura from "../assets/Pintura.png"
import tuberias from "../assets/tuberias.png"
import cemento from "../assets/General/Página 1/Cemento Holcim Fuerte Gris.png"
import perlin from "../assets/General/Página 1/Perlin 2x8 x 1.8mm Galvanizado.png"
import bloqueHormigon from "../assets/General/Página 1/Bloque de hormigón.png"

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {



    return(
        <ProductContextProvider value={{products: [ ...products]}}>
            {props.children}
        </ProductContextProvider>
    )
}

export default ProductContextProvider;