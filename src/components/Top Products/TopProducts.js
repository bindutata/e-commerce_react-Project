import React from "react";
import {topProductsData} from './products data';
import {Link} from 'react-router-dom';
import '../Top Products/styles.css';

const TopProducts=()=>{
    const productRatings=(rateCount)=>{
        return(
        Array.from({length:rateCount},()=>(
            <i class="bi bi-star-fill" style={{color:"red"}}></i>
        ))
        
   ) }
    return(
        <div className="container-fluid">
            <h2>Top Products</h2>
            <div className="products-list">
                <Link to='#'>All</Link>
                <Link to='#'>Headphones</Link> 
                <Link to='#'>Earbuds</Link>
                <Link to='#'>Earphones</Link> 
                <Link to='#'>Neckbands</Link>
            </div>
            <div className="various-products">
                <div className="product">
                    {topProductsData.map((product)=>(
                        <div className="card" style={{width: "19rem"}} key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.title}/>
                            <div className="card-body">
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
                                <Link href="#" className="btn">AddToCart</Link>
                            </div>
                      </div>
                    ))}
                    <div className="card browse-card" style={{width: "19rem"}}>
                        <div className="browse">
                            <p>Browse All Products<i className="fa-solid fa-arrow-right"></i></p>
                            <p><i class="bi bi-arrow-right"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default TopProducts;