import React ,{useState} from 'react';
import '../Home/styles.css';

export const DisplayMessage = () =>{
 
    const [message,setMessage]=useState(true);
    const [loginform,setLoginform]=useState(false);

    const closeMessage=()=>{
        setMessage(!message);
    }
    const displayLoginForm = ()=>{
        setLoginform(true);
        setMessage(false );
    }
    const closeLoginform=()=>{
        setLoginform(false)
    }
    
    return(
        <>
            {(!message)?null:
            <div className='message'>
                <span className='closemessage' style={{cursor:'pointer'}} onClick={closeMessage}>&times;</span>
                <h3>Hello !!</h3>
                <p>Access accout and manage your orders</p>
                <button className='btn btn-light bg-transparent' onClick={displayLoginForm}>Login/SignUp</button>
                <hr></hr>
                <p>Please Login.</p>
            </div>}

            {loginform &&(
                <div className='login-form'>
                    <span className='closemessage' onClick={closeLoginform}>&times;</span>
                    <div className='form'>
                        <form>
                            <h4>Login</h4>
                            <p>New to Tech-Shop?Create an account</p>
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
        )}
            
        </>
    )


    
    
}

