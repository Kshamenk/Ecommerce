import React, { useState } from "react";
import axios from "axios";
import style from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, delFromCart } from "../../Redux/actions";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

function ShoppingCart() {
  const productShop = useSelector((state) => state.cart);
  const [preferenceId, setPreferenceId] = useState(null);

  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  initMercadoPago(publicKey);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        productShop
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handlerBuy = async () => {
    const id = await createPreference();
    setPreferenceId(id);
  };

  const totalSale = productShop.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const dispatch = useDispatch();

  const handlerDelete = (id, all) => {
    dispatch(delFromCart(id, all));
  };
  const handlerClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={style.shoppingCartContainer}>
      <div>
        <button className={style.clearCartButton} onClick={handlerClearCart}>
          Limpiar el carrito
        </button>
      </div>
      <div className={style.tables}>
        <div>
          <table className={style.productTable}>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio unitario</th>
                <th>Cantidad</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            {productShop.map((prod, index) => {
              return (
                <tbody key={index}>
                  <tr key={prod.id}>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                    <td>{prod.quantity}</td>
                    <td>$ {prod.price * prod.quantity}</td>
                    <td>
                      <button onClick={() => handlerDelete(prod.id)}>
                      ❌ 
                      </button>
                      <button onClick={() => handlerDelete(prod.id, true)}>
                        Eliminar todos! ❌ 
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div>
          <table className={style.totalTable}>
            <thead>
              <tr>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$ {totalSale}</td>
              </tr>
            </tbody>
          </table>
          <button className={style.paymentButton} onClick={handlerBuy}>
            Pagar
          </button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
      <Link to="/home" className={style.linkButton}>
        <button>Seguir Comprando</button>
      </Link>
    </div>
  );
}

export default ShoppingCart;