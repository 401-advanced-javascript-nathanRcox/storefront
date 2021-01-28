// The cart reducer.

import productSelection from "./products-reducer";

const initialState = {
  cart: [],
  cartCount: 0,
};

// Actions go here
export const addItem = (item) => {
  return {
    type: 'ADD-ITEM',
    payload: item,
  };
};

export const changeQuantity = (item) => {
  return {
    type: 'CHANGE-QUANTITY',
    payload: item,
  }
}

const cart = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD-ITEM':
      payload = {...payload, quantityInCart: payload.quantityInCart+1}
      return {...state, cart: [...state.cart, payload], cartCount: state.cartCount+1};

    case 'CHANGE-QUANTITY':
      state.cart.forEach(value => {
      if (value.name === payload.name) {
        payload = {...payload, quantityInCart: payload.quantityInCart+1}
      }
    })
    return {...state, cart: [...state.cart, payload], cartCount: state.cartCount+1};

    default:
      return state; 
  }
}

export default cart; 
