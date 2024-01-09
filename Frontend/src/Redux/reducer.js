import {
  ALL_CATEGORIES,
  CATEGORY_FILTER,
  ORDER_PRODUCT_BY_PRICE,
  ORDER_PRODUCT_BY_RATING,
  ALL_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  ORDER_PRODUCT_BY_BRAND,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  ALL_PROD_CART,
  DELETE_PRODUCT,
  LEAVE_COMMENT,
  GET_COMMENTS_BY_PRODUCT
} from "./actions.js";

const initialState = {
  allProducts: [],
  allProductsCopy: [],
  product: [],
  allCategories: [],
  allCategoriesCopy: [],
  loading: false,
  cart: [],
  favoriteProducts: [],
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        allProductsCopy: action.payload,
        loading: true,
      };
    case ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload,
        allCategoriesCopy: action.payload,
      };
    case CATEGORY_FILTER:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
      };
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };
      case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.filter((prod)=>{
          return prod.id !== action.payload
        }) 
      };
      case LEAVE_COMMENT: 
      return {
        ...state,
      };
      case GET_COMMENTS_BY_PRODUCT:
      return {
        ...state,
        comments: action.payload, 
      };
    case ORDER_PRODUCT_BY_PRICE:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ORDER_PRODUCT_BY_RATING:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ORDER_PRODUCT_BY_BRAND:
      return {
        ...state,
        allProducts: action.payload,
      };
    case ALL_PROD_CART: {
      return {
        ...state,
        cart: state.cart
      }
    }
    case ADD_TO_CART: {
      let newItem = state.allProducts.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        cart:[],
      };


    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    default:
      return {
        ...state,
      };
  }
}
