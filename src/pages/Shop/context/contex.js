import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "./reducer";

const Cart = createContext();

const Contex = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Contex;

export const CartState = () => {
  return useContext(Cart);
};
