import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { increment } from '../store/products-reducer';
import { categorySelection } from '../store/categories-reducer';


const mapDispatchToProps = { increment, categorySelection };

function Products(props) {
  
  const selectedProduct = (name) => {
    props.increment(name);
  }

  useEffect(() => console.log('Props on Products:', props), [props]);

  return (
    <section id="product-selection">
      {props.products.products.map((product, idx) => (
        <>
          {(props.activeCategory === product.category) ?
            <ul key={idx}>
              <li>{product.description}</li>
              <li>Price: {product.price}</li>
              <li>Number in Stock: {product.inventoryCount}</li>
              <button onClick={() => selectedProduct(product.name)}>Add to Cart</button>
            </ul>
            : ''
          }
        </>
      ))}
  </section>

  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.active,
  products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
