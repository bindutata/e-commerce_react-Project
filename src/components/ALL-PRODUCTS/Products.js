import React from "react";
import { Link } from "react-router-dom";

const Products=({productCards})=>{

    const productRatings=(rateCount)=>{
        return(
        Array.from({length:rateCount},(_,index)=>(
            <i key={index} className="bi bi-star-fill" style={{color:"red"}}></i>
        ))
    ); };

    return(
        <div className="various-products">
                    <div className="product">
                        {productCards.map((product)=>(
                            <div className="card" style={{width: "19rem"}} key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title}/>
                                <div className="card-body "  >
                                    <div className="ratings">
                                        {productRatings(product.rateCount)}
                                    </div>
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="info">{product.info}</p>
                                    <hr className="line"></hr>
                                    <div className="price">
                                        <p className='discount'><i className="bi bi-currency-rupee"></i>{product.finalPrice}</p>
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
export default Products;