import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Redux/actions";
import styles from "./Favorites.module.css";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteProducts);

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Tus Favs!</h2>
      {favorites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <ul className={styles.productlist}>
          {favorites.map((product) => (
            <li key={product.id} className={styles.productitem}>
              <img src={product.images} alt={product.title} />
              <div className={styles.productdetails}>
                <h4 className={styles.producttitle}>{product.title}</h4>
                <p className={styles.productprice}>Precio: ${product.price}</p>
              </div>
              <button
                className={styles.removebutton}
                onClick={() => handleRemoveFromFavorites(product.id)}
              >
                Eliminar de favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;