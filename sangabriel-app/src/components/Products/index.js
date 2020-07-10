import React, {useContext, useState} from "react";
import ceramica from "../../assets/Ceramicas.png";
import pintura from "../../assets/Pintura.png";
import tuberias from "../../assets/tuberias.png";
import cemento from "../../assets/General/Página 1/Cemento Holcim Fuerte Gris.png";
import perlin from "../../assets/General/Página 1/Perlin 2x8 x 1.8mm Galvanizado.png";
import bloqueHormigon from "../../assets/General/Página 1/Bloque de hormigón.png";


const products = {
    {id: 1, name: 'Ceramica', price: 300, image: ceramica, status: 'Reciente'},
    {id: 2, name: 'Pintura', price: 300, image: pintura, status: 'Top'},
    {id: 3, name: 'Tuberias', price: 300, image: tuberias, status: 'Reciente'},
    {id: 4, name: 'Cemento', price: 300, image: cemento, status: 'Top'},
    {id: 5, name: 'Perlin', price: 300, image: perlin, status: 'Reciente'},
    {id: 6, name: 'bloqueHormigon', price: 300, image: bloqueHormigon, status: 'Top'},
}

const Products = () => {

    return(
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt="no se encuentra" />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <div className="product-price">
                            {product.price}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products;
