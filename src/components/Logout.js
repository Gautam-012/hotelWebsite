import {GoogleLogout} from 'react-google-login';
import { useAuth } from './hooks/useAuth';


const Logout =()=>{
    
    const {onLogOut}=useAuth();

    return(
        <div id="signInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogOut}
            />
        </div>
    )
}

export default Logout;
