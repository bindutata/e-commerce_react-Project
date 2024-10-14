import React from 'react';
import {featuredProducts} from './productsdata';
import '../Featured Products/styles.css';
import { Link } from 'react-router-dom';

const FeaturedProducts=()=>{
    return(
        <>
            <h3>Featured Products</h3>
            <div className='featured-products'>
                {featuredProducts.map((pdt)=>(
                    <div className='image' key={pdt.id}>
                    
                        <h5>{pdt.title}</h5>
                            <Link to={`/product-details/${pdt.id}`}><img src={pdt.image} alt={pdt.title}/></Link>
                            <div className='price'>
                                <p className='discount'><i className="bi bi-currency-rupee"></i>{pdt.finalPrice}</p>
                                <p className='actual'><strike><i className="bi bi-currency-rupee"></i>{pdt.originalPrice}</strike></p>
                            </div>
                    </div>
                ))} ;   
            </div>
        </>    

        
    
                        
               
                
            
)  
};
export default FeaturedProducts;



                               