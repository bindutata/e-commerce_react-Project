import React,{useState} from "react";
import { Link } from "react-router-dom";
import {reviewsData} from './reviewsdata';


const Specificatons=({selectedpdt})=>{

    const[requirement,setRequirement]=useState('Specifications');

    const handleProductSummary=(category)=>{
        setRequirement(category);
    }
    const ratings=(ratecount)=>(
        Array.from({length:ratecount},(_,index)=>(
            <i key={index} className="bi bi-star-fill" style={{color:"red"}}></i>
        ))
    )
    return(
        <div className="container-fluid">
            <div className="product-summary">
                <Link to={`/product-details/${selectedpdt.id}`} onClick={()=>{handleProductSummary('Specifications')}}>Specifications</Link>
                <Link to={`/product-details/${selectedpdt.id}`} onClick={()=>{handleProductSummary('Overview')}}>Overview</Link>
                <Link to={`/product-details/${selectedpdt.id}`} onClick={()=>{handleProductSummary('Reviews')}}>Reviews</Link>
            </div>
            
                {requirement.toLowerCase()==='Specifications'.toLowerCase() && (
                    <div className="specific"> 
                        <div className="list1">
                            <ul>
                                <li>Brand</li>
                                <li>Model</li>
                                <li>Generic Name</li>
                                <li>Headphone type</li>
                                <li>Connectivity</li>
                                <li>Microphone</li>
                            </ul>
                        </div>
                        <div className="list2">
                            <ul>
                                <li>{selectedpdt.brand}</li>
                                <li>{selectedpdt.title}</li>
                                <li>{selectedpdt.category}</li>
                                <li>{selectedpdt.type}</li>
                                <li>{selectedpdt.connectivity}</li>
                                <li>Yes</li>
                            </ul>
                        </div>
                    </div>
                    )}
                    {requirement.toLowerCase()==='Overview'.toLowerCase() && (
                        <div className="product-overview">
                            <p>The {selectedpdt.title} Truly wireless Earbuds provides fabulous sound quality.</p>
                            <ul>
                                <li>Sound tuned to perfection</li>
                                <li>Comfortable to wear</li>
                                <li>Long hrs playback time</li>
                            </ul>
                            <p className="p1">Buy the {selectedpdt.title} Truly wireless Earbuds which you with fabulous music experience by
                                providing you with awesome sound quality that you can ever move on from.
                                Enjoy perfect flexibility and mobility with amazing music quality with these earbuds 
                                giving you a truly awesome audio experience.It blends with exceptional sound quality 
                                and a range of smart features for an unrivalled listening experience. 
                            </p>
                        </div>
                    )}
                    {requirement.toLowerCase()==='Reviews'.toLowerCase() && (
                        <>
                        {reviewsData.map((review)=>(
                            <div className="review">
                                <div className="usericon">
                                    <div className="icon"><i class="bi bi-person-circle"></i></div>
                                    <div className="name-ratings">
                                        <p className="name">{review.name}</p>
                                        <div className="rating">
                                            <pre>{ratings(review.rateCount)}&nbsp;| <small>{review.date}</small></pre>
                                            
                                        </div>
                                    </div>
                                </div>
                                <p className="product-review">{review.review}</p>
                            </div>    
                        ))}
                        </>
                        
                    )}
        
            

        </div>
    )
};
export default Specificatons;