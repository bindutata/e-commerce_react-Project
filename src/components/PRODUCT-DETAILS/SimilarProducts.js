import React from "react";

import { topProductsData } from "../Top Products/products data";
import { Link } from "react-router-dom";
import '../PRODUCT-DETAILS/styles.css';



const SimilarProducts=({selectedpdt,handleMainImage})=>{
    
    const similarProducts=topProductsData.filter((product)=>
            product.category.toLowerCase()===selectedpdt.category.toLowerCase() &&
            product.id!==selectedpdt.id)
    
    const  productRatings=(ratecount) =>(
        Array.from({length:ratecount},(_,index)=>(
            <i key={index} className="bi bi-star-fill" style={{color:"red"}}></i>
        ))
    )  
    return(
        <div className="various-products">
            <h3>Related Products</h3>
            <div className="product">
                    {similarProducts.map((product)=>(
                        <div className="card" style={{width: "19rem"}} key={product.id}>
                            <div className="productimg">
                                <Link to={`/Product-Details/${product.id}`}><img src={product.image} className="card-img-top" 
                                alt={product.title} onClick={()=>handleMainImage(product.image)}/></Link>
                            </div>
                            <div className="card-body "  >
                                <div className="ratings">
                                    {productRatings(product.rateCount)}
                                </div>
                                <h5 className="card-title">{product.title}</h5>
                                <p className="info">{product.info}</p>
                                <hr className="line"></hr>
                                <div className="price">
                                    <p className='discount'><i className="bi bi-currency-rupee">{product.finalPrice}</i></p>
                                    <p className='actual'><strike><i className="bi bi-currency-rupee"></i>{product.originalPrice}</strike></p>
                                </div>
                                    <Link to="#" className="btn">AddToCart</Link>
                            </div>
                        </div>
                    ))}
                    
            </div>        
        </div>                
        
    
            
        
    )
};
export default SimilarProducts;