import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Home/styles.css';
import { DisplayMessage } from './Account';
import { topProductsData } from '../Top Products/products data';
import {useSelector} from 'react-redux';

const Navbar = () => {

    const[searchbar,showsearchbar]=useState(false);
    const[showMessage,setshowMessage]=useState(false);
    const [searchvalue,setSearchValue]=useState('');
    const [filteredProducts,setFilteredProducts]=useState([]);

    const handleSearchBar=() => {
        showsearchbar(!searchbar);
    }
    const handleMessage=()=>{
        setshowMessage(true)
    }
    const handleInput=(e)=>{
        let inputValue=e.target.value;
        setSearchValue(inputValue);

        // based on input value products get filtered
        if (inputValue.trim()===''){
            setFilteredProducts([]);
        }
        else{
            const suggestedProducts=topProductsData.filter((product)=>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredProducts(suggestedProducts);
    }
    };
    const handleSuggestions=()=>{
        setSearchValue('');
        setFilteredProducts([]);
        showsearchbar(false);
    };
    
    const cart_Items=useSelector((state)=>state.productReducer.cartItems || []);

    const totalCartItems=cart_Items.length;

    return(
        <>
            <div className='container-fluid d-flex'>
                <h2 className='logo mt-2'>Tech-Shop</h2>
                <div className='icons d-flex'>
                    <i className="bi bi-search" title="search" onClick={handleSearchBar} ></i>
                    <div className='cart-icon'>
                        <Link to='/cart-page'><i className="bi bi-cart" title="AddToCart"></i>
                        <span className='cart-count'>{totalCartItems}</span></Link>
                    </div>
                    <i className="bi bi-person" onClick={handleMessage} 
                    ></i>
                </div>
            </div> 
            {searchbar && (
                    <>
                        <div className='searchbar d-flex'>
                            <input type="text" className="form-control p-1" placeholder="Search a product"
                            value={searchvalue} onChange={handleInput}/>
                        </div>
                </>
            )}
            {searchvalue &&(
                <i class="bi bi-x-lg" onClick={()=>setSearchValue('')} 
                style={{cursor:'pointer'}}></i>
            )}
            {searchvalue && filteredProducts.length===0 && (
                <div className='no-products'>
                    <p>No Products found</p>
                </div>
            )}
            {filteredProducts.length>0 &&(
                <div className='suggestions'>
                    <div className='list-group'>
                        <ul>
                            {filteredProducts.map((product,index)=>(
                                <div className='list-item' key={index}>
                                    <li key={index} onClick={()=>handleSuggestions(product.id)}>
                                    <Link to={`/product-details/${product.id}`}>{product.title}</Link></li>
                                </div>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
            {showMessage && (<DisplayMessage/>)}
        
        </>
    )
};
export default Navbar;


