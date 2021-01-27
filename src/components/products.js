import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/cart-reducer';
import { decrement } from '../store/products-reducer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import { Portal } from '@material-ui/core';

const mapDispatchToProps = { addItem, decrement };

function Products(props) {
  console.log('Props on Products:', props.products);
  const selectedProduct = (name) => {
    props.addItem(name);
    props.decrement(name);
  }

  useEffect(() => console.log('Props on Products:', props), [props]);

  // Use to further style the cards: https://material-ui.com/components/cards/#simple-card
  return (
    <Container maxWidth='md'>
        {props.products.products.map((product, idx) => (
          <>
            <Card>            
              {(props.activeCategory === product.category) ?
                <CardContent key={idx}>
                  <Typography>
                    {product.description}
                  </Typography>
                  <Typography>
                    Price: {product.price}
                  </Typography>
                  <Typography>
                    Number in Stock: {product.inventoryCount}
                  </Typography>
                  <button onClick={() => selectedProduct(product)}>
                    Add to Cart
                  </button>
                </CardContent>
                : ''
              }
            </Card>
          </>
        ))}
  </Container>
  )
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.active,
  products: state.products
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
