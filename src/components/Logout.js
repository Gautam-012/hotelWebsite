import {GoogleLogout} from 'react-google-login';
import { useAuth } from './hooks/useAuth';

const clientId= "459598229133-6repc7crj75rl29cmnvu5dmdepq70qbj.apps.googleusercontent.com";

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