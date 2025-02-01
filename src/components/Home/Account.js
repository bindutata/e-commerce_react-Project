import React from 'react';
import '../Home/styles.css';

export const Loginform = ({closeLoginform}) =>{

     return(
        <>
        <div style={{height:"100vh",display:'flex',
    justifyContent: 'center',width:"100%",position:'absolute',left:'50px', zIndex:'500', backdropFilter:'blur(4px)'}}>
        <div className='login-form'>
                <span className='closemessage' onClick={closeLoginform}>&times;</span> 
                <div className='form'>
                    <form>
                        <h4 style={{marginTop:'0px'}}>Login</h4>
                        <p style={{fontSize:'12px'}}>New to Tech-Shop?Create an account</p>
                        <input className='form-control mb-2 bg-transparent' type='text' placeholder='Email'/>
                        <input className='form-control mb-2 bg-transparent' type='password' placeholder='Password'/>
                        <button className='btn-login-btn'>Login</button>
                        <p className='login'>or login with</p>
                        <button className='fb'>Facebook</button>
                        <button className='google'>Google</button>
                        <button className='twit'>Twitter</button>
                    </form>
                </div>
            </div>
        </div>
            
        </>    
        
            /* {(!message)?null:
            <div className='message' onFocus={handleFocusEvent}>
                <span className='closemessage' style={{cursor:'pointer'}} onClick={closeMessage}>&times;</span>
                <h3>Hello !!</h3>
                <p>Access account and manage your orders</p>
                <button className='btn btn-light bg-transparent' onClick={displayLoginForm}>Login/SignUp</button>
                <hr></hr>
                <p>Please Login.</p>
            </div>} */

            
        
            
        
    )


    
    
}

