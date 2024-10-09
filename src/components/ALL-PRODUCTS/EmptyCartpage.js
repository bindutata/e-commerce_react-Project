import React from "react";
import {Link} from 'react-router-dom';
import '../ALL-PRODUCTS/styles.css';


const EmptyCartPage=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-align-center">
                    <div className="icon">
                        <i className="bi bi-cart-x"></i>
                    </div>    
                    <div className="text">
                        <p>Your Cart is Empty</p>
                    </div>    
                    <Link to='/all-products'><button className="btn">Start Shopping</button></Link>
                    
                </div>
                <div className="col-md-4"></div>
            </div>

        </div>
    )
};
export default EmptyCartPage;