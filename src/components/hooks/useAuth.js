import React,{useEffect, createContext, useContext, useState} from "react";
import {gapi} from 'gapi-script';
 
const AuthContext = createContext();

export const useAuth =()=>useContext(AuthContext);
// AIzaSyAtlYIBQzsf_35FnhDk9LHsHDg3SGYSUe4
const clientId= "897015532740-ab3t4eqqol8d5uab7iud3q1c4s55g7p9.apps.googleusercontent.com";

export default function AuthProvider({children}){
    const [auth, setAuth]= useState(null);

    useEffect(()=>{
        const start = ()=>{
            gapi.client.init
            ({
                client_id: clientId,
                scope: "profile"
            })
        };

        gapi.load('client:auth2', start)
    },[]);

    const onLogIn= res =>{
        // console.log("Login Success! User : user", res.profileObj);
        setAuth(res.profileObj)
    }

    const onLogOut= ()=>{
        setAuth(null)
    }

    const value = {
        auth, onLogIn, onLogOut
    }

    return(
        <AuthContext.Provider value={value} >
            {children}       
        </AuthContext.Provider>
    )
}

