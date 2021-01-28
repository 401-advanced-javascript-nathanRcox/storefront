import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import Cart from './components/simple-cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/">
              <Categories />
              <Products />
            </Route>
            {/* <Route exact path="/products"> */}
            {/* </Route> */}
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
