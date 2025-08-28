import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  let API = "https://api-crud.elcho.dev/api/v1/11f92-85c14-4ef1b/parfume";
  const [product, setProduct] = useState([]);

  // Функции для нового продукта
  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  const values = { addProduct };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
