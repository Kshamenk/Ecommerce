import React from 'react';
import style from './Order.module.css';
import { useDispatch } from "react-redux";
import { orderProductByPrice, orderProductByRating } from '../../Redux/actions';

function Order() { 
  const dispatch = useDispatch();

  const handlePriceChange = (orderPrice) => {
    dispatch(orderProductByPrice(orderPrice));
  }

  const handleRatingChange = (orderRating) => {
    dispatch(orderProductByRating(orderRating));
  }

  return (
    <div className={style.container}>
      <div className={style.order}>
        <label htmlFor="price">Precio </label>
        <select
          className={style.selectOrder}
          name="price"
          id="price"
          onChange={(e) => handlePriceChange(e.target.value)}
        >
          <option value="mayor">Mayor</option>
          <option value="menor">Menor</option>
        </select>
      </div>
      <div className={style.order}>
        <label htmlFor="rating">Rating</label>
        <select
          className={style.selectOrder}
          name="rating"
          id="rating"
          onChange={(e) => handleRatingChange(e.target.value)}
        >
          <option value="mayor">Mayor</option>
          <option value="menor">Menor</option>
        </select>
      </div>
    </div>
  );
}

export default Order;