import React from 'react'
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./Firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./Reducer";

function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        auth 
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => {
            alert(error.message);
        });
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/564x/50/4a/c1/504ac1008f40a9f0bc0568cac8132277.jpg" alt=""/>  
                <h1>Sign in</h1>
                <p>embdeveloper.chatapp.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>   
        </div>
    )
}

export default Login
