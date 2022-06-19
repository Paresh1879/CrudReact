import React, { useState } from "react";

let ProductContext = React.createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([
    {
      name: "iPhone 12 Pro",
      quantity: "12",
      price: "$1091",
    },
    {
      name: "SAMSUNG Galaxy S21",
      quantity: "10",
      price: "$999.99",
    },
    {
      name: "Roku Streaming Stick+",
      quantity: "5",
      price: "$39.99",
    },
  ]);
  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
