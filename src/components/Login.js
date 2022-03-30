import {GoogleLogin} from 'react-google-login';
import { useAuth } from './hooks/useAuth';

const clientId= "459598229133-6repc7crj75rl29cmnvu5dmdepq70qbj.apps.googleusercontent.com";

const Login =()=>{

    const {onLogIn}= useAuth();

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onLogIn}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;