import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsByProduct } from '../../Redux/actions';
import styles from './CommentsForProducts.module.css';

export default function CommentsForProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);

  useEffect(() => {
    dispatch(getCommentsByProduct(id));
  }, [dispatch, id]);

  if (!comments) {
    return <>Cargando comentarios...</>;
  }

  return (
    <div className={styles.container}>
      <h2>Comentarios del Producto</h2>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <p className={styles['comment-text']}>{comment.text}</p>
          <p className={styles['comment-date']}>{comment.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
