import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../Home/styles.css';
import { DisplayMessage } from './Account';

const Navbar = () => {

    const[searchbar,showsearchbar]=useState(false);
    const[showMessage,setshowMessage]=useState(false);

    const handleSearchBar=() => {
        showsearchbar(!searchbar);
    }

    const handleMessage=()=>{
        setshowMessage(true)
    }

    
    
    return(
        <>
            <div className='container-fluid d-flex'>
                <h2 className='logo mt-2'>Tech-Shop</h2>
                <div className='icons d-flex'>
                    <i className="bi bi-search" title="search" onClick={handleSearchBar}></i>
                    <Link to='#'><i className="bi bi-cart" title="AddToCart"></i></Link>
                    <i className="bi bi-person" onClick={handleMessage} 
                    ></i>
                </div>
            </div> 
            {searchbar && (
                    <>
                        <div className='searchbar d-flex'>
                            <input type="text" className="form-control p-1" placeholder="Search"/>
                            <button className="btn btn-success" type="submit">search</button>
                        </div>
                </>
            )
            }
            {showMessage && (<DisplayMessage/>)}
        
        </>
    )
};
export default Navbar;


