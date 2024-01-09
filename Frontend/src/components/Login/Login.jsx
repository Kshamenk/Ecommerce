import React from "react";
import styles from './Login.module.css'
import { useAuth0 } from "@auth0/auth0-react";





export const Login = () => {

    const { loginWithRedirect } = useAuth0();
    return(
        <button className={styles.boton} onClick={() => loginWithRedirect()}>Ingresar! 🚪</button>
    )
}