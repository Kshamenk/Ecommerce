
import axios from "axios";
// PRODUCT
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
//COMMENT
export const LEAVE_COMMENT = "LEAVE_COMMENT";
export const GET_COMMENTS_BY_PRODUCT = "GET_COMMENTS_BY_PRODUCT"
// CATEGORY
export const ALL_CATEGORIES = "ALL_CATEGORIES";
//FILTER
export const CATEGORY_FILTER = "CATEGORY_FILTER";
// ORDER
export const ORDER_PRODUCT_BY_PRICE = "ORDER_PRODUCT_BY_PRICE";
export const ORDER_PRODUCT_BY_RATING = "ORDER_PRODUCT_BY_RATING";
export const ORDER_PRODUCT_BY_BRAND = "ORDER_PRODUCT_BY_BRAND";
// FAVORITES
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
// CART
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const ALL_PROD_CART = "ALL_PROD_CART";

// PRODUCT
export const allProducts = () => {
  return async function (dispatch) {
    const products = (await axios.get("http://localhost:3001/products")).data;
    dispatch({ type: ALL_PRODUCTS, payload: products });
  };
};
export const getProductById = (id) => {
  return async function (dispatch) {
    const product = (await axios.get(`http://localhost:3001/products/${id}`))
      .data;
    dispatch({ type: GET_PRODUCT_BY_ID, payload: product });
  };
};
export const getProductByName = (title) => {
  return async function (dispatch) {
    const product = (
      await axios.get(`http://localhost:3001/products/?title=${title}`)
    ).data;
    dispatch({ type: GET_PRODUCT_BY_NAME, payload: product });
  };
};

export const deleteProduct = (id)=> {
  
  return async function (dispatch) {
     await axios.delete(`http://localhost:3001/products/${id}`)
      
    dispatch({ type: DELETE_PRODUCT , payload:id});
  };
}

//COMMENT

export const getCommentsByProduct = (id) =>{
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/comments/${id}`);
    const comments = response.data;
      dispatch({ type: GET_COMMENTS_BY_PRODUCT, payload: comments });
  }
}

export const leaveComment = (productId,text) => {
  return async function (dispatch) {
  
      const response = await axios.post(`http://localhost:3001/comments`,  {productId, text} );
      const updatedProduct = response.data
      dispatch({ type: LEAVE_COMMENT, payload: updatedProduct });

  };
};

// CATEGORY
export const allCategories = () => {
  return async function (dispatch) {
    const categories = (await axios.get("http://localhost:3001/category")).data; 
    dispatch({ type: ALL_CATEGORIES, payload: categories });
  };
};
// FILTER
export const filterCategory = (catName) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProductsCopy];
    let productsFilterByCategory;
    if (catName === "all") {
      productsFilterByCategory = allProducts;
    } else {
      productsFilterByCategory = allProducts.filter(
        (prod) => prod.category === catName
      );
    }
    dispatch({ type: CATEGORY_FILTER, payload: productsFilterByCategory });
  };
};
// ORDER
export const orderProductByPrice = (orderPrice) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProducts];
    let productsPrice;
    if (orderPrice === "menor") {
      productsPrice = allProducts.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    } else if (orderPrice === "mayor") {
      productsPrice = allProducts.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    }
    dispatch({ type: ORDER_PRODUCT_BY_PRICE, payload: productsPrice });
  };
};
export const orderProductByRating = (orderRating) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProducts];
    let productsRating;
    if (orderRating === "menor") {
      productsRating = allProducts.sort((a, b) => {
        if (a.rating > b.rating) {
          return 1;
        }
        if (a.rating < b.rating) {
          return -1;
        }
        return 0;
      });
    } else if (orderRating === "mayor") {
      productsRating = allProducts.sort((a, b) => {
        if (a.rating < b.rating) {
          return 1;
        }
        if (a.rating > b.rating) {
          return -1;
        }
        return 0;
      });
    }
    dispatch({ type: ORDER_PRODUCT_BY_RATING, payload: productsRating });
  };
};
export const orderProductByBrand = (selectedBrand) => {
  return async function (dispatch, getState) {
    const allProducts = [...getState().allProductsCopy];
    let productBrand;
    if (selectedBrand === "All") {
      productBrand = allProducts;
    } else {
      productBrand = allProducts.filter((p) => p.brand.includes(selectedBrand));
    }
    dispatch({ type: ORDER_PRODUCT_BY_BRAND, payload: productBrand });
  };
};
// FAVORITES
export const addToFavorites = (favorite) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: favorite,
  };
};
export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
// CART
export const addToCart = (id) => {
  return async function (dispatch) {
    dispatch({ type: ADD_TO_CART, payload: id });
  };
};
export const delFromCart = (id, all = false) =>
  all
    ? { type: REMOVE_ALL_FROM_CART, payload: id }
    : { type: REMOVE_ONE_FROM_CART, payload: id };
export const clearCart = () => {
  return { type: CLEAR_CART };
};
export const allProdCart = () => {
  return { type: ALL_PROD_CART };
};
