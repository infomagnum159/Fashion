import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API_CATEGORY } from "../helpers/const";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};

const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GETONEPRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };

  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };

  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    console.log(data);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GETONEPRODUCT",
      payload: data,
    });
  };

  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };

  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORY, newCategory);
    navigate("/products");
  };

  const getCategories = async () => {
    const { data } = await axios(API_CATEGORY);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
  };

  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    createCategory,
    getCategories,
    categories: state.categories,
    fetchByParams,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
