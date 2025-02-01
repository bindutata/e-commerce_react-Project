import React,{useState} from 'react';
import {featuredProducts} from './productsdata';
import '../Featured Products/styles.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedProducts=()=>{
    const [activeSlide,setActiveSlide]=useState(0);
    const settings = {
        // className:"large-size",
        centerMode: true,
        infinite: true,
        centerPadding:"50px",
        slidesToShow: 5,
        slidesToScroll:1,
        autoplay:true,
        speed:1000,
        dots: true,
        beforeChange:(current,next)=>setActiveSlide(next),
  };
  return (
    <div className="slide-container">
      <h3>Featured Products</h3>  
      <Slider {...settings}>
        {featuredProducts.map((pdt,index)=>{
          //   let slideClass="";
          //   if (index===activeSlide+1){
          //     slideClass="large-size"
          //   }
          //   else if ((index===activeSlide)&&(index===activeSlide+2)){
          //     slideClass="medium-size"
          //  }
          //   else{
          //     slideClass="small-size"
          //   }
          return (<div className='image' key={pdt.id}>
                    <h5>{pdt.title}</h5> 
                    <Link to={`/product-details/${pdt.id}`}><img src={pdt.image} alt={pdt.title}/></Link> 
                    <div className='pdt-price'>
                        <p className='discount'><i className="bi bi-currency-rupee"></i>{pdt.finalPrice}</p>
                        <p className='actual'><strike><i className="bi bi-currency-rupee"></i>{pdt.originalPrice}</strike></p>
                    </div>
                  </div>
        )})} 
      </Slider>
    </div>
  );
};
export default FeaturedProducts;
