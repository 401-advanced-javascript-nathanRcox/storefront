import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categories from './categories-reducer';
import products from './products-reducer';
import cart from './cart-reducer';
import API from './API-reducer'

let reducers = combineReducers({ categories, products, cart, API });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();
