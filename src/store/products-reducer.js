// The Products Reducer.
import superagent from 'superagent';

const initialState = { products: [] }
  // products: [
  //   { category: 'pickaxes', name: 'wooden pickax', description: 'Minecraft Wooden Pickax', price: 'Two Sticks', inventoryCount: 5, quantityInCart: 0 },
  //   { category: 'pickaxes', name: 'stone pickax', description: 'Minecraft Stone Pickax', price: 'Two Rocks', inventoryCount: 3, quantityInCart: 0 },
  //   { category: 'pickaxes', name: 'diamond pickax', description: 'Minecraft Diamond Pickax', price: 'One Diamond', inventoryCount: 1, quantityInCart: 0 },
  //   { category: 'swords', name: 'wooden sword', description: 'Minecraft Wooden Sword', price: 'Two Sticks', inventoryCount: 5, quantityInCart: 0 },
  //   { category: 'swords', name: 'stone sword', description: 'Minecraft Stone Sword', price: 'Two Rocks', inventoryCount: 3, quantityInCart: 0 },
  //   { category: 'swords', name: 'diamond sword', description: 'Minecraft Diamond Sword', price: 'One Diamond', inventoryCount: 1, quantityInCart: 0 },
  //   { category: 'helmets', name: 'wooden helmet', description: 'Minecraft Wooden Helmet', price: 'Two Sticks', inventoryCount: 5, quantityInCart: 0 },
  //   { category: 'helmets', name: 'stone helmet', description: 'Minecraft Stone Helmet', price: 'Two Rocks', inventoryCount: 3, quantityInCart: 0 },
  //   { category: 'helmets', name: 'diamond helmet', description: 'Minecraft Diamond Helmet', price: 'One Diamond', inventoryCount: 1, quantityInCart: 0 },
  // ]

// export const renderProducts = (category) => {
//   return {
//     type: 'DISPLAY-PRODUCTS',
//     payload: category
//   };
// };

const API = process.env.REACT_APP_API

export const get = () => dispatch => {
  console.log('GET in API');
  return superagent.get(`${API}`)
  .then(response => {
    dispatch(getAction(response.body));
  });
};

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const decrementPut = (item) => dispatch => {
  let object = {...item, inventoryCount: item.inventoryCount-1};
  console.log({object});
  return superagent.put(`${API}/${object._id}`)
    .send(object)
    .then(response => {
      console.log('Response:', response.body);
      dispatch(decrement(response.body));
    });
}

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  };
};

export const decrement = (item) => {
  return {
    type: 'DECREMENT',
    payload: item
  };
};

const productSelection = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'INCREMENT': 
      let products = state.products.map(selection => {
        if (selection.name === payload.name) {
          return { ...selection, inventoryCount: selection.inventoryCount + 1 }
        }
        return selection;
      });
      return {...state, products};

      case 'GET':
        return {products: payload};

      case 'DECREMENT':
        console.log('Payload in Decrement:', payload.name)
        let items = state.products.map(item => {
          if (item.name === payload.name) {
            return { ...item, inventoryCount: item.inventoryCount - 1}
          }
          return item;
        });

        let blah = {products: items};
        console.log('BLAH:', blah);
        return blah;

      case 'RESET':
        return initialState;

      default: 
      return state;
  }
}

export default productSelection;
