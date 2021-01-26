# LAB - Class 36 - 39

## Project: React Storefront

### Author: Nathan Cox

### Links and Test Objects

<!-- - [Front-end on GH-Pages](https://401-advanced-javascript-nathanrcox.github.io/to-do/)
- [Back-end on Heroku](https://nrc-api-server.herokuapp.com/) -->

### Resources

### Setup

#### Phase 1 (lab 36) Application State with Redux: User & Developer Stories

- [x] As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- [x] As a user, I want to choose a category and see a list of all available products matching that category.
- [ ] As a user, I want a clean, easy-to-use user interface, so that I can shop the online store with confidence.

---

- [ ] Create a visually appealing site using Material UI.
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
- [ ] A <Header> component which shows the name of your virtual store.
- [ ] A <Footer> component which shows your copyright and contact information.
- [ ] A <Categories> component.
  - [ ] Shows a list of all categories.
  - [ ] Dispatches an action when one is clicked to “activate” it.
- [ ] A <Products> component that displays a list of products associated with the selected category.

---

The Redux Store:

- Categories
  - [ ] State should contain a list of categories as well as the active category.
  - [ ] Each category should have a normalized name, display name, and a description.
  - [ ] Create an action that will trigger the reducer to change the active category.
  - [ ] Update the active category in the reducer when this action is dispatched.

- Products
  - [ ] State should be a list of all products.
  - [ ] Each product should have a category association, name, description, price, inventory count.
  - [ ] Create an action that will trigger when the active category is changed. HINT: Multiple reducers can respond to the same actions.
  - [ ] Create a reducer that will filter the products list based on the active category.
  
- [ ] Active Category
  - [ ] State should store active category.
  - [ ] Other components (products, etc) might need to reference this.

#### Phase 2

#### Phase 3

#### Phase 4

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
