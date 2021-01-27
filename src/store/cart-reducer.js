// The cart reducer.

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

const cart = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD-ITEM':
      return {...state, cart: [...state.cart, payload], cartCount: state.cartCount+1};

    default:
      return state; 
  }
}

export default cart; 
