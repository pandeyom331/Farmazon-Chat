import { Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
// import * as firebaseui from 'firebaseui';
import React from "react";
import "./Login.css";
import {auth, provider, provider1} from "./firebase"
import {actionTypes} from "./reducer"
import {useStateValue} from "./StateProvider"

function Login() {

    const [{}, dispatch] = useStateValue();

    function signIn_Google() { 
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
        
    }

    function signIn_FaceBook() { 
        auth.signInWithPopup(provider1)
        .then((result) => console.log(result))
        .catch((error) => alert(error.message));
        
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="/Farmazon_logo1.png" alt="Farmazon Logo" />
                <div className="login__text">
                    <h1>Sign in to Farmzon-Chat</h1>
                </div>
                <Button className="Google" onClick={signIn_Google}><img src="/google.png" className="G_img"/>Sign In With Google</Button>
                <br />
                <Button className="Facebook" onClick={signIn_FaceBook}> <FacebookIcon/> Sign In With FaceBook</Button>
            </div>
        </div>
    );
}

export default Login;
