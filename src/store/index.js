import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './categories-reducer';
import products from './products-reducer';

let reducers = combineReducers({ categories, products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
