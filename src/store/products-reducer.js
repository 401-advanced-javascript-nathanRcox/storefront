// The Products Reducer.

//Each product should have a category association, name, description, price, inventory count.
const initialState = {
  products: [
    { category: 'pickaxes', name: 'wooden pickax', description: 'Minecraft Wooden Pickax', price: 'Two Sticks', inventoryCount: 5 },
    { category: 'pickaxes', name: 'stone pickax', description: 'Minecraft Stone Pickax', price: 'Two Rocks', inventoryCount: 3 },
    { category: 'pickaxes', name: 'diamond pickax', description: 'Minecraft Diamond Pickax', price: 'One Diamond', inventoryCount: 1 },
    { category: 'swords', name: 'wooden sword', description: 'Minecraft Wooden Sword', price: 'Two Sticks', inventoryCount: 5 },
    { category: 'swords', name: 'stone sword', description: 'Minecraft Stone Sword', price: 'Two Rocks', inventoryCount: 3 },
    { category: 'swords', name: 'diamond sword', description: 'Minecraft Diamond Sword', price: 'One Diamond', inventoryCount: 1 },
    { category: 'helmets', name: 'wooden helmet', description: 'Minecraft Wooden Helmet', price: 'Two Sticks', inventoryCount: 5 },
    { category: 'helmets', name: 'stone helmet', description: 'Minecraft Stone Helmet', price: 'Two Rocks', inventoryCount: 3 },
    { category: 'helmets', name: 'diamond helmet', description: 'Minecraft Diamond Helmet', price: 'One Diamond', inventoryCount: 1 },
  ]
};

export const renderProducts = (category) => {
  return {
    type: 'DISPLAY-PRODUCTS',
    payload: category
  }
}

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  };
};

const productSelection = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'INCREMENT': 
      let products = state.products.map(selection => {
        if (selection.name === payload) {
          return { name: selection.name, inventoryCount: selection.inventoryCount + 1 }
        }
        return selection;
      });

      return {...state, products};

      case 'RESET':
        return initialState;

      default: 
      return state;
  }
}

export default productSelection;
