import React from "react";
import style from "./NavBar.module.css";
import smartech2 from "../../assets/SmarTech2.png";
import SearcBar from "../SearchBar/SearcBar";
import Filters from "../Filters/Filters";
import Order from "../Order/Order";
import Cart from "../ShoppingCart/Cart";

import { Login } from '../Login/Login'
import { Logout } from '../Logout/Logout'
import { Profile } from '../Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from "react-router-dom";

function NavBar() {
  const { isAuthenticated, user } = useAuth0();
  console.log(user, isAuthenticated)

  
 

  const isAdmin = isAuthenticated && user === 'admin';
  
  return (
    <div>
      <section className={style.container}>
        <div className={style.img}>
          <Link to="/home">
            <img src={smartech2} alt="img not found" width="300rem" />
          </Link>
        </div>
        {isAdmin && (
          <>
            <div>
              <Link className={style.a} to="/form">
                <h3>Crear Producto</h3>
              </Link>
            </div>
            <div>
              <Link className={style.a} to="/products">
                <h3>Productos</h3>
              </Link>
            </div>
            <div>
              <Link className={style.a} to="/comments">
                <h3>Comentarios</h3>
              </Link>
            </div>
          </>
        )}
        {!isAdmin && (
          <>
            <div>
              <Link className={style.a} to="/about">
                <h3>Nosotros</h3>
              </Link>
            </div>
            <div>
              <Link className={style.a} to="/favorites">
                <h3>Favoritos</h3>
              </Link>
            </div>
          </>
        )}
        <div className={style.container}>
          <SearcBar  />
        </div>
        <div className={style.container}>
        <Cart/>
        </div>
      </section>
      <section className={style.container}>
        <Filters />
        <Order />
        <div className={style.container}>
          {isAuthenticated ? (
            <>
              <Profile />
              <Logout />
            </>
          ) : (
            <Login />
          )}
        </div>
      </section>
    </div>
  );
}

export default NavBar;