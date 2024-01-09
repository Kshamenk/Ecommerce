import React from "react";
import styles from './Profile.module.css'
import { useAuth0 } from "@auth0/auth0-react";


export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
   
    if (isLoading) {
        return <div>Loading...</div>;
      }

    return(
        isAuthenticated && (
            <div className={styles.profile} >
              <img className={styles.imgen} src={user.picture} alt={user.name} />
            </div>
          )
    )
}