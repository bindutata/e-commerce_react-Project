import React,{useEffect, useState} from "react";
 
import {sortMenu,brandsMenu,categoryMenu} from './filterdata';

import Advantages from '../Advantages/Advantages.js';
import Footer from '../Footer/Footer.js';
import SortProducts from './SortProducts.js';

const AllProducts=()=>{

    const [sortMethod,setSortMethod]=useState("");
    const [selectedBrands,setSelectedBrands]=useState([]);
    const [selectedCategory,setSelectedCategory]=useState([]);

    const handleSorting=(title)=>{
        setSortMethod(title);
    };
    const handleFilterCheckbox=(e,brand)=>{
        setSelectedBrands((prevselectedBrands)=>{
        if(e.target.checked ){
            return [...prevselectedBrands,brand]
        }
        else{
            return [...prevselectedBrands.filter((pdtbrand)=>pdtbrand!==brand)]
        }
    });
    };
    const handleCategoryCheckbox=(e,category)=>{
        setSelectedCategory((prevselectedCategory)=>{
            if(e.target.checked){
                return [...prevselectedCategory,category];
            }
            else{
                return [...prevselectedCategory.filter((pdtcategory)=> pdtcategory!==category)]
            }
        })
    }
        
    return(
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-md-2">
                    
                    <div className="sort-filter">
                        <div className="sort">
                            <h4>Sort By</h4>
                            <hr></hr>
                            {sortMenu.map((menu,index)=>(
                                <div className="sorting" key={index}>
                                    <div onClick={()=>handleSorting(menu.title)}>{menu.title}</div>
                                </div>    
                                ))}
                        </div>
                        <div className="filter">
                            <h4>Filter By</h4> 
                            <hr></hr>   
                            {brandsMenu.map((menu,index )=>(
                                <div className="brands" key={index}>
                                    <input type='checkbox' name={menu.label} checked={selectedBrands.includes
                                    (menu.label)} onChange={(e)=>handleFilterCheckbox(e,menu.label)}/>
                        
                                    <label htmlFor={menu.label}>{menu.label}</label>
                                </div>    
                            ))}
                        </div>
                        <div className="category">
                            <h4> Category</h4>
                            <hr></hr>
                            {categoryMenu.map((menu,index)=>(
                                <div className="category" key={index}>
                                    <input type='checkbox' name={menu.label} 
                                    checked={selectedCategory.includes(menu.label)} 
                                    onChange={(e)=>{handleCategoryCheckbox(e,menu.label)}}/>

                                    <label htmlFor={menu.label}>{menu.label}</label>
                                </div>
                            ))}
                        </div>   
                    </div>
                </div>
                
                <div className="col-md-10 " style={{marginTop:"-80px"}}>
                    <SortProducts sortMethod={sortMethod} selectedBrands={selectedBrands}
                    selectedCategory={selectedCategory}/>
                </div>
            </div>
            <Advantages/>
            <Footer/>
        </div>
    );
};
export default AllProducts;