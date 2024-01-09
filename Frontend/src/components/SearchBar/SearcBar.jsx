import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {    allProducts, getProductByName } from '../../Redux/actions';
import style from "./SearcBar.module.css";
function SearcBar() {
  const [input, setInput] = useState('');
  const [flag, setFlag] = useState(true)
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allProducts)

  const handlerInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getProductByName(input));
    setInput("")
    setFlag(false)
  };

  const handlerSubmitAll = (event) => {
    event.preventDefault()
 dispatch(allProducts())
    setFlag(true)
  }

  const filteredProducts = allProduct.filter((p) =>
  p.title.toLowerCase().includes(input.toLowerCase())
)
  

  

  if (!filteredProducts.length) {
    return (
        <div> De momento, no hay nada para mostrar...</div>
    )
}

return (
  <div className={style.container}>
    <form >
      <input
        type="text"
        value={input}
        onChange={handlerInputChange}
        className={style.input}
      />
      {flag ? (
        <button onClick={handleSubmit} type="submit" className={style.searchBtn}>
          Buscar
        </button>
      ) : (
        <button onClick={handlerSubmitAll} className={style.allBtn}>
          Traer todos!
        </button>
      )}
    </form>
  </div>
);
}

export default SearcBar


//Preguntar a Gonzalo q onda