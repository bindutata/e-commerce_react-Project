import React,{ useState} from "react";
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
        });
    };

    const clearFilter= sortMethod!=="" || selectedBrands.length >0 || selectedCategory.length >0;
    
    const handleClearFilter=()=>{
        setSortMethod('');
        setSelectedBrands([]);
        setSelectedCategory([]);
    };

    return(
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-md-2">
                    
                    <div className="sort-filter">
                        {clearFilter && (
                                <div className="clearfilter">
                                    <button onClick={handleClearFilter}>Clear Filter</button> 
                                </div>
                            )}   
                        <div className="sort">
                            <h6>Sort By</h6>
                            <hr></hr>
                            {sortMenu.map((menu,index)=>(
                                <div className="sorting" key={index}>
                                    <div onClick={()=>handleSorting(menu.title)}>{menu.title}</div>
                                </div>    
                                ))}
                        </div>
                        <div className="filter">
                            <h6>Filter By</h6> 
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
                            <h6> Category</h6>
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