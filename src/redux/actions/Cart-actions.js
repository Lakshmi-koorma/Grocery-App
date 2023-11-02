import { ActionTypes } from "../constants/ActionTypes";

export const addToCart = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products,
  };
};
