import React from 'react';
import { connect } from 'react-redux';
import { categorySelection } from '../store/categories-reducer';

const mapDispatchToProps = { categorySelection };

function SelectCategory(props) {
  console.log('Props on Categories:', props);

  const selectedCategory = (name) => {
    props.categorySelection(name);
  };

  return (
    <section id="category-selection">
      {props.category.categories.map((selection, idx) => (
        <ul key={idx}>
          <li>{selection.display}</li>
          <li>{selection.description}</li>
        <button onClick={() => selectedCategory(selection.name)}>Select this Category</button>
        </ul>
      ))}
    </section>
  )
}

const mapStateToProps = state => ({ 
  category: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);
