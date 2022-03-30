import React,{useEffect, createContext, useContext, useState} from "react";
import {gapi} from 'gapi-script';
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
 
const AuthContext = createContext();

export const useAuth =()=>useContext(AuthContext);


const clientId= "459598229133-6repc7crj75rl29cmnvu5dmdepq70qbj.apps.googleusercontent.com";

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

