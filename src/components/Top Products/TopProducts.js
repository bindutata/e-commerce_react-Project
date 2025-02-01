import React,{useState} from "react";
import {topProductsData} from './products data';
import {Link} from 'react-router-dom';
import '../Top Products/styles.css';
import {useDispatch} from 'react-redux';
import {addToCart} from '../REDUX/ActionCreator';

export const TopProducts=()=>{
    const [categorySelected,setCategorySelected]=useState('All');
    const [filteredpdts,setfilteredpdts]=useState(topProductsData);

    const handleCategory=(category)=>{
        setCategorySelected(category);
        const filteredProducts=(category==='All')?  
                topProductsData:topProductsData.filter((product)=>
                product.category.toLowerCase()===category.toLowerCase()
        );
        setfilteredpdts(filteredProducts);

    };
    return(
        <div className="container-fluid">
            <h3>Top Products</h3>
            <div className="products-list">
                <Link to='#' onClick={()=>{handleCategory('All')}}>All</Link>
                <Link to='#' onClick={()=>{handleCategory('Headphones')}}>Headphones</Link> 
                <Link to='#' onClick={()=>{handleCategory('Earbuds')}}>Earbuds</Link>
                <Link to='#' onClick={()=>{handleCategory('Earphones')}}>Earphones</Link> 
                <Link to='#' onClick={()=>{handleCategory('Neckbands')}}>Neckbands</Link>
            </div>
            <ProductCards products={filteredpdts} />
            
        </div>
    );
};


export const ProductCards=({products})=>{
    
    const dispatch=useDispatch();
    
    const productRatings=(rateCount)=>{
        return(
        Array.from({length:rateCount},index=>(
            <i key={index} className="bi bi-star-fill" style={{color:"red"}}></i>
        ))
        
    ); };
   
    return(
        <div className="various-products">
            <div className="product">
                {products.map((product)=>(
                    <div className="card" style={{width: "15rem"}} key={product.id}>
                        <Link to={`/Product-Details/${product.id}`}><img src={product.image} className="card-img-top" 
                        alt={product.title}/></Link>
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
                                <Link to="/cart-page"><button className="btn" 
                                onClick={()=>dispatch(addToCart(product))}>AddToCart</button></Link>
                        </div>
                    </div>
                ))}
                <BrowseProductCard/>
            </div>        
        </div>                
    );
};

export const BrowseProductCard=()=>{
    return(
        <div className="card browse-card" style={{width: "15rem"}}>
            <div className="browse">
                <p>Browse All Products</p>
                <Link to='/all-products' style={{textDecoration:'none'}}><p><i className="bi bi-arrow-right"></i></p></Link>
            </div>
        </div>
    );
} ;

