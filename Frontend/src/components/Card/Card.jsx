
import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import Score from "../Score/Score";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "../../Redux/actions";

function Card(props) {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favoriteProducts);
  const cart = useSelector((state) => state.cart);

  const { id, title, images, price, rating } = props;

  const isFavorite = favoriteProducts.some((product) => product.id === id);
  const isAddedToCart = cart.some((product) => product.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart(id));
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(props));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div key={id} className={style.block}>
      <div className={style.neon}>
        <img src={images} alt="img not found" width="150" height="150" />
        <div className="info">
          <h2 className={style.nombre}>{title}</h2>
          <Score rating={rating} className={style.score} />
          <h3>U$d {price}</h3>
        </div>
        <div className={style.buttons}>
          <Link to={`/detail/${id}`}>
            <button>mas info...</button>
          </Link>
          <button
            onClick={handleAddToCart}
            className={`${style.addedToCart} ${isAddedToCart ? style.active : ""}`}
          >
            {isAddedToCart ? "✔️ Agregado al carrito" : "Agregar al carrito"}
          </button>
          {isFavorite ? (
            <button
              className={`${style.favoritesbtn} ${style.active}`}
              onClick={handleRemoveFromFavorites}
            >
              ❤️ Favorito
            </button>
          ) : (
            <button
              className={style.favoritesbtn}
              onClick={handleAddToFavorites}
            >
              🤍 Agregar a favoritos
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;