import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let API = "https://api-crud.elcho.dev/api/v1/04669-dd5ce-808e6/parf";
  // const [product, setProduct] = useState([]);

  // Функции для нового продукта
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }
  // Отображать продукт
  const readProduct = async () => {
    const response = await axios.get(API);
    dispatch({
      type: "GET",
      payload: response.data,
    });
  };
  // Удалить продукт
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  // Редактировать
  const updateProduct = async (id, updatedData) => {
    try {
      await axios.patch(`${API}/${id}`, updatedData);
      readProduct(); 
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  const values = {
    data: state.data,
    addProduct,
    readProduct,
    deleteProduct,
    updateProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
