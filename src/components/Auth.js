import {auth, provider} from "../firebase-config.js";
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export const  Auth = ()=>{
    const SignInGoogle =async()=>{
        const result = await signInWithPopup (auth, provider);
        cookies.set("auth-token", result.user.refreshToken)
    };
    return(
        <>
            <div className="auth">
                <p>Sign in with Google To Contiue</p>
                <button onClick={SignInGoogle}>Google Sign In</button>
            </div>
        </>
    )
} 