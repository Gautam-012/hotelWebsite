import {GoogleLogin} from 'react-google-login';
import { useAuth } from './hooks/useAuth';

const clientId= "897015532740-ab3t4eqqol8d5uab7iud3q1c4s55g7p9.apps.googleusercontent.com";

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