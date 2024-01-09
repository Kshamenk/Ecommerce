import React, { useState } from "react";
import style from "./CardContainer.module.css";
import Card from "../Card/Card";
import { useSelector } from 'react-redux'
import Paginado from "../Paginado/Paginado";
import Loading from "../Loading/Loading";

function CardsContainer() {
  const loadingState = useSelector((state) => state.loading);
  const products = useSelector((state) => state.allProducts)

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const indexLastProduct = currentPage * productPerPage;
  const indexFirstProduct = indexLastProduct - productPerPage;
  const productsCurrent = products.slice(indexFirstProduct, indexLastProduct);
  const productsFinal = [...productsCurrent]

  return (
    <div>
      {!loadingState ? (
        <div className={style.loadingcontainer}>
          <span className={style.loadingtext}></span>
          <Loading />
        </div>
      ) : (
        <div className={style.cardcontainer}>
          {productsFinal.map((prod) => {
            return (
              <Card
                key={prod.id}
                id={prod.id}
                title={prod.title}
                images={prod.images[0]}
                description={prod.description}
                price={prod.price}
                rating={prod.rating}
              />
            );
          })}
        </div>
      )}
      <div className="pagination">
        <Paginado
          productPerPage={productPerPage}
          productsAll={products.length}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
    
  );
}

export default CardsContainer;
