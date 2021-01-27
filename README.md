# LAB - Class 36 - 39

## Project: React Storefront

### Author: Nathan Cox

### Links and Test Objects

- [StoreFrontPorch on GH-Pages](https://401-advanced-javascript-nathanrcox.github.io/storefront/)
<!-- - [Back-end on Heroku](https://nrc-api-server.herokuapp.com/) -->

### Resources

### Setup

### Phase 1 (lab 36) Application State with Redux: User & Developer Stories

- [x] As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- [x] As a user, I want to choose a category and see a list of all available products matching that category.
- [ ] As a user, I want a clean, easy-to-use user interface, so that I can shop the online store with confidence.

---

- [x] Create a visually appealing site using Material UI.
- [x] Use a Redux Store to manage the state of categories and items in the store.
- [x] Display a list of categories from state.
- When the user selects (clicks on) a category:
  - [ ] Identify that category as selected (change of class/display).
  - [x] Show a list of products associated with the category.

---

Aplication Architecture:

- [x] Begin with creating your application using create-react-app.
- [x] Install Material UI as a dependency.
- [x] Write an App component that serves as the container for all sub-components of this application.
- [x] A \<Header> component which shows the name of your virtual store.
- [x] A \<Footer> component which shows your copyright and contact information.
- A \<Categories> component.
  - [x] Shows a list of all categories.
  - [x] Dispatches an action when one is clicked to “activate” it.
- [x] A \<Products> component that displays a list of products associated with the selected category.

---

The Redux Store:

- Categories
  - [x] State should contain a list of categories as well as the active category.
  - [x] Each category should have a normalized name, display name, and a description.
  - [x] Create an action that will trigger the reducer to change the active category.
  - [x] Update the active category in the reducer when this action is dispatched.

- Products
  - [x] State should be a list of all products.
  - [x] Each product should have a category association, name, description, price, inventory count.
  - [x] Create an action that will trigger when the active category is changed. HINT: Multiple reducers can respond to the same actions.
  - [x] Create a reducer that will filter the products list based on the active category.
  
- Active Category
  - [x] State should store active category.
  - [x] Other components (products, etc) might need to reference this.

### Phase 2 (lab 37) Combined Reducers: break up the store into multiple reducers that share functionality and data among components

#### User & Developer Stories

- [x] As a user, I want to choose from products in the list and add them to my shopping cart.
- [x] As a user, I want to see the products that I've added to my shopping cart.
- [ ] As a user, I want to change the quantity of items I intend to purchase in my shopping cart.
- [ ] As a user, I want to be able to remove an item from my shopping cart.

---

- [ ] Continue to use Material UI Components for layout and styling.
- [x] Add a "Cart" indicator with a counter to the header, like this: **Cart (0)**.
- [x] Create a new Cart component to show the items in the user's cart.

#### Application Flow

1. User sees a list of categories.
  1a. User chooses a category and sees a list of products.
  1b. User clicks the  "Add to Cart" button on any product.
2. User clicks the "Cart" link in the header.
  2a. User sees a list of all products in the cart.
  2b. User clicks the delete button on an item and sees the item removed.
  2c. User changes the quantity selector on an item and sees the cart total change.

#### Application Architecture

- Add a new component to the page: `<SimpleCart />`
  - [ ] Displays a short list (title only) of products in the cart
  - [ ] This should be present at all times
- Home Page Operation:
  - When the user selects (clicks on) a category ...
    - [ ] Identify that category as selected.
    - [ ] Show a list of products associated with the category, that have a quantity > 0.
    - [x]Add an "add to cart" button to each product
  - [x] When a user clicks the "add to cart" button add the item to their cart
  - In the `<SimpleCart/>` component, show a running list of the items in the cart (just the titles)
  - [x] Change the `(0)` indicator in the header to show the actual number of items in the cart
  - [x] Reduce the number in stock for that product

#### Redux State Management

Products

- [x] Create an action that will trigger the reducer to reduce the stock counter.
- [x] Create a reducer that reduces the # in stock when that action is dispatched.

Cart

- [x] State should be an array of products that have been added (all product details).
- [x] Create an action that will trigger the reducer to add the selected item to the cart.**Hint:** This could be the same action type as you create for the Products reducer.
- [x] Create a reducer that adds the product to the array of items in state.

---

### Phase 3 (lab 38): Connect the Virtual Store to an API to retrieve live data from your data source, using thunk to enable asynchronous actions

#### User Stories

- [ ] As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
- [ ] As a user, I want to know to that, when I add an item to my cart, it is removed from inventory so that no other users can purchase it.

#### Technical Requirements/Notes

- [ ] Continue to use Material UI Components for layout and styling
- [ ] Load the category and product list from a remote API on page load.
- [ ] Update the product quantity in stock when adding items to (or removing from) the cart.
- [ ] Continue to use multiple reducers.

#### Redux State Management

- [ ] You will need to use useEffect() to dispatch a load action on the initial page load.
  - [ ] This will need to use thunk as it will be asynchronous
- [ ] When adding/removing/updating items in the cart, the action/reducer will need to update the server.
- [ ] Perform the appropriate post, put, or delete action via API call (using thunk in an async action) on each of these actions.


#### `.env` requirements (where applicable)

#### How to initialize/run your application (where applicable)

`npm start`

#### How to use your library (where applicable)

### Tests

- To run tests, type npm test in the command line from the root directory.
- Any tests of note?: N/A thus far.
- Describe any tests that you did not complete, skipped, etc.: All, for now.

### UML

![Storefront UML (Lab 36)]()
