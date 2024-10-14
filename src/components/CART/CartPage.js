import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import EmptyCartPage from '../ALL-PRODUCTS/EmptyCartpage';
import  {useDispatch} from 'react-redux';
import '../CART/styles.css';
import {removeFromCart} from '../REDUX/ActionCreator';

const Cart=()=>{

    const [quantity,setQuantity]=useState({});

    const handleDecrement=(id)=>{
        setQuantity((prevQuantity)=>{
            const decreaseQuantity=(prevQuantity[id] || 1)-1;
            if (decreaseQuantity<1){
                dispatch(removeFromCart(id));
                return prevQuantity;
            };
            return {...prevQuantity,[id]:decreaseQuantity,};
            });
    };
    const handleIncrement=(id)=>{
        setQuantity((prevQuantity)=>({
            ...prevQuantity,[id]:(prevQuantity[id] || 1)+1
    }));
    };
    
    const cart_Items=useSelector((state)=>state.productReducer.cartItems || []);
    console.log('cartitems:',cart_Items);
    console.log('cartitemsafter:',Array.isArray(cart_Items));
    const totalCartPrice=cart_Items.reduce((prevPrice,currentItem)=>{
        const itemQuantity=quantity[currentItem.id] || 1;
        return prevPrice+(currentItem.finalPrice || 0)*itemQuantity;
    },0);

    const originalPrice=cart_Items.reduce((prevoriginalPrice,currentitem)=>{
        const itemQuantity=quantity[currentitem.id] || 1;
        return prevoriginalPrice + (currentitem.originalPrice ||0)*itemQuantity;
    },0);

    const discountPrice=cart_Items.reduce((prevdiscount,currentitem)=>{
        const itemQuantity=quantity[currentitem.id] || 1;
        const discount = (currentitem.originalPrice || 0) - (currentitem.finalPrice || 0);
        return prevdiscount + discount*itemQuantity;
    },0);

    const dispatch=useDispatch();
     
    return (
        <>
            <div className='cart-details'>
               {cart_Items.length > 0 ? 
                <>
                    <div className='products-to-cart'>
                        {cart_Items.map((item)=>(
                            <div key={item.id}>
                                <div className='items' >
                                    <div className='item-img'>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div className='about-img'>
                                        <pre>{item.title} {item.info} </pre>
                                        
                                        <div className='price'>
                                            <p className='discount'><i class="bi bi-currency-rupee"></i>{item.finalPrice}</p>
                                            <p className='actual'><strike><i class="bi bi-currency-rupee"></i>{item.originalPrice}</strike></p>
                                        </div>
                                        <div className='select-quantity'>
                                            <button className='decrease' onClick={()=>{handleDecrement(item.id)}}>-</button>
                                            <span className='number'>{quantity[item.id] || 1}</span>
                                            <button className='increase' onClick={()=>{handleIncrement(item.id)}}>+</button>
                                        </div>
                                    </div>
                                    <i class="bi bi-trash3" onClick={()=>dispatch(removeFromCart(item.id))}></i>
                                
                                </div>
                                <hr className='line'></hr>
                        </div >    
                        ))}
                    </div>  
                    
                    <div className='summary'>
                        <div className='heading'>
                            <h4>Order Summary &nbsp;&nbsp;&nbsp;({cart_Items.length} items)</h4>
                        </div>
                        <div className='order-price'>
                            <ul className='list1'>
                                <li>Original Price</li>
                                <li>Discount</li>
                                <li>Delivery</li>                                
                            </ul>
                            <ul className='list2'>
                                <li><i className="bi bi-currency-rupee"></i>{originalPrice}</li>
                                <li><i className="bi bi-currency-rupee"></i>-{discountPrice}</li>
                                <li>Free</li>                                
                            </ul>
                        </div>
                        
                        <hr></hr>
                        <div className='total'>
                            <p>Total Price</p>
                            <p><i className="bi bi-currency-rupee"></i>{totalCartPrice}</p>
                        </div>
                        <button>CheckOut</button>
                    </div>
                    
                </>        
                :(<EmptyCartPage/>)}               
            </div>    
        </>
    );
};
export default Cart;