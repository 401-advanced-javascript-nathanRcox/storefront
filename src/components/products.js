import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/cart-reducer';
import { decrementPut } from '../store/products-reducer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import { Portal } from '@material-ui/core';

const mapDispatchToProps = { addItem, decrementPut };

function Products(props) {
  console.log('Props on Products:', props.state);
  const selectedProduct = (name) => {
    props.addItem(name);
    props.decrementPut(name);
    // console.log('Props.state on products:', props.state);
  }

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
  state,
  products: state.products,
  activeCategory: state.categories.active,
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
