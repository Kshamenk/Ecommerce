
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts, deleteProduct } from '../../Redux/actions';

import { Link } from 'react-router-dom';
import styles from './Products.module.css'; // Importar los estilos

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(allProducts());
    return () => {};
  }, [dispatch]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className={styles.container}>
      {products.map((prod) => (
        <div key={prod.id} className={styles.product}>
          <h2>{prod.title}</h2>
          <h4> Descripcion: {prod.description}</h4>
          <h4>Precio: ${prod.price}</h4>
          <h4>Porcent. de Desc. :{prod.discountPercentage}%</h4>
          <h4>Calificacion: {prod.rating}</h4>
          <h4>Stock: {prod.stock}</h4>
          <h4>Marca: {prod.brand}</h4>
          <h4>Categoria: {prod.category}</h4>
          <Link to={`../updateproduct/${prod.id}`}>
            <button className={`${styles.updatebtn}`}>🔄</button>
          </Link>
          <button
            onClick={() => handleDeleteProduct(prod.id)}
            className={`${styles.deletebtn}`}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;


