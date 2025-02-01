import React from 'react';
import {cauroselImages} from './cauroselImages';
import '../caurosel images/styles.css';
import { Link } from 'react-router-dom';


const Carousel =()=>{

    const slideimages=()=>{
        return(
            <div id="carouselExampleAutoplaying" className="carousel slide" 
            data-bs-ride="carousel" data-bs-interval="10000">
                <div className="carousel-inner">
                    {cauroselImages.map((img,index)=>(
                        <div className={`carousel-item ${index===0?'active':''}`} key={img.id}>
                            <div className='row '>
                                <div className='col-md-6 '>
                                    <div className='background'>
                                        <p>{img.type}</p>
                                    </div>
                                    <div className='description'>
                                        <div className='desc'>
                                            <p>{img.title}</p>
                                            <pre>{img.tagline}</pre>
                                            <div className='price'>
                                                <p className='discount'><i className="bi bi-currency-rupee"></i>{img.finalPrice}</p>
                                                <p className='actual'><strike><i className="bi bi-currency-rupee"></i>{img.originalPrice}</strike></p>                                                </div>
                                            <div className='shop-now-btn'>
                                                <Link to={`/product-details/${img.id}`}><button>shop now</button></Link>                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='image1'>
                                            <img src={img.image} alt={img.title}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
              
            <button id="carousel-control-prev" className='carousel-control-prev' type="button"
                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            
            <button id="carousel-control-next" className='carousel-control-next' type="button"
                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
        );
    };        
            
    return(
        <>
        {slideimages()}
        </>
    )
};
export default Carousel;
    

