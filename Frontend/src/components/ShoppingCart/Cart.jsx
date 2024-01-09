import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import styles from './Cart.module.css';

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <Link to="/shop">
        <button className={styles.cartButton}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
          {totalCartItems > 0 && <span className={styles.cartItemCount}>{totalCartItems}</span>}
        </button>
      </Link>
    </div>
  );
}

export default Cart;