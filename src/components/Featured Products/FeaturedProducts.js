import React from 'react';
import {featuredProducts} from './productsdata';
import '../Featured Products/styles.css';

const FeaturedProducts=()=>{
    return(
        <>
            <h2>Featured Products</h2>
            <div className='featured-products'>
                {featuredProducts.map((pdt)=>(
                    <div className='image' key={pdt.id}>
                    
                        <h5>{pdt.title}</h5>
                            <img src={pdt.image} alt={pdt.title}/>
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



                               