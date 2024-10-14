import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../REDUX/ActionCreator";

const Products=({productCards})=>{

    const dispatch=useDispatch();

    const productRatings=(rateCount)=>{
        return(
        Array.from({length:rateCount},(num,index)=>(
            <i key={index} className="bi bi-star-fill" style={{color:"red"}}></i>
        ))
    ); };

    return(
        <div className="various-products">
                    <div className="product">
                        {productCards.map((product)=>(
                            <div className="card" style={{width: "16rem"}} key={product.id}>
                                <Link to={`/Product-Details/${product.id}`}><img src={product.image} 
                                className="card-img-top" alt={product.title}/></Link> 
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
                                        <Link to="/cart-page"><button className="btn" onClick={()=>dispatch(addToCart(product))}>AddToCart</button></Link>
                                </div>
                            </div>
                        ))}
                     </div>        
        </div>  

    )

    
};
export default Products;