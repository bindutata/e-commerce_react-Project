import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Home/styles.css';
import {Loginform} from './Account';
import { topProductsData } from '../Top Products/products data';
import {useSelector} from 'react-redux';

const Navbar = () => {

    const[searchbar,showsearchbar]=useState(false);
    const[showMessage,setshowMessage]=useState(false);
    const [searchvalue,setSearchValue]=useState('');
    const [filteredProducts,setFilteredProducts]=useState([]);
    // const [message,setMessage]=useState(true);
    const [loginform,setLoginform]=useState(false);

    const closeMessage=()=>{
        setshowMessage(!showMessage);
    }
    const displayLoginForm = ()=>{
        setLoginform(true);
        
    }
    const closeLoginform=()=>{
        setLoginform(false)
    }

    const handleSearchBar=() => {
        showsearchbar(!searchbar);
    }
    const handleMouseOver=()=>{
        setshowMessage(true)
    }
    const handleMouseLeave=()=>{
        setTimeout(()=>{
            setshowMessage(false)
        },30000)
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

    // document.addEventListener('click',()=>showsearchbar(false));
    
    const cart_Items=useSelector((state)=>state.productReducer.cartItems || []);

    const totalCartItems=cart_Items.length;

    return(
        <>
            <div className='container-fluid d-flex'>
                <h2 className='logo mt-2'>Tech-Shop</h2>
                <div className='icons d-flex'>
                    <div className='search-icon'>
                        <i className="bi bi-search"  onClick={handleSearchBar} ></i>
                        <span className='tooltip'>search</span>
                    </div>
                    <div className='cart-icon'>
                        <Link to='/cart-page'><i className="bi bi-cart" ></i>
                        <span className='cart-count'>{totalCartItems}</span></Link>
                        <span className='tooltip'>AddToCart</span>
                    </div>
                    <div className='profile-icon'>
                        <i className="bi bi-person" ></i>
                        
                            <div className='icon-tooltip'  >
                                <span className='closemessage' onClick={closeMessage}>&times;</span> 
                                <p>Hello !!</p>
                                <p>Access account and manage your orders</p>
                                <button className='login-btn' onClick={displayLoginForm}>Login/SignUp</button>
                                <hr className='hr-line'></hr>
                                <p>Please Login.</p>
                            </div> 
                        
                        {/* <span className='icon-tooltip'><h3>Hello !!</h3>
                                <p>Access account and manage your orders</p>
                                <button className='btn btn-light bg-transparent' onClick={displayLoginForm}>Login/SignUp</button>
                                <hr></hr>
                                <p>Please Login.</p></span> */}
                    </div>
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
                                    <li key={index} onClick={()=>handleSuggestions()}>
                                    <Link to={`/product-details/${product.id}`}>{product.title}</Link></li>
                                </div>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
            {loginform && (<Loginform closeLoginform={closeLoginform}/>)} 
        
        </>
    )
};
export default Navbar;


