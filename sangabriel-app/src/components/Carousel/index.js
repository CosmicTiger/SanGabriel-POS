import React, {Component} from 'react'
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



/**
* @author
* @function Carousel
**/

class Carousel extends Component {
    render() {
      const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides",
      };
      return (
        <div className="carouselFotos">
          <Slider {...settings}>
            <div>
                <img width="100%" src={require('../../assets/Rectangulo1.png')} alt=""/>
            </div>
            <div>
                <img width="100%" src={require('../../assets/Rectangulo2.png')} alt=""/>
            </div>
            <div>
                <img width="100%" src={require('../../assets/Rectangulo3.png')} alt=""/>
            </div>
          </Slider>
        </div>
      );
    }
  }
  
export default Carousel