// The Categories Reducer.

let initialState = {
  categories: [
    { name: 'pickaxes', display: 'Pickaxes', description: 'Minecraft Pickaxes' },
    { name: 'swords', display: 'Swords', description: 'Minecraft Swords' },
    { name: 'helmets', display: 'Helmets', description: 'Minecraft Helmets' },
    ],
    active: ''
};

export const categorySelection = (name) => {
return {
  type: 'SELECT-CATEGORY',
  payload: name
  };
};

export const reset = () => {
  return {
    type: 'RESET-CATEGORY'
  };
};

const selectCategory = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {

    case 'SELECT-CATEGORY': 
          return {...state, active: payload };

    case 'RESET':
      return initialState;

    default: 
      return state;
  }
}

export default selectCategory;
