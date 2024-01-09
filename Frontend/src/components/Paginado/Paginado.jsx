import React from 'react';
import styles from './Paginado.module.css'; // Importar los estilos

export default function Paginado({
  productPerPage,
  productsAll,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(productsAll / productPerPage);

  const pageNumber = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.container}>
      {pageNumber &&
        pageNumber.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={styles.pagebutton} // Añadir el classname para el botón de página
          >
            {num}
          </button>
        ))}
    </div>
  );
}