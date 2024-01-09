import { useAuth0 } from "@auth0/auth0-react"
import styles from './Logout.module.css'


export const Logout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.reload() });
  };

    
    return (
        <button className={styles.boton} onClick={handleLogout}>
        🚶
      </button>
    )
}