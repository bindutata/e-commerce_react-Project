import React,{useState} from "react";
import {topProductsData} from '../Top Products/products data';
import '../PRODUCT-DETAILS/styles.css';
import Specificatons from './Specifications';
import SimilarProducts from "./SimilarProducts";
import { useParams } from "react-router-dom";
import Advantages from "../Advantages/Advantages";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import {addToCart} from '../REDUX/ActionCreator';

const ProductDetails=()=>{

    const dispatch=useDispatch();

    const {id}=useParams(); //from this we get id from url.
    // console.log(id);
    const selectedProduct=topProductsData.find((product)=>product.id===+id);

    const [mainImage,setMainImage]=useState(selectedProduct?selectedProduct.image:"");

    if (!selectedProduct){
        return <h3 style={{textAlign:'center'}}>Product not found.</h3>;
    };

    const productRatings=(ratecount)=>(
        Array.from({length:ratecount},(num,index)=>(
            <i key={index} className="bi bi-star-fill" style={{color:"red"}}></i>
        ))
    );
    const savingsPercentage=(originalPrice,finalPrice)=>{
        const percentage=((originalPrice-finalPrice)*100/originalPrice);
        return Math.round(percentage);
    }

    const handleImageDisplay=(image)=>{
        setMainImage(image);
    }

    return(
        <div className="container-fluid">
            <div className="product-details">
                <div className="row">
                    <div className="col-md-2">
                        <div className="product-images">
                            {selectedProduct.images.map((image,index)=>
                                <img key={index} src={image} alt={selectedProduct.title}
                                onClick={()=>{handleImageDisplay(image) }}/>
                            )}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="img-main-view">
                            <img src={mainImage} alt={selectedProduct.title}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="about-prod">
                            <h6>{selectedProduct.title}</h6>
                            <p className="desc">{selectedProduct.info}</p>
                            <div className="ratings">
                                {productRatings(selectedProduct.rateCount)}
                                <p>| {selectedProduct.ratings} ratings</p>
                            </div>
                            <hr className="line"></hr>
                            <div className="price">
                                <p className='discount'><i className="bi bi-currency-rupee"></i>{selectedProduct.finalPrice}</p>
                                <p className='actual'><strike><i className="bi bi-currency-rupee"></i>{selectedProduct.originalPrice}</strike></p>
                            </div>
                            <p className="savings">You Save : <i className="bi bi-currency-rupee"></i>
                            {selectedProduct.originalPrice-selectedProduct.finalPrice}&nbsp;
                            ({savingsPercentage(selectedProduct.originalPrice,selectedProduct.finalPrice)}%)</p>
                            <small>(Inclusive of all Taxes)</small>
                            <div className="availability">
                                <div><i class="bi bi-check2"></i>In Stock</div> 
                            </div>
                            <hr></hr>
                            <h6>Offers and Discounts</h6>
                            <div className="offers-discount">
                                <div className="offers">
                                    <p>No cost EMI on credit card</p>
                                </div>
                                <div className="offers">
                                    <p>Pay later & avail cashback</p>
                                </div>
                            </div>
                            <hr></hr>
                            <Link to='/cart-page'><button className="add-to-cart"
                            onClick={()=>dispatch(addToCart(selectedProduct))}>Add To Cart</button></Link>

                        </div>
                    </div>
                </div>
            </div>
            
            <Specificatons selectedpdt={selectedProduct}/>
            <SimilarProducts selectedpdt={selectedProduct} handleMainImage={handleImageDisplay}/>
            <Advantages/>
            <Footer/>
            
        </div>
    )
};
export default ProductDetails ;
    
                