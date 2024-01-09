import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProductById } from '../../Redux/actions';
import { useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handlerAddProduct = (e) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };

  const handleLeaveComment = () => {
    navigate(`/products/${id}/comment`);
  };

  const handleViewComments = () => {
    navigate(`/products/${id}/comments`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productdetails}>
        <img className={styles.productimage} src={product.thumbnail} alt="Img not Found" />
        <h2 className={styles.producttitle}>{product.title}</h2>
        <h3 className={styles.productbrand}>Marca: {product.brand}</h3>
        <h6 className={styles.productrating}>⭐Rating: {product.rating}</h6>
        <h6 className={styles.productdescription}>Descripcion: {product.description}</h6>
        <h1 className={styles.productprice}>u$d:  {product.price}</h1>
      </div>
      <div className={styles.productbuttons}>
        <button onClick={handlerAddProduct}>Agregar al carrito</button>
        <button onClick={handleLeaveComment}>Dejanos tu comentario !</button>
        <button onClick={handleViewComments}>Ver comentarios</button>
      </div>
    </div>
  );
}

export default Detail;