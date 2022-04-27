import React from 'react';
import Login from './Login';
import Logout from './Logout';
import "./index.css"
import { useAuth } from './hooks/useAuth';
//client ID is removed due to security issues.

const Auth=()=>{
    
    const auth =useAuth();
    // console.log(!auth.auth);

    if(auth.auth)
    return(
        <div className='auth'>
            <Logout/>
        </div>
    )

    return(
        <div className='auth'> 
            <Login/>
        </div>
    )
}

export default Auth;
