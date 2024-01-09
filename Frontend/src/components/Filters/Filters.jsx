import React from "react";
import style from "./Filters.module.css";
import { filterCategory, orderProductByBrand } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Filters() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.allCategories);
  const products = useSelector((state) => state.allProductsCopy);

  const marcasUnicas = new Set(products.map((producto) => producto.brand));
  const marcasSinRepetir = Array.from(marcasUnicas);

  const handleCategoryChange = (catName) => {
    dispatch(filterCategory(catName));
  };

  const handleBrandChange = (selectedBrand) => {
    dispatch(orderProductByBrand(selectedBrand));
  };

  return (
    <div className={style.container}>
      <div className={style.filter}>
        <label  htmlFor="category">
          Categoria
        </label>
        <select
          className={style.selectFilter} // Aplicar estilo al select
          name="category"
          id="category"
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((categorie) => (
            <option value={categorie.name} key={categorie.id}>
              {categorie.name}
            </option>
          ))}
        </select>
      </div>
      <div className={style.filter}>
        <label htmlFor="brand">Marca</label>
        <select
          className={style.selectFilter}
          name="brand"
          id="brand"
          onChange={(e) => handleBrandChange(e.target.value)}
        >
          <option value="All">All</option>
          {marcasSinRepetir.map((brand, index) => (
            <option value={brand} key={index}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;