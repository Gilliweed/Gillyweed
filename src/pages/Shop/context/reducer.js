import React from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
    case "Increment": {
      let updatedCart = state.cart.map((curElem) => {
        if (curElem._id === action.payload) {
          return { ...curElem, qty: curElem.qty + 1 };
        }
        return curElem;
      });
      return {
        ...state, cart: updatedCart
      };
    }

    default:
      return state;
  }
};
