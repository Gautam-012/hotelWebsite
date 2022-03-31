import {GoogleLogout} from 'react-google-login';
import { useAuth } from './hooks/useAuth';

const clientId= "897015532740-ab3t4eqqol8d5uab7iud3q1c4s55g7p9.apps.googleusercontent.com";

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